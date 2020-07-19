import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import { fetchPopularData } from '../api/index'
import { v4 as uuid } from 'uuid'

const VideoData = () => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetchPopularData().then(res => {
      setItems(prev => [
        ...prev,
        ...res.data.items
      ])
    })
    .catch(err => {
      console.log('ERROR!!')
    })
  }, [])

  return (
    <ul>
    {items.map(item => (
      <li key={uuid()}>
        <a href={`www.youtube.com/watch?v=${item.id}`}>
          <img src={item.snippet.thumbnails.default.url} alt=""/>
          <p>{item.snippet.title}</p>
        </a>
      </li>
    ))}
    </ul>
  )
}


const Top = () => {
  return (
    <Layout>
      <h1>Top page</h1>
      <VideoData />
    </Layout>
  )
}

export default Top
