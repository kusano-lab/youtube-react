import React, { useEffect, useContext } from 'react'
import Layout from '../components/Layout/Layout'
import { fetchPopularData } from '../api/index'
import { v4 as uuid } from 'uuid'
import { Store } from '../store/index'
import Style from './Top.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const VideoData = () => {
  const { globalState, setGlobalState } = useContext(Store)
  
  useEffect(() => {
    fetchPopularData().then(res => {
      setGlobalState({
        type: 'SET_POPULAR',
        payload: {popular: res.data.items}
      })
    })
    .catch(err => {
      console.log('ERROR!!')
    })
  }, [])

  return (
    <ul className={Style.grid}>
    {globalState.popular.map(item => (
      <li key={uuid()}>
        <a href={`/watch?v=${item.id}`}>
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
      <h1>Top page <FontAwesomeIcon icon={faCoffee} /></h1>
      <VideoData />
    </Layout>
  )
}

export default Top
