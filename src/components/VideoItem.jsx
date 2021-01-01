import React from 'react';
import './VideoItem.css'

const VideoItem = ({video}) => {
    const {snippet} = video;
    const {title, thumbnails, description} = snippet;
    return (
        <div className="video-item item">
        <img className="ui image" src={`${thumbnails.medium.url}`} alt={`${description}`}/>
        <div className="content">
            <a className="header" href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>{title}</a>
        </div>
        </div>
    )
};

export default VideoItem;