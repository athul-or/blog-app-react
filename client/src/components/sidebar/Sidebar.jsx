import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import axios from 'axios'
import {  Link, useLocation } from 'react-router-dom';

export default function Sidebar() {

  const PF = "http://localhost:5000/images/"
  // const [ cats ,setCats] = useState([]);

  const [profileuser,setProfileUser] = useState("");

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      const name = res.data.username;
      getProfile(name);
    };
    getPost();

    const getProfile = async (name) => {
      const res = await axios.post(`/users/${name}`);
      setProfileUser(res.data)
    };



  },[path]);
  

  // useEffect(()=>{
  //   const getCats = async ()=>{
  //     const res = await axios.get("/categories")
  //     setCats(res.data)
  //   }
  //   getCats();
  // },[])

  return (
    <div className='sidebar'>
        <div className="item">
            <span className="title">AUTHOR</span>
            {
            profileuser.profilePic ?<img className='rounded-circle sideImg' src={ PF + profileuser.profilePic} alt="" />:<img className='rounded-circle sideImg' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
             }
            <div className="item">
            <Link to={`/?user=${profileuser.username}`} className="profileName">
              <b> {profileuser.username}</b>
            </Link>
            </div>
            <p>{profileuser.about}</p>
        </div>
        {/* <div className="item">
        <span className="title">CATEGORIES</span>
        <ul className="list">
          {cats.map((c)=>(
            <Link to={`/?cat=${c.name}`} className='link'>
            <li className="listItem">{c.name}</li>
            </Link>
          ))}
        </ul>
        </div> */}
        <div className="item">
            <div className="title">FOLLOW ME</div>
            <div className="socialIcon">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            </div>
        </div>
    </div>
  )
}
