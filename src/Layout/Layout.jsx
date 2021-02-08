import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'
import './Layout.css';
import Game from '../Game/Game';
import Leaderboard from '../Leaderboard/Leaderboard';

const Layout = () => {
    const [ key, setKey ] = useState('home');

    return (
        <div className="layout">
             <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="home" title="Play">
                    <Game />
                </Tab>
                <Tab eventKey="profile" title="Leaderboard">
                    <Leaderboard />
                </Tab>
            </Tabs>
        </div>
    );
}

export default Layout;