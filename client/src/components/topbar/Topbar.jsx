import './topbar.css'
import {Search, Person, Chat, Notifications} from '@mui/icons-material'

export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
          <span className="logo">Lamasocial</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
              <Search className="searchIcon"/>
              <input placeholder='Search for friends, post a video' type="text" className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
              <div className="topbarLink">Home</div>
              <div className="topbarLink">Timeline</div>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person/>
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat/>
              <span className="topbarIconBadge">3</span>
            </div>
            <div className="topbarIconItem">
              <Notifications/>
              <span className="topbarIconBadge">24</span>
            </div>
          </div>
          <img src="/assets/person/1.jpeg" alt="lady image" className="topbarImg" />
        </div>
    </div>
  )
}
