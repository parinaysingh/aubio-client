import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <img className="album-cover" src={require('../../static/images/hbt.jpeg')} alt=""/>
                <div className="song-details">
                    <div className="song-name"><strong>Over n over n over again</strong></div>
                    <div className="artist"><small>Linkin Park</small></div>
                </div>
                <span className="material-icons heart">favorite</span>
                <div className="player-controls">
                    <i className="material-icons">skip_previous</i>
                    <i className="material-icons">play_circle_filled</i>
                    <i className="material-icons">skip_next</i>
                    <i className=" volume material-icons">volume_up</i>
                </div>
            </div>
        );
    }
}

export default Footer;
