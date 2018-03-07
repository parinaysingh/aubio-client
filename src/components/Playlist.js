import React from 'react';

class Playlist extends React.Component {
    render() {
        return (
            <div className="playlist">
                <div className="song">
                    <img className="album-cover" src={require('../../static/images/hbt.jpeg')} alt=""/>
                    <div className="song-details">
                        <div className="song-name"><strong>Somewhere I Belong</strong></div>
                        <div className="artist"><small>Linkin Park</small></div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Playlist;
