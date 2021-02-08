import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Toast from 'react-bootstrap/Toast';
import './Leaderboard.css';

const Leaderboard = () => {
    const [ show, setShow ] = useState(false);

    const refreshScoreboard = () => {
        setShow(true);
    }

    return (
        <div>
            <button onClick={refreshScoreboard}>Refresh score</button>
            {show ? (<div className="error">No internet connection !! <span onClick={() => setShow(false)}>X</span></div>) : null}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>UserName</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>10</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Leaderboard;