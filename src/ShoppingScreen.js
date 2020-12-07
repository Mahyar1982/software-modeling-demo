import React from 'react';
import poster1 from './poster1.jpg';
import poster2 from './poster2.jpg';
import poster3 from './poster3.jpg';

function ShoppingScreen() {

    return (
            <div class="card-group">
                <div class="card border border-dark" style={{margin: 20, height: 450, display: 'flex'}}>
                    <img class="card-img-top fluid" style={{height: 300}} src={poster1} alt="Card image cap" />
                    <div class="card-body">
                    <h5 class="card-title">Femme Fatale</h5>
                    <p class="card-text">The new poster</p>
                    <p class="card-title">Price: 25 $</p>
                    </div>
                </div>
                <div class="card border border-dark" style={{margin: 20, height: 450, display: 'flex'}}>
                    <img class="card-img-top" style={{height: 300}} src={poster2} alt="Card image cap" />
                    <div class="card-body">
                    <h5 class="card-title">The original poster</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p class="card-title">Price: 25 $</p>
                    </div>
                </div>
                <div class="card border border-dark" style={{margin: 20, height: 450, display: 'flex'}}>
                    <img class="card-img-top" style={{height: 300}} src={poster3} alt="Card image cap" />
                    <div class="card-body">
                    <h5 class="card-title">Template</h5>
                    <p class="card-text">A classic movie poster.</p>
                    <p class="card-title">Price: 25 $</p>
                    </div>
                </div>
        </div>
        )
}

export default ShoppingScreen;