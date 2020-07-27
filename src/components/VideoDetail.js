import React, { useContext } from 'react';
import { Store } from '../store/index'
import VideoPlay from './VideoPlay'
import Linkify from 'react-linkify';

const VideoDetail = () => {
    const { globalState } = useContext(Store)
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
