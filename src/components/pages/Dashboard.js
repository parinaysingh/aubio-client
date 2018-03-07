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
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Dashboard;
