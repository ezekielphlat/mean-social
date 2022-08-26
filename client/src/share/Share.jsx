import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Share() {
  const { user } = useContext(AuthContext);
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={
              user.profilePicture
                ? user.profilePicture
                : "/assets/person/noAvatar.png"
            }
            alt=""
          />
          <input
            placeholder={"What's on your mind " + user.username + "?"}
            className="shareInput"
            type="text"
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo of Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feeling</span>
            </div>
          </div>
          <button className="shareButton">share</button>
        </form>
      </div>
    </div>
  );
}
