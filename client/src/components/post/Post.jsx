import React from 'react'
import { Link } from 'react-router-dom'
import './Post.css'

export default function Post({post}) {
  const PF = "http://localhost:5000/images/"
  
  return (
    <div className='post'>
      {post.photo && (
        <img className='postImg' src={PF + post.photo}
         alt="" />
      )}
         <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c)=>(
            <span className="postCat">
            <Link className="link" to="/posts?cat=Music" >
              {c.name}
            </Link>
          </span>
          ))}
        </div>
          <Link to={`/post/${post._id}`} className="link"  >
          <span className="postTitle" > {post.title}</span>
          </Link>
        {/* <hr /> */}
        <div className="postTime">
        <span className="postAuthor">Author : <b>{post.username}</b></span><span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
    </div>
  )
}
