import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { listProducts } from '../actions/ProductAction'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Product from '../components/Product';
import axios from 'axios'
import { addToCART } from '../actions/CartAction';

function WomenWorld({ products }) {
    const dispatch = useDispatch()
    const [data, setData] = useState([])

    useEffect( () => {
        axios.get(`https://fakestoreapi.com/products/category/women's clothing`)
            /* .then(res => setData(res.data)) */
            /* .then(res => res)
            .then(json => console.log(json.data)) */
            .then(res=>res)
            .then(json=>setData(json.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Wrapper>
            <section>
                <div className="women_men_world_header">
                    <h1>We Have Best Collection</h1>
                </div>
                <div className="women_world">
                    <div className="women_world_aside">
                        <div>
                            <h3>Women's World</h3>
                        </div>
                        <div>
                            <div>
                                <p>Accessories</p>
                            </div>
                            <div>
                                <p>Shoes</p>
                            </div>
                            <div>
                                <p>New Arrivals</p>
                            </div>
                            <div>
                                <p>Clearence</p>
                            </div>
                            <div>
                                <p>Special Offer</p>
                            </div>
                        </div>
                    </div>
                    <div className="women_world_section">
                        {
                            products.map(item => {
                                return (
                                    <div className="women_item_1" key={ item.id }>
                                        <div className="item_picture" style={{ backgroundImage: `url(${item.image})` }}>
                                        </div>
                                        <div className="item_description">
                                            <div className="item_brand_rate">
                                                <div><p style={{ width: "90%" }}>{ item.title }</p></div>
                                                {/* <div>⭐ ⭐ ⭐ ⭐ ⭐<p></p></div> */}
                                            </div>
                                            <div className="item_title">
                                                {/* <p>{ item.description }</p> */}
                                            </div>
                                            <div className="item_price_discount">
                                                <div><p>${ item.price }</p></div>
                                                <div><p>$460.00</p></div>
                                            </div>
                                        </div>
                                        <div className="addToCart">
                                            <div className="addToCartButton" onClick={() => dispatch(addToCART(item.id))}>
                                                <p>Add To Cart</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>

                </div>
            </section>
        </Wrapper>
    )
}

const mapStateToProps = state => {
    return {
        products: state.cartList.products,
    }
}

export default connect( mapStateToProps )(WomenWorld)

const Wrapper = styled.div`
    margin: 0 5em;

    .women_men_world_header{
        padding: 2.5em 0;
        text-align: center;
        font-size: 2em;
    }

    .women_world{
        display: grid;
        grid-template-columns: 25% 75%;

        .women_world_aside{
            margin: 0 3em 0 0;
            padding: 1em 3em;
            border-radius: 5px;
            background: url("https://images.pexels.com/photos/1191716/pexels-photo-1191716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
            background-size: cover;
            background-position: center;
            justify-content: center;
            align-items: center;
            color: white;

            h3{
                font-size: 1.5em;
                font-weight: bold;
            }
        }

        .women_world_section{
            display: flex;
            /* display: grid;
            grid-template-columns: 22% 22% 22% 22%; */
            /* justify-content: space-between; */
            border-radius: 5px;
            overflow-x: scroll;

            div{
                border-radius: 5px;
                cursor: pointer;
                transition: all .4s;
                width: 300px;

                .item_picture
                {
                    height: 400px;
                    /* width: 270px; */
                }
            }

            .women_item_1{
                border: 1px solid gray;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin: 0 .5em;

                /* &:hover{
                    -webkit-box-shadow: 4px 4px 5px 0px rgba(50, 50, 50, 0.75);
                    -moz-box-shadow:    4px 4px 5px 0px rgba(50, 50, 50, 0.75);
                    box-shadow:         4px 4px 5px 0px rgba(50, 50, 50, 0.75);
                } */

                .item_picture{
                    /* background: url("https://i5.walmartimages.com/asr/ea39f5e1-bc4d-4cc4-aa1e-058d94ffaa03_1.4466bd21d6f35079a52170c85d6e14f8.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff");
                     */background-size: cover;
                    background-position: center;
                    transform: scale(.80);
                }

                .item_description{
                    padding: .5em 1em;

                    .item_brand_rate{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .item_price_discount{
                        display: flex;

                        div:nth-child(1){
                            color: red;
                        }

                        div:nth-child(2){
                            margin: 0 0 0 1em;
                            text-decoration: line-through;
                        }
                    }
                }

                .addToCart{
                    
                    .addToCartButton{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: green;
                        border: 1px solid green;
                        color: white;

                        &:hover{
                            background: #005700;
                            border: 1px solid #005700;
                        }
                    }
                }
            }

            .women_item_2{
                border: 1px solid gray;
                
                margin: 0 .5em;

                &:hover{
                    -webkit-box-shadow: 4px 4px 5px 0px rgba(50, 50, 50, 0.75);
                    -moz-box-shadow:    4px 4px 5px 0px rgba(50, 50, 50, 0.75);
                    box-shadow:         4px 4px 5px 0px rgba(50, 50, 50, 0.75);
                }

                .item_picture{
                    background: url("https://www.openair.co.uk/images/icebreaker-womens-descender-long-sleeve-zip-jacket-p5838-43595_image.jpg");
                    background-size: cover;
                    background-position: center;
                    transform: scale(.80);
                }
                
                .item_description{
                    padding: .5em 1em;

                    .item_brand_rate{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .item_price_discount{
                        display: flex;

                        div:nth-child(1){
                            color: red;
                        }

                        div:nth-child(2){
                            margin: 0 0 0 1em;
                            text-decoration: line-through;
                        }
                    }
                }
            }

            .women_item_3{
                border: 1px solid gray;
                
                margin: 0 .5em;

                &:hover{
                    -webkit-box-shadow: 4px 4px 5px 0px rgba(50, 50, 50, 0.75);
                    -moz-box-shadow:    4px 4px 5px 0px rgba(50, 50, 50, 0.75);
                    box-shadow:         4px 4px 5px 0px rgba(50, 50, 50, 0.75);
                }

                .item_picture{
                    background: url("https://cdn.shopify.com/s/files/1/0266/6276/4597/products/100001_300851114_071_1.jpg?v=1614954278");
                    background-size: cover;
                    background-position: center;
                    transform: scale(.80);
                }
                
                .item_description{
                    padding: .5em 1em;

                    .item_brand_rate{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .item_price_discount{
                        display: flex;

                        div:nth-child(1){
                            color: red;
                        }

                        div:nth-child(2){
                            margin: 0 0 0 1em;
                            text-decoration: line-through;
                        }
                    }
                }
            }

            .women_item_4{
                border: 1px solid gray;
                
                margin: 0 .5em;

                &:hover{
                    -webkit-box-shadow: 4px 4px 5px 0px rgba(50, 50, 50, 0.75);
                    -moz-box-shadow:    4px 4px 5px 0px rgba(50, 50, 50, 0.75);
                    box-shadow:         4px 4px 5px 0px rgba(50, 50, 50, 0.75);
                }
                .item_picture{
                    background: url("https://images.bestsellerclothing.in/data/vero-moda/17-May-2020/211450401_g5.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto");
                    background-size: cover;
                    background-position: center;
                    transform: scale(.80);
                }
                
                .item_description{
                    padding: .5em 1em;

                    .item_brand_rate{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .item_price_discount{
                        display: flex;

                        div:nth-child(1){
                            color: red;
                        }

                        div:nth-child(2){
                            margin: 0 0 0 1em;
                            text-decoration: line-through;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1200px){
        .women_world{
            display: flex;
        }

        .women_world_aside{
            display: none;
        }
    }
`