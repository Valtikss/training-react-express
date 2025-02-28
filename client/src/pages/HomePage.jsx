import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    return (

        <div className="p-4">
            <h1 className="text-2xl font-bold text-primary text-black-500 text-center">
               Choose your favorite ! ❤️
            </h1>
            <h3>there is no judgement here</h3>
            <h3>i promess..</h3>
            
            <div className='flex flex-row horizontalalign'>
                <h1>Helydia 🤓</h1>
                <Link to="/fanHelydia"><img src='https://rahft.com/wp-content/uploads/Helydia.jpg'/></Link>
            </div>
            <div>
                <h1>Madeline 🤠</h1>
                <Link to="/fanmadeline"><img scr='https://media.glamour.com/photos/66c35f746f61bff33c43080d/master/w_2560%2Cc_limit/449682050_331213926706451_5760546936462903925_n.jpg'/></Link> 
            </div>
            <div>
                <h1>ArcheeQueen 🥵</h1>
                <Link to="/archeeQueen"><img scr='https://static.wikia.nocookie.net/clashofclans/images/4/4b/Archer_Queen_info.png/revision/latest/scale-to-width-down/500?cb=20170927231550'/></Link>  
            </div>


            <div>
                <Link to='/about'><h3>About Us !</h3></Link>
            </div>
            
        </div>

    );
};

export default Home;