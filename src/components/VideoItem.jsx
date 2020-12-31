import React from 'react';

const VideoItem = ({video}) => {
    const {snippet} = video;
    const {title, thumbnails, description} = snippet;
    return (
        <div className="item">
        <img className="ui image" src={`${thumbnails.medium.url}`} alt={`${description}`}/>
        <div className="content">
            <div className="header">{title}</div>
        </div>
        </div>
    )
};

export default VideoItem;