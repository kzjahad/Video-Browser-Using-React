import React, { Component } from 'react'
import('../css/index.css')

class VideoListItem extends Component {
    render() { 
        const {imgUrl, title, description, videoId, handleSelect} = this.props;
        return (
            <li
                 className='list-group-item media videolist'
                 onClick={() => handleSelect(videoId, title, description)}
                 >
                    <div >
                        <img 
                            className='mr-3'
                            src={imgUrl}
                            height = "100"
                            width= "150" 
                        />
                    </div>
                     <div className='media-body'>{title}</div>
            </li>
        );
    }
}
 
export default VideoListItem;