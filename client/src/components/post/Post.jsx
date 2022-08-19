import {useState, useEffect} from 'react'
import './post.css'
import {MoreVert} from "@mui/icons-material"
import {Link} from "react-router-dom"
import axios from 'axios'
import { format } from 'timeago.js';

export default function Post({post}) {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});

    useEffect(()=>{
        const fetchUser = async ()=>{
          const res = await axios.get(`/users/${post.userId}`)
          setUser(res.data)
        }
        fetchUser();
      },[post.userId])

    const likeHandler = ()=>{
        setLike(isLiked ? like-1 : like + 1);
        setIsLiked(!isLiked)
    }
   
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`profile/${user.username}`}>
                    <img src={user.profilePicture || "/assets/person/noAvatar.png"} alt="" className="postProfileImg" />
                    </Link>
                    <span className="postUsername">
                        {user.username}
                        </span>
                    <span className="postDate">{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.img} className='postImg' alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="/assets/like.png" alt="" onClick={likeHandler} />
                    <img className='likeIcon' src="/assets/heart.png" alt="" onClick={likeHandler}  />
                    <span className="postLikeCounter">{like} people like this</span>

                </div>
                <div className="postBottomRight">
                    <div className="postCommentText">{post.comment} comments</div>
                </div>
            </div>
        </div>
    </div>
  )
}
