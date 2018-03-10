import React from 'react'
import Input from './inputSearch'
import VideoList from './videoList'
import VideoArea from './videoArea.js'
import style from '../css/styles.css'

//Constants:
const appBodyClass = "app-body";

class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            particularVideo: null
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClick = this.handleClick.bind(this);
        /*TODO: Will playing lists be available? */
    }

    handleSearch(videos) {
        this.setState({
            videos: videos
        });
    }

    handleClick(video) {
        this.setState({
            particularVideo: video
        });
    }

    render() {
        return (
            <div className={appBodyClass}>
                <Input onChange={videos => this.handleSearch(videos)}/>
                <VideoList videos={this.state.videos}
                           onClick={video => this.handleClick(video)}
                />
                <VideoArea
                    video={this.state.particularVideo}
                />
            </div>
        );
    }
}

export default Container;
