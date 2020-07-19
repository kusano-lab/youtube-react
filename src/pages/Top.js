import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import { fetchPopularData } from '../api/index'
import { v4 as uuid } from 'uuid'

const Data = ({item}) => {
  console.log(item)
  let href = `www.youtube.com/watch?v=${item.id}`
  return (
    <li>
      <a href={href}>
        <img src={item.snippet.thumbnails.default.url} alt=""/>
        <p>{item.snippet.title}</p>
      </a>
    </li>
  )
}


const Top = () => {
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
    <Layout>
      <h1>Top page</h1>
      <ul>
      {items.map(item => {
        return <Data key={uuid()} item={item} />
      })}
      </ul>
    </Layout>
  )
}

export default Top
