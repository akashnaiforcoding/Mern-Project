import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import products from '../products';
import { Row, Col, ListGroup } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";


const ProductScreen = () => {
    const [product, setProduct] = useState({});

    const {id: productId} = useParams();
    
    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get(`/api/products/${productId}`);
            setProduct(data);
        }
        fetchProducts();
    }, [productId]);

  return (
    <>
        <Link className="btn btn-dark my-3" to='/'>Go Back</Link>

        <Row>
            <Col md={5}>
                {/* <Image src={product.image} alt={product.name} fluid /> */}
                Image
            </Col>
            <Col md={4}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: {product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description: {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                <strong>${product.price}</strong></Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                <strong>{product.countInStock > 0 ? 'In Stock' : 'Out of stock'}</strong></Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                                Add To Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </>
  )
}

export default ProductScreen