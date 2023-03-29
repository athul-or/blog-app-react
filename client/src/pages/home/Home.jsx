import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Footer from '../../components/footer/Footer'
import axios from 'axios'

import './Home.css'
import { useLocation } from 'react-router-dom'
import Newsletter from '../../components/newsletter/Newsletter'

export default function Home() {
  const [posts, setPosts] = useState([])
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts' + search)
      setPosts(res.data)
    }
    fetchPosts();
  },[])

  return (
    <>
      <Header />
      <div className='home'>
        <Posts posts={posts} />
      </div>
      <Newsletter/>
      <Footer/>
    </>

  )
}
