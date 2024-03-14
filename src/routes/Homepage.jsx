import { Link, useNavigate } from 'react-router-dom';

export default function Homepage () {
    const navigate = useNavigate();

    function navigateHandler () {
        navigate('/products');
    }

    return (
        <>
            <h1>Homepage</h1>
            <p>Navigate to the <Link to="/products">List of Products</Link></p>
            <button onClick={navigateHandler}>Product Page</button>
        </>
    )
}