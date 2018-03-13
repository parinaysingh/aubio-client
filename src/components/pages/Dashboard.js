import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Playlist from '../Playlist';
import '../../../static/css/dashboard.css';


class Dashboard extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <Playlist/>
                    <div className="main">
                        <div className="search">
                            <input name="keywords" type="text" />
                            <span className="btn-feeling-lucky">Feeling Lucky?</span>
                        </div>
                        <div className="content-wrapper">
                            <div className="content-wrapper-overlay">
                                <div className="album">
                                    <img className="album-cover" src={require('../../../static/images/hbt.jpeg')} alt=""/>
                                    <div className="album-details">
                                        <div className="album-title"><strong>Post Traumatic EP</strong></div>
                                        <div className="artist"><small>Linkin Park</small></div>
                                        <div className="btn-play-all"><i className="material-icons">play_arrow</i><span>PLAY</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Dashboard;
