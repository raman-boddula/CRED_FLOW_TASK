import {BsCart4} from 'react-icons/bs'
export const Navbar = () => {
    return (<div style={{display:'flex',width:"100vw",justifyContent:'space-between',border:'1px solid black'}}>
        <div className="navbarlogo">
            <img src="https://media.istockphoto.com/vectors/red-wine-glass-icon-illustration-vector-id1132889797?k=20&m=1132889797&s=612x612&w=0&h=789LAtKiSQynEGPCS_j3nivLwWPkaCgDAYeLeCM6rYI=" alt="logo" />
        </div>
        <div><BsCart4/></div>
    </div>)
}