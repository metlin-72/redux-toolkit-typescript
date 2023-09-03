import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to="/profile">프로파일</Link> | <Link to="/postList">포스트 리스트</Link>
    </div>
  )
}

export default Home