import Feed from "../../components/feed/Feed";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css"
import axios from 'axios';
import {useState, useEffect} from 'react'
import {useParams} from 'react-router'

export default function Profile() {
    const [user, setUser] = useState({});
    const params = useParams();


    useEffect(()=>{
        const fetchUser = async ()=>{
          const res = await axios.get(`/users?username=${params.username}`)
          setUser(res.data)
        }
        fetchUser();
      },[params.username])

    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src={user.coverPicture || "/assets/person/noCover.png"} alt=""/>
                            <img className="profileUserImg" src={user.profilePicture || "/assets/person/noAvatar.png"} alt=""/>
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={params.username} />
                        <Rightbar user={user} />
                    </div>

                </div>

            </div>


        </>
    )
}
