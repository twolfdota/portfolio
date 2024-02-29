import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube'
import { CSSTransition } from 'react-transition-group';
import IsLoading from './isLoading';

function VideoSrc({ url }) {
    const [loaded, setLoaded] = useState(false);
    function lazyLoad() {
        setTimeout(() => {
            setLoaded(true);
        }, 500)

    }
    return (
        <div>
            <IsLoading isLoading={!loaded}/>
            <CSSTransition
                in={loaded}
                timeout={1000}
                classNames="video-wrapper">
                <div className='videoItem'>

                    <ReactPlayer url={url} controls={true} onReady={lazyLoad} />

                </div>
            </CSSTransition>
        </div>
    )
}
export default VideoSrc;
