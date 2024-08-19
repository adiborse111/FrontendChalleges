import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <h1 className='ml-2'>Frontend Challenges</h1>
        <div className='p-4 flex flex-col underline'>
            <Link to={'https://qr-code-component-dun-beta.vercel.app/'}>Qr Code Component</Link>
            <Link to={'https://social-links-profile-main-ebon.vercel.app/'}>Social Links Profile</Link>
            <Link to={'https://blog-preview-card-main-khaki-eta.vercel.app/'}>Blog Preview Card</Link>
            <Link to={'https://recipe-page-main-smoky.vercel.app/'}>Recipe Page</Link>
            <Link to='/ProductCard'>Product Preview Card</Link>
        </div>
    </div>
  )
}

export default Home