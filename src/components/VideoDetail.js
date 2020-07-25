import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { fetachSelectedData } from '../api/index'
import { Store } from '../store/index'
import VideoPlay from './VideoPlay'
import Linkify from 'react-linkify';

const VideoDetail = () => {
    const { globalState, setGlobalState } = useContext(Store)
    const location = useLocation()
    const setSelectedVideo = async () => {
        const searchParams = new URLSearchParams(location.search)
        const id = searchParams.get('v')
        await fetachSelectedData(id).then((res) => {
            const item = res.data.items.shift()
            setGlobalState({ type: 'SET_SELECTED', payload: {selected: item}})
        }) 
    }
    useEffect(() => {
        setSelectedVideo()
    }, [])
    return globalState.selected && globalState.selected.id ? (
        <div>
            <VideoPlay id={globalState.selected.id} />
            <p>{globalState.selected.snippet.title}</p>
            <hr />
            <Linkify><pre>{globalState.selected.snippet.description}</pre></Linkify>
        </div>
    ) : (<span>no data</span>)
}

export default VideoDetail
