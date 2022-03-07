import React from "react";
import axios from 'axios';
import './Styles.css';
import { Link } from 'react-router-dom';
import {AiTwotoneStar} from 'react-icons/ai'
import { Button, Select,Pagination } from "antd";
import { WineContext } from "../Context/Context";
import { Option } from "antd/lib/mentions";
export const Homepage = () => {
    const [data, setData] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [pagination, setPagination] = React.useState([]);
    const [query, setQuery] = React.useState('reds');
    const {handleCart}=React.useContext(WineContext)
    React.useEffect(() => {
        axios.get(`https://api.sampleapis.com/wines/${query}`).then((response) => setData(response.data))
    },[query])
    const handleFilterReviews = (value) => {
        let modifiedData = data.filter((el) => {
            return el.rating.reviews.split(" ").map(Number)[0] > value;
        })
        setData(modifiedData)
    }
    const pageChange = (pageNumber) => {
        setPage(pageNumber)
    }
    React.useEffect(() => {
        let offset = (page - 1) * 18;
        let pageData = data.slice(offset, offset + 20);
        setPagination(pageData);
    }, [page, data]) 
    return (<>
        <h1> WineYard Homepage</h1>
        <div style={{ display: "flex",backgroundColor:"#9AD0EC",justifyContent: "space-evenly" }}>
            <div><Button type="ghost" onClick={()=>setQuery('reds')} >reds</Button></div>
            <div><Button type="ghost" onClick={()=>setQuery('whites')} >whites</Button></div>
            <div><Button type="ghost" onClick={()=>setQuery('sparkling')} >sparkling</Button></div>
            <div><Button type="ghost" onClick={()=>setQuery('rose')} >rose</Button></div>
            <div><Button type="ghost" onClick={()=>setQuery('dessert')} >dessert</Button></div>
            <div><Button type="ghost" onClick={()=>setQuery('port')}>port</Button></div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <Link to="cart"> <Button>Go To Cart</Button></Link>
           <br/>
        <br/>
        <br/>
        <br/>
        {
            pagination.length > 0 ?<div style={{display:"flex"}}> <div style={{display:"grid",gridTemplateColumns:"repeat(3,33%)",width:"80%"}}>
                {pagination.map((el) => {
                    return (<div className="productDiv" key={el.id}>
                        <img src={el.image} alt={el.id}/>
                        <p>{el.winery}</p>
                        <p>{el.wine}</p>
                        <p>Rating:{el.rating.average} <AiTwotoneStar style={{color:'#FFC900'}}/></p>
                        <p>Reviews :{el.rating.reviews}</p>
                       <Button onClick={()=>handleCart(el)}>Add to cart</Button>
                    </div>)
                })}
                
            </div>
                <div style={{ marginLeft: '4em' }}>
        <p>Sort By Reviews
            <div>
                <Select style={{width:"100%"}} onChange={handleFilterReviews}>
                    <Option value="1000">Above 1000</Option>
                    <Option value="500">Above 500</Option>
                </Select>
            </div>
                    </p></div>
            </div> : null}
        <div style={{marginTop:"3em",marginBottom:"3em",padding:'2em'}}>
        {pagination.length>0?<Pagination onChange={pageChange} total={data.length} />:null}
        </div>
    </>)
}