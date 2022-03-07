import { Button, Empty, Input } from 'antd';
import React from 'react';
import { AiOutlineClose, AiTwotoneStar } from 'react-icons/ai';
import { Link,useNavigate } from 'react-router-dom';
import { WineContext } from '../Context/Context';
export const CartPage = () => {
    const [popup, setPopup] = React.useState(false);
    const [details, setDetails] = React.useState({});
    let { cart, handleWishlist, removeCart } = React.useContext(WineContext);
    const navigate = useNavigate();
    const handleWishAndRemove = (id) => {
        handleWishlist(id);
        removeCart(id)
    }
    const handleAddress = (e) => {
        let { name, value } = e.target;
        setDetails({ ...details, [name]: value });
    }
    const handleClickAddress = (e) => {
        e.preventDefault();
        setPopup(!popup)
        console.log('details', details)
        navigate('/summary')
        
    }
    return (
        <div>
        <div  style={{filter:popup?"blur(2px)":'blur(0px)'}} >
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
                <Button onClick={()=>setPopup(!popup)}>Checkout</Button>
                </div> : <Empty />}
            </div>
            <div>
                {popup ?
                    <div className="addressDiv">
                        <div ><AiOutlineClose className="closing" onClick={() => setPopup(false)} /></div>
                        <br/>
                        <div>
                         <label>Name <Input placeholder="enter your name"  name="Name"  onChange={handleAddress} required /></label> <br></br>  
                           <label>Email<Input placeholder="enter your email"  name="Email"  onChange={handleAddress} required/></label><br></br> 
                           <label>Mobile Number <Input placeholder="enter your mobile number"  name="Mobile Number"  onChange={handleAddress} required/></label><br></br> 
                          <label>Address<Input placeholder="enter your addres" name="Address"  onChange={handleAddress} required /></label> <br></br> 
                          <label>Pincode<Input placeholder="enter your pincode"  name="Pincode"  onChange={handleAddress} required/></label><br></br> 
                          <label>State<Input placeholder="enter your state"   name="State" onChange={handleAddress} required/></label><br></br> 
                            <Button style={{ width: "50%" }} type="primary" onClick={handleClickAddress}>Add Address</Button>
                        </div>
                    </div>:null}
                </div>
            </div>
    )
}