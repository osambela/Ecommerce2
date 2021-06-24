import React, { useState } from 'react';
import img1 from '../images/mountain1.png';
import img2 from '../images/mountain2.png';
import text_bg from '../images/text.png';
import './Hero.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Div, Image, Text} from "atomize";
import natural from '../images/natural.svg';
import eco from '../images/eco.svg';
import nutritive from '../images/nutritive.svg';
import healthy from '../images/healthy.svg';
import CarouselContainer from '../Component/SliderCarousel';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 18,
      textAlign: 'center',
      fontFamily: 'Montserrat, sans-serif',
    },

  });


const Hero = () => {
    const classes = useStyles();
    const [offset, setOffSet] = useState();
    const handleScroll = ()=> setOffSet(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);

    return ( 
        <>
            <Div m={{b: '6rem', t: '2rem'}}>
                <CarouselContainer></CarouselContainer>
            </Div>
            <Div className="zoom">
                <img 
                    src={img1} 
                    alt="mountain" 
                    id="img1"
                    style={{
                        width: (100 + offset * 0.3) + '%'
                    }}
                />
                <img 
                    src={img2} 
                    alt="mountain" 
                    id="img2"
                    style={{
                        width: (100 + offset * 0.3) + '%'
                    }}
                />
                <img 
                    src={text_bg} 
                    alt="text" 
                    id="text_bg"
                    style={{
                        top: `-${5 + offset * 0.3 + '%'}`,
                        width: '80em'
                    }}    
                />
            </Div>
            
            <Div d="flex" justify="space-around" m={{y: '1.5rem'}}>
                <Card className={classes.root} elevation={0}>
                    <CardContent>
                        <Typography className={classes.title}>
                            <Image src={natural} w="5rem" className="imageColor"/>
                        </Typography>
                        <Typography className={classes.title}>
                            <Text tag="h1" textSize="subheader" textColor="prado">
                                Natural
                            </Text>
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.root} elevation={0}>
                    <CardContent>
                        <Typography className={classes.title}>
                            <Image src={healthy} w="5rem"/>
                        </Typography>
                        <Typography className={classes.title}>
                            <Text tag="h1" textSize="subheader" textColor="prado">
                                Saludable
                            </Text>
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.root} elevation={0}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary">
                            <Image src={eco} w="5rem" style={{transform: 'scale(1.5)'}}/>
                        </Typography>
                        <Typography className={classes.title} color="textSecondary">
                            <Text tag="h1" textSize="subheader" textColor="prado">
                                Ecológico
                            </Text>
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.root} elevation={0}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary">
                            <Image src={nutritive} w="5rem" style={{transform: 'scale(1.2)'}}/>
                        </Typography>
                        <Typography className={classes.title} color="textSecondary">
                            <Text tag="h1" textSize="subheader" textColor="prado">
                                Nutritivo
                            </Text>
                        </Typography>
                    </CardContent>
                </Card>
            </Div>
        </>
     );
}
 
export default Hero;
