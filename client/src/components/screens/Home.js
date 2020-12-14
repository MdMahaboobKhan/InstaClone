import React from 'react'



const Home =()=>{
    return (
        <div className="home">
            <div className="card home-card">
                <h5>Casper</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8d2FsbHBhcGVyfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>
                </div>
                <div className="card-content">
                    <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title</h6>
                    <p>My first post</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
            </div>

        </div>
    )
}

export default Home;