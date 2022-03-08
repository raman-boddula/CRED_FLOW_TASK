import React from 'react';

export const WineContext = React.createContext();

export const WineContextProvider = ({ children }) => {
    const [data, setData] = React.useState([]);
    const [cart, setCart] = React.useState([]);
    const [wishlist, setWishlist] = React.useState([]);
    const handleCart = (item) => {
        setCart([...cart, item]);
    }
    const handleData = (item) => {
        setData([...item])   
    }
    const removeCart = (id) => {
        let modified = cart.filter((el) => {
            return el.id!==id.id
        })
        setCart(modified);
    }
    const removeWishlist = (id) => {
        let modified = wishlist.filter((el) => {
            return el.id!==id.id
        })
        setWishlist(modified);
    }
    const handleWishlist = (item) => {
        setWishlist([...wishlist, item]);
        console.log('wishlit',wishlist)
    }
    console.log(cart.length > 0 ? cart:null)
    return (
        <WineContext.Provider value={{cart,wishlist,handleData,data,handleCart,handleWishlist,removeCart,removeWishlist}}>{children}</WineContext.Provider>
    )
}