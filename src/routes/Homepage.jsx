import { Link } from 'react-router-dom';

export default function Homepage () {
    return (
        <>
            <h1>Homepage</h1>
            <p>Navigate to the <Link to="/products">List of Products</Link></p>
        </>
    )
}