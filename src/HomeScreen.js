import React, {useState, useEffect} from 'react';
import funtv2 from './funtv2.png'

function HomeScreen() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    return (
        <div style={{padding: 20}}>
            <div class="input-group-prepend">
                <img src={funtv2} class="img-fluid" alt="Responsive image"></img>
            </div>
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Username</span>
            </div>
            <input type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={e => setUsername(e.target.value)}
                    style={{marginTop: 5, width: 200, marginBottom: 15}}>
            </input>
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Password</span>
            </div>
            <input type="password"
                    class="form-control"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    onChange={e => setPassword(e.target.value)}
                    style={{marginTop: 5, width: 200, marginBottom: 15}}>
            </input>
            <div class="input-group-prepend">
                <button class="btn btn-primary" type="submit">Button</button>
            </div>
        </div>
    )
}

export default HomeScreen;