import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './Topbar.css'



export default function Topbar() {
  const {user, dispatch} = useContext(Context)
  const PF = "http://localhost:5000/images/"
  const handleLogout = () =>{
    dispatch({type:"LOGOUT"})
  }
  return (
    <div className='top'>
      <div className="topLeft">
      <span className='topTitleMain'><i class="fa-solid fa-feather"></i> Blogify</span>
      </div>
      <div className="topRight">
      <ul className="topList">
          <li className='topListItem'><Link to='/'className='link'>HOME</Link></li>
          <li className='topListItem'><Link to='/about'className='link'>ABOUT</Link></li>
          <li className='topListItem'><Link to='/contact'className='link'>CONTACT</Link></li>
          <li className='topListItem'><Link to='/write'className='link'>WRITE</Link></li>
          <li className='topListItem' onClick={handleLogout}>{user && "LOGOUT"}</li>
        </ul>
        {
          user ? (
           <Link to='/settings' className='link'>
            {
            user.profilePic ?<img className='topImg' src={PF + user.profilePic} alt="" />:<img className='topImg' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
             }
            </Link> 
          ) : (
            <ul className="topList">
              <li className="topListItem">
              <Link to="/login" className="link">LOGIN</Link>
              </li>
              <li className="topListItem">
              <Link to='/register' className="link">REGISTER</Link>
              </li>
            </ul>
          )
        }
      </div>
    </div>
  )
}
