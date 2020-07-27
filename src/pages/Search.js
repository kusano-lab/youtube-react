import React, { useEffect , useContext} from 'react'
import Layout from '../components/Layout/Layout'
import { useLocation } from 'react-router-dom'
import { fetchSearchData } from '../api'
import { Store } from '../store/index'
import Style from './Top.module.scss'
import { v4 as uuid } from 'uuid'

const Search = () => {
  const { globalState, setGlobalState } = useContext(Store)
  const location = useLocation()
  const setSearchResult = async () => {
    const searchParams = new URLSearchParams(location.search)
    const query = searchParams.get('query')
    if(query)
    await fetchSearchData(query).then((res) => {
      setGlobalState({ type: 'SET_SEARCHED', payload: { searched: res.data.items }})
    })
  }
  useEffect(() => {
    setSearchResult()
  }, [globalState.searched])
  return (
    <Layout>
      <ul className={Style.grid}>
        {
          globalState.searched ? globalState.searched.map((search) => {
            return (
              <li key={uuid()}>
                <a href={`/watch?v=${search.id.videoId}`}>
                  <img src={search.snippet.thumbnails.default.url} alt={search.snippet.title}/>
                  <p>{search.snippet.title}</p>
                </a>
              </li>
            )
          }) : <span>no seach data</span>
        }
      </ul>
    </Layout>
  )
}

export default Search
