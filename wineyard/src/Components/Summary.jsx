import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { WineContext } from "../Context/Context"; 
export const Summary = () => {
    const { cart } = React.useContext(WineContext);
    React.useEffect(() => {
        while (cart.length) {
            cart.length--;            
        }
    },[cart])
    return (
        <>
            <h1 style={{ backgroundColor: "#92A9BD" ,margin:'0em 0 2em 0'}}><strong>Thank you for shopping 🥰,we will deliver your order_id:{Math.floor(Math.random() * 100000000000)} within 3-5 business working days.</strong></h1>
            <Link to="/"><Button type="primary">Continue Shopping</Button></Link>
        </>
    )
}