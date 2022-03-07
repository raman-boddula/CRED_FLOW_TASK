import { Button, Empty } from 'antd';
import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { WineContext } from '../Context/Context';
export const CartPage = () => {
    let { cart, handleWishlist ,removeCart} = React.useContext(WineContext);
    const handleWishAndRemove = (id) => {
        handleWishlist(id);
        removeCart(id)
    }
    return (
        <div>
            <h1>Cart page</h1>
            <Link to='/wishlist'><Button  style={{marginLeft:"60em",marginBottom:"2em"}}>Go to Wishlist</Button></Link>
            {cart.length > 0 ? <div style={{ width: "50%",marginLeft:"25%"}}>
                {cart.map((el)=>{
                    return(
                        <div style={{display:"flex",marginBottom:'1em',justifyContent:"space-between",boxShadow:"0px 6px 10px 6px #90E0EF",padding:'2em',height:"125px"}}>
                            <div className="cartImage"><img src={el.image} alt={el.id} /></div>
                       <div> <span>{el.winery}</span><span>&ensp;-&ensp;{el.wine}</span>
                            <div><p style={{}}>Rating:{el.rating.average} <AiTwotoneStar style={{color:'yellow'}}/></p></div>
                            <div><p>Reviews :{el.rating.reviews}</p> </div>
                            </div>
                            <Button type='primary' onClick={()=>handleWishAndRemove(el)}>SAVE FOR LATER</Button>
                            <Button type='danger' onClick={()=>removeCart(el)}>REMOVE</Button>
                            </div>
                    )
                })}
                <Button>Checkout</Button>
            </div>:<Empty/>}
        </div>
    )
}