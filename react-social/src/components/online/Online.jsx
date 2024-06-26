import "./online.css";

export default function Online({ user }) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
        <span className="rightbarOnliner"></span>
      </div>
      <span className="rightbarUsername">{user.name}</span>
    </li>
  );
}
