import React, { useContext } from 'react'
import { Store } from '../store/index'
import SideListItem from './SideListItem'

const SideList = () => {
    const { globalState} = useContext(Store)
    return (
        <div>
            {
                globalState.related ? globalState.related.map((video) => {
                    return (
                        <SideListItem
                            id={video.id.videoId}
                            key={video.id.videoId}
                            src={video.snippet.thumbnails.medium.url}
                            title={video.snippet.title}
                        />
                    )
                }) : <span>no related data</span>
            }
        </div>
    )
}

export default SideList
