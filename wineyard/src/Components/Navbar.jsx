import { Input } from 'antd'
import {BsCart4} from 'react-icons/bs'
export const Navbar = () => {
    return (<div style={{display:'flex',width:"100%",justifyContent:'space-between',border:'1px solid black'}}>
        <div className='logoDiv'>
            <img src="https://i.pinimg.com/550x/ef/4d/ff/ef4dff19cc7a90b9b7af8894d1ff5905.jpg" alt="logoo"/>
        </div>
        <div style={{paddingTop:"0.45em"}}><Input/></div>
        <div><BsCart4 style={{height:"30px",width:"30px"}}/></div>
    </div>)
}