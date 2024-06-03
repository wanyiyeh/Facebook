import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useRef, useState } from "react";
import axios from "axios";

export default function Share() {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);

  const fileHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;

      data.append("file", file);
      data.append("fileName", fileName);
      newPost.img = fileName;
      console.log(newPost);

      try {
        await axios.post("/upload", data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user.profilePicture
                ? user.profilePicture
                : "assets/person/noAvatar.png"
            }
            alt=""
            className="shareProfileImg"
          />
          <input
            placeholder="how do you think about the moment?"
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMediaIcon htmlcolor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo/Video</span>
              <input
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={fileHandler}
                style={{ display: "none" }}
              />
            </label>
            <div htmlcolor="blue" className="shareOption">
              <LabelIcon className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <LocationOnIcon htmlcolor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div htmlcolor="goldenrod" className="shareOption">
              <EmojiEmotionsIcon className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
