import React from "react";
import { Carousel } from "react-bootstrap";
import socks from "../socks.jpg";
import store from "../store.jpg"

export default function Slider() {

    return (
    <Carousel>
        <Carousel.Item style={{'height': '500px'}}> 
            <img 
                className="d-bloock w-100" 
                src={store} 
                alt="firt slide"
            />
            <Carousel.Caption>
                <h3>Socks ctore</h3>
                <p> store for sale Socks</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '500px'}}>
            <img 
                className="d-bloock w-100" 
                src={socks} 
                alt="firt slide"
            />
            <Carousel.Caption>
                <h3>Socks ctore</h3>
                <p> store for sale Socks</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '500px'}}>
            <img 
                className="d-bloock w-100" 
                src={socks} 
                alt="firt slide"
            />
            <Carousel.Caption>
                <h3>Socks ctore</h3>
                <p> store for sale Socks</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
)}