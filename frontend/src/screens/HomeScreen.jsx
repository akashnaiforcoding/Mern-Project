import { useEffect, useState } from 'react';
import {Row, Col} from 'react-bootstrap';
import axios from 'axios'; 
import Product from '../components/Product';
// import products from '../products';

const HomeScreen = () => {
    // const products = [
    //     {_id: 1,'name': 'Apple Iphone 15 Pro Max Legendry Phone', image: 'Photo of Product',rating: 3, price: 2000, numReviews: 11,},
    //     {_id: 2,'name': 'Samsung s25', image: 'Photo of Product',rating: 1.5, price: 3500, numReviews: 16,},
    //     {_id: 3,'name': 'Mi 11X', image: 'Photo of Product',rating: 4.5, price: 4400, numReviews: 25,},
        
    // ];

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/products');
            setProducts(data);
        }
        fetchProducts();
    }, []);
  return (
    <div>
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    </div>
  )
}

export default HomeScreen;