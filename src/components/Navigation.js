import { Link } from "react-router-dom";


const Navigation = () => {
    return ( 
        <>
            <Link to="/">Cars</Link>
            <Link to="/search">Search</Link>
        </>
     );
}
 
export default Navigation;