import React from 'react';
import { Button, Input } from 'antd'
import { BsCart4 } from 'react-icons/bs';
import { WineContext } from '../Context/Context';
import { Link } from 'react-router-dom';
export const Navbar = () => {
    const { cart } = React.useContext(WineContext);

    return (
    <div>
        <div style={{ display: 'flex',padding: '1em',width: "100%", justifyContent: 'space-between',backgroundColor:"#9AD0EC" }}>
            <div className='logoDiv'>
                <Link to="/"> <img src="https://i.pinimg.com/550x/ef/4d/ff/ef4dff19cc7a90b9b7af8894d1ff5905.jpg" alt="logoo"/></Link>
            </div>
                <div style={{paddingTop:"0.45em"}}><Input/></div>
                <div> <Link to="/cart"><BsCart4 style={{height:"30px",width:"30px",marginRight:"4em",cursor:"pointer",marginTop:"10px",color:cart.length>0 ?"royalblue":"black"}}/></Link> </div>
            </div>
            <div className="itemCount">
                <Link to="/cart"><Button shape='circle'>{cart.length}</Button></Link>
            </div>
    </div>
    )
}