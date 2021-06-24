import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { Div, Button, SideDrawer, Image, Text, Row, Col } from "atomize";
import { AiOutlineShoppingCart } from "react-icons/ai";
import bagShopping from "../images/shoppingbagWhite.svg"

import { Rating } from '@material-ui/lab';
import Box from '@material-ui/core/Box';

export default function Product(props) {
    const {product} = props;
    const [showSideDrawer, setShowSideDrawer] = useState(false);
    const [value, setValue] = React.useState();
    const BasicSideDrawer = ({ isOpen, onClose }) => {
        return (
          <SideDrawer isOpen={isOpen} onClose={onClose} w="90rem">
            <Div m={{ t: "7rem" }}>
              <Row>
                <Col size={{ xs: 12, lg: 5 }}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    bgSize="cover"
                    bgPos="center"
                    w="42rem"
                    h="auto"
                  />
                </Col>
                <Col size={{ xs: 12, lg: 7 }} p={{ l: "8rem" }}>
                  <Text
                    tag="h1"
                    textColor="pantano"
                    textSize="display1"
                    m={{ t: "4rem", b: "1rem" }}
                  >
                    {product.name}
                  </Text>
                  <Text
                    tag="h1"
                    textSize="title"
                    textColor="pantano"
                    m={{ b: "2rem" }}
                    border="1px solid"
                    w="12rem"
                    p=".09rem"
                    rounded="md"
                    textAlign="center"
                    borderColor="pantano"
                  >
                    <Row>
                      <span className="prado">S/</span> {product.price}
                      {/* <span>
                        <Link to={`/seller/${product.seller._id}`}>
                          {product.seller.seller.name}
                        </Link>
                      </span>  */}
                    </Row>
                  </Text>

                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating
                      rating={product.rating}
                      numReviews={product.numReviews}
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                    {product.numReviews}
                  </Box>
                  <Text
                    tag="h1"
                    textSize="title"
                    textColor="pantano"
                    m={{ t: "2rem" }}
                  >
                    {product.description}
                  </Text>
                  <Div pos="absolute" bottom="5rem">
                    <Link to={`/cart/${product._id}`}>
                      <Button
                        h="5rem"
                        w="22rem"
                        bg="prado"
                        hoverBg="pantano"
                        m={{ r: "1rem" }}
                        hoverShadow="4"
                        textColor="white"
                        textSize="display1"
                        fadeDuration="500"
                      >
                        <AiOutlineShoppingCart />
                        <Text
                          tag="h1"
                          textColor="white"
                          textSize="subheader"
                          m={{ l: "1rem" }}
                        >
                          Ir al carrito
                        </Text>
                      </Button>
                    </Link>
                  </Div>
                </Col>
              </Row>
            </Div>
          </SideDrawer>
        );
      };
    return ( 
        <>   
            <BasicSideDrawer
                isOpen={showSideDrawer}
                onClose={() => setShowSideDrawer(!showSideDrawer)}
            />  
            <div key={product._id}>
                <ul>
                    <li className="booking-card">
                        <div className="book-container">
                            <div className="content">
                                {/* 
                                only products with zoom
                                <Button 
                                    h="5rem"
                                    w="5rem"
                                    bg="rgba(255,255,255, 0.7)"
                                    borderColor="transparent"
                                    m={{ x: "1rem", t: '1rem' }}
                                    hoverShadow="2"
                                    textSize="display3"
                                    textColor="prado"
                                    onClick={() => setShowSideDrawer(!showSideDrawer)} 
                                >
                                    <AiOutlineSearch/>
                                </Button>    */}
                                      
                                <div style={{
                                    padding: '22px',
                                    position: 'absolute',
                                    bottom: '0',
                                    right: '0'
                                    }}>
                                    {product.countInStock>0 ? 
                                        <span className="success">En stock</span> :
                                        <span className="danger">No disponible</span> 
                                    }
                                </div>
                            </div>
                            <img className="medium"
                            src={product.image}
                            alt={product.name} />
                        </div>
                        <div className="informations-container">
                            <div className="card-body">
                                <div className="product-details-price">
                                    <Link to="product.html">
                                        <Text tag="h1" textColor="pantano" textSize="subheader">
                                            {product.name}
                                        </Text>
                                    </Link>
                                    <Text tag="h1" textSize="title" textColor="prado">
                                        S/ {product.price}
                                    </Text>
                                </div>
                                <Rating rating={product.rating} numReviews={product.numReviews}/>
                                <Div d="flex" justify="space-evenly">
                                        {product.countInStock>0 ? 
                                            <Button 
                                            h="5rem"
                                            w="22rem"
                                            bg="prado"
                                            hoverBg="pantano"
                                            m={{ r: "1rem" }}
                                            hoverShadow="4"
                                            textColor="white"
                                            textSize="display1"
                                            fadeDuration="500"
                                            onClick={() => setShowSideDrawer(!showSideDrawer)} 
                                        >
                                            <Image 
                                                src={bagShopping} 
                                                alt="bolsa de compras"
                                                w="3.5rem"

                                            />
                                            <Text style={{lineHeight: '1'}} tag="h1" textColor="white" 
                                                  textSize="subheader" m={{l: '1rem'}}
                                            >
                                                Seleccionar producto
                                            </Text>
                                            </Button> :
                                            <Button 
                                            disabled={true}
                                            h="5rem"
                                            w="22rem"
                                            bg="prado"
                                            hoverBg="pantano"
                                            m={{ r: "1rem" }}
                                            hoverShadow="4"
                                            textColor="white"
                                            textSize="display1"
                                            fadeDuration="500"
                                            onClick={() => setShowSideDrawer(!showSideDrawer)} 
                                        >
                                            <Image 
                                                src={bagShopping} 
                                                alt="bolsa de compras"
                                                w="3.5rem"

                                            />
                                            <Text style={{lineHeight: '1'}} tag="h1" textColor="white" 
                                                  textSize="subheader" m={{l: '1rem'}}
                                            >
                                                Seleccionar producto
                                            </Text>
                                            </Button>
                                        }
                                </Div>
                            </div>
                        </div>
                    </li> 
                </ul>
            </div>
        </>
     );
}
 
