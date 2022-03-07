import { Button, Empty, Input } from "antd"
import React from "react";
import { AiOutlineClose, AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { WineContext } from '../Context/Context';

export const WishlistPage = () => {
    const [popup, setPopup] = React.useState(false);
    let { wishlist, handleWishlist, handleCart, removeWishlist } = React.useContext(WineContext);
    const handleWishlistToCart = (id) => {
        handleCart(id);
        removeWishlist(id)
    }
    return (
        <div>
             <div>
                <h1>Wishlist page</h1>
                <Link to='/cart'><Button style={{marginLeft:"61em",marginBottom:"2em"}}>Go to Cart</Button></Link>
                {wishlist.length > 0 ? <div style={{ width: "50%",marginLeft:"25%"}}>
                {wishlist.map((el)=>{
                    return(
                        <div style={{display:"flex",marginBottom:'1em',justifyContent:"space-between",boxShadow:"0px 6px 10px 6px #90E0EF",padding:'2em',height:"125px"}}>
                            <div className="cartImage"><img src={el.image} alt={el.id} /></div>
                       <div> <span>{el.winery}</span><span>&ensp;-&ensp;{el.wine}</span>
                            <div><p style={{}}>Rating:{el.rating.average} <AiTwotoneStar style={{color:'yellow'}}/></p></div>
                            <div><p>Reviews :{el.rating.reviews}</p> </div>
                            </div>
                            <Button type='primary' onClick={()=>handleWishlistToCart(el)}>MOVE TO CART</Button>
                            <Button type='danger' onClick={()=>removeWishlist(el)}>REMOVE</Button>
                            </div>
                    )
                })}
                </div>:<Empty/>}
            </div>
        </div>
    )
}