import React from 'react';
import { Div, Text, Button } from "atomize";
import  * as FaIcons  from 'react-icons/all';

export default function CheckoutSteps(props){
    return(
        <div className="checkout-steps">
            <div className={props.step1 ? 'active' : ''}>
                <Div d="flex" align="center" m={{x: '3rem'}}>
                <Button
                    h="5rem"
                    w="5rem"
                    textSize="display1"
                    bg="prado"
                    hoverBg="pantano"
                    rounded="circle"
                    m={{ r: "1rem" }}
                    shadow="2"
                    hoverShadow="4"
                    cursor="not-allowed"
                >
                    <FaIcons.BsPersonCheck/>
                </Button>
                <Text tag="h1" textSize="subheader">
                    Registro
                </Text>
                </Div>
            </div>
            <div className={props.step2 ? 'active' : ''}>
                <Div d="flex" align="center" m={{x: '3rem'}}>
                <Button
                    h="5rem"
                    w="5rem"
                    textSize="display1"
                    bg="prado"
                    hoverBg="pantano"
                    rounded="circle"
                    m={{ r: "1rem" }}
                    shadow="2"
                    hoverShadow="4"
                >
                    <FaIcons.BsGeoAlt/>
                </Button>
                <Text tag="h1" textSize="subheader">
                    Shipping
                </Text>
                </Div>
            </div>
            <div className={props.step3 ? 'active' : ''}>
                <Div d="flex" align="center" m={{x: '3rem'}}>
                <Button
                    h="5rem"
                    w="5rem"
                    textSize="display1"
                    bg="prado"
                    hoverBg="pantano"
                    rounded="circle"
                    m={{ r: "1rem" }}
                    shadow="2"
                    hoverShadow="4"
                >
                    <FaIcons.BsCreditCard/>
                </Button>
                <Text tag="h1" textSize="subheader">
                    Pago
                </Text>
                </Div>
            </div>
            <div className={props.step4 ? 'active' : ''}>
                <Div d="flex" align="center" m={{x: '3rem'}}>
                <Button
                    h="5rem"
                    w="5rem"
                    textSize="display1"
                    bg="prado"
                    hoverBg="pantano"
                    rounded="circle"
                    m={{ r: "1rem" }}
                    shadow="2"
                    hoverShadow="4"
                >
                   <FaIcons.BsLayoutTextWindow/>
                </Button>
                <Text tag="h1" textSize="subheader">
                    Orden
                </Text>
                </Div>
            </div>
        </div>
    )
}