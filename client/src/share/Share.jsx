import './share.css'
import {PermMedia, Label, Room, EmojiEmotions} from '@mui/icons-material'

export default function Share() {
  return (
    <div className="share">
    <div className="shareWrapper">
      <div className="shareTop">
      <img className='shareProfileImg' src="/assets/person/1.jpeg" alt="" />
      <input placeholder="What's on your mind" className='shareInput' type="text" />
      </div>
      <hr className="shareHr" />
      <div className="shareBottom">
        <div className="shareOptions">
          <div className="shareOption">
            <PermMedia htmlColor='tomato' className='shareIcon'/>
            <span className="shareOptionText">Photo of Video</span>
          </div>
          <div className="shareOption">
            <Label htmlColor='blue' className='shareIcon'/>
            <span className="shareOptionText">Tag</span>
          </div>
          <div className="shareOption">
            <Room htmlColor='green' className='shareIcon'/>
            <span className="shareOptionText">Location</span>
          </div>
          <div className="shareOption">
            <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
            <span className="shareOptionText">Feeling</span>
          </div>
        </div>
        <button className="shareButton">
          share
        </button>
      </div>
    </div>
    </div>
  )
}
