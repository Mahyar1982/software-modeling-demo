import React from 'react';
import funtv1 from './funtv1.jpg'
import { useHistory } from 'react-router-dom';

function FirstPage() {

    const history = useHistory();
    const handleClickLogin = () => history.push('/login');
    const handleClickShopping = () => history.push('/shopping');

    return (
        <div style={{padding: 20}}>
            <div class="input-group-prepend">
                <img src={funtv1} class="img-fluid" alt="Responsive image"></img>
            </div>
            <div class="input-group-prepend"
                style={{marginBottom: 10, marginTop: 15}}>
                <button type="button"
                        class="btn
                        btn-primary"
                        style={{width: 150}}
                        onClick={handleClickLogin}>Login</button>
            </div>
            <div class="input-group-prepend"
                 style={{marginBottom: 10, marginTop: 15}}>
                <button type="button" class="btn btn-secondary" style={{width: 150}}>Only visiting</button>
            </div>
            <div class="input-group-prepend"
                 style={{marginBottom: 10, marginTop: 15}}>
                <button
                    type="button"
                    class="btn btn-success"
                    style={{width: 150}}
                    onClick={handleClickShopping}>Shopping</button>
            </div>
        </div>
        )
}

export default FirstPage;