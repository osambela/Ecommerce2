import React from 'react';
import { Button, Div, Text } from "atomize";
import bagshopping from '../images/bagshopping.svg';

const BackgroundDiv = () => {
    return ( 
        <Div
            d="flex"
            justify="center"
            align="center"
            m="10rem"
        >
            <Button
                h="25rem"
                w="25rem"
                bg="success500"
                hoverBg="success600"
                rounded="circle"
                m={{ r: "1rem" }}
                shadow="2"
                d="flex" 
                flexDir="column"
            >
                <img 
                    src={bagshopping}
                    alt="bagshopping"
                    width="250rem"    
                />
                <Text tag="h1" textSize="subheader" textColor="success700">
                    Carrito de compras vacío
                </Text>
            </Button>
        </Div>
     );
}
 
export default BackgroundDiv;