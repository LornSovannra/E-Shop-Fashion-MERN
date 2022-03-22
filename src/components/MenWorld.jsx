import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { addToCart } from '../actions/CartAction'

export default function MenWorld() {
    const [data, setData] = useState([])
    
    const userSignIn = useSelector(state => state.userSignIn)
    const userInfo = userSignIn.userInfo
    

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/men's clothing`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    const dispatch = useDispatch()
    
    return (
        <Wrapper>
            <section>
                <div className="women_world">
                    <div className="women_world_aside">
                        <div>
                            <h3>Men's World</h3>
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
                            data.map(item => {
                                
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
                                                <p>{ item.name }</p>
                                            </div>
                                            <div className="item_price_discount">
                                                <div><p>${ item.price }</p></div>
                                                <div><p>$460.00</p></div>
                                            </div>
                                        </div>
                                        <div className="addToCart">
                                            <div className="addToCartButton">
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

const Wrapper = styled.div`
    margin: 5em 5em 0 5em;

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
            background: url("https://images.pexels.com/photos/5935754/pexels-photo-5935754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
            background-size: cover;
            background-position: center;
            justify-content: center;
            align-items: center;
            color: black;

            h3{
                font-size: 1.5em;
                font-weight: bold;
            }
        }

        .women_world_section{
            display: flex;
            /* display: grid;
            grid-template-columns: 22% 22% 22% 22%; */
            justify-content: space-between;
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
                    background: url("https://m.media-amazon.com/images/I/71odHz9aNlL._UX569_.jpg");
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
                    background: url("https://m.media-amazon.com/images/I/61qR-vE4UdL._AC_UX679_.jpg");
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
                    background: url("https://i.pinimg.com/originals/81/18/76/811876ecedb195df4b284bd777b31c46.jpg");
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
                    background: url("https://clothbase.s3.amazonaws.com/uploads/9e71a749-4cc1-44d1-8c19-73ff19201a9a/image.jpg");
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