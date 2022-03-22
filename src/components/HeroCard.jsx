import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export default function HeroCard() {
    return (
        <Wrapper>
            <main>
                <aside>
                    <div className="categoryHeader">
                        <p>Categories</p>
                    </div>
                    <div className="categories">
                        <a href="">Women</a>
                        <a href="">Men</a>
                        <a href="">Accessories</a>
                        <a href="">Shoes</a>
                        <a href="">New Arrivals</a>
                        <a href="">Clearence</a>
                        <a href="">Special Offer</a>
                        <a href="">Gift Card</a>
                        <a href="">Buy Theme</a>
                    </div>
                </aside>
                <section>
                    <div className="searchBar">
                        <input type="text" placeholder="Search Products" />
                        <SearchIcon style={{cursor: 'pointer',}} />
                    </div>
                    <div className="slideShow">
                        {/* <img src="https://images.pexels.com/photos/3768892/pexels-photo-3768892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" /> */}
                        <div>
                            <p>super sale fashion</p>
                            <h1>find your <br /> own fashion</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi a quae aperiam ut impedit, perferendis ducimus laborum fuga recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi a quae aperiam ut impedit, perferendis ducimus laborum fuga recusandae.</p>
                            <p>Best Collection</p>
                        </div>
                    </div>
                    <div className="miniSlideShow">
                        <div className="firstMiniSlideShow">

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </section>
            </main>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    /* margin: 2em 0 0 0; */
    margin: 2em 5em 0 5em;

    main{
        display: grid;
        grid-template-columns: 25% 75%;
    }

    aside{
        margin: 0 3em 0 0;
        background: #dee2e6;
        border-radius: 5px;
        /* border-top-left-radius: 5px;
        border-top-right-radius: 5px; */

        .categoryHeader{
            padding: .5em 2em;
            background: #06d6a0;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;

            p{
                text-align: center;
                color: white;
                font-size: 1.1em;
            }
        }
    
        .categories{
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            a{
                padding: .5em 0;
                margin: .3em 3em;
                text-decoration: none;
                color: gray;

                :hover{
                    color: #555b6e;
                }
            }
    
            a:not(:nth-child(9)){
                border-bottom: 1px solid gray;
            }
        }
    
    }
    
    .searchBar{
        display: flex;
        padding: 1.5em 2em;
        background: #dee2e6;
        border-radius: 5px;

        input{
            width: 100%;
            background: none;
            border: none;
            outline: none;

            ::placeholder{
                color: gray;
            }
        }
    }

    .slideShow{
        margin: 2em 0 0 0;
        border-radius: 5px;
        height: 600px;
        background: url('https://cdn3.boutique.humbleandrich.com/wp-content/uploads/2018/04/10003314/Best-Online-Fashion-Shopping-Sites-for-Men.jpg');
        background-position: center;
        background-size: cover;
        
        div{
            display: flex;
            flex-direction: column;
            color: white;
            justify-content: center;
            height: 600px;
            margin: 0 0 0 4em;

            p:nth-child(1){
                text-transform: uppercase;
                margin-bottom: -3em;
                color: #06d6a0;
                font-weight: bold;
            }

            h1{
                text-transform: uppercase;
                font-size: 4em;
                margin-bottom: -.1em;
                color: white;
                font-weight: bold;
            }
            
            p:nth-child(3){
                width: 50%;
                color: #212529;
            }

            p:nth-child(4){
                color: #06d6a0;
                width: 15em;
                height: 3em;
                background: white;
                text-align: center;
                line-height: 3em;
                border-radius: 5px;
                border: 1px solid white;
                cursor: pointer;
                transition: all .5s;

                &:hover{
                    background: transparent;
                    color: white;
                    border: 1px solid #06d6a0;
                }
            }
        }
    }

    .miniSlideShow{
        display: flex;
        margin: 2em 0 0 0;
        justify-content: space-between;

        div{
            cursor: pointer;
            box-shadow: 6px 7px 21px -1px rgba(0,0,0,0.36);
            -webkit-box-shadow: 6px 7px 21px -1px rgba(0,0,0,0.36);
            -moz-box-shadow: 6px 7px 21px -1px rgba(0,0,0,0.36);
        }

        div:not(:nth-child(3)){
            margin: 0 1em 0 0;
            border-radius: 5px;
        }

        div:nth-child(1)
        {
            height: 200px;
            width: 100%;
            background: url("https://media.gq-magazine.co.uk/photos/60fa9e5ea8b4785fafdf2076/master/w_1920,h_1280,c_limit/Glasses_0008_rayban%20shiny%20black.jpg");
            background-position: center;
            background-size: cover;
        }

        div:nth-child(2)
        {
            height: 200px;
            width: 100%;
            background: url("https://preview.free3d.com/img/2019/09/2174916566829762420/51yzaled-900.jpg");
            background-position: center;
            background-size: cover;
        }

        div:nth-child(3)
        {
            height: 200px;
            width: 100%;
            background: url("https://images-na.ssl-images-amazon.com/images/I/51a8Uk5olfL._UL1100_.jpg");
            background-position: center;
            background-size: cover;
        }
    }

    @media screen and (max-width: 1200px){
        main{
            display: flex;
        }

        aside{
            display: none;
        }
    }

    @media screen and (max-width: 768px){
        .miniSlideShow{
            display: flex;
            flex-direction: column;
            height: 650px;
        }
    }
`