import React from "react";
import axios from 'axios';
export const Homepage = () => {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        axios.get('https://api.sampleapis.com/wines/reds').then((response) => setData(response.data))
    })
    return (<>
        <h1> Homepage</h1>
        {
            data.length > 0 ? <div style={{display:"grid",gridTemplateColumns:"repeat(3,32%)"}}>
                {data.map((el) => {
                    return (<div  key={el.id}>
                        <img src={el.image} alt={el.id}/>
                        <p>{el.winery}</p>
                        <p>{el.wine}</p>
                       
                    </div>)
                })}
            </div>:null}
    </>)
}