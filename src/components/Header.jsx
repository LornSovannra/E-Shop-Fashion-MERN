import React, { useEffect, useState,} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/UserAction';
import CartItem from './CartItem';

export default function Header() {
    //Dispatch to Redux
    const dispatch = useDispatch()

    //Normal state
    const [myCart, setMyCart] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItem, setTotalItem] = useState(0)

    //Invoke Cart Item
    const cartList = useSelector(state => state.cartList)
    const cartItem = cartList.cart

    //Invoke User Info
    const userSignIn = useSelector((state) => state.userSignIn)
    const { userInfo } = userSignIn;

    useEffect(() => {
        let totalItem = 0
        let totalPrice = 0

        cartItem.forEach(item => {
            totalItem += item.qty
            totalPrice += item.price * item.qty
        })

        setTotalItem(totalItem)
        setTotalPrice(totalPrice)
    }, [cartItem, totalItem, totalPrice, setTotalItem, setTotalPrice])
    
    return (
        <Wrapper>
            <header>
                <a className="logo" href="/">
                    <h2>RARCEL SHOP</h2>
                </a>
                <div className="info">
                    <div>
                        <p className="contactHeader">Call Us +855 78 962 424</p>
                    </div>
                    <div>
                        <FavoriteBorderIcon className="wichlistHeader" />
                        <p className="wichlistHeader">Wichlist</p>
                    </div>
                    <div onClick={() => setMyCart(true)}>
                        <ShoppingCartIcon />
                        <p>Cart ({ totalItem })</p>
                    </div>
                    {userInfo ? (
                    <div className="dropdown">
                        <Link to="#" style={{color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center'}}>
                            {
                                userInfo.profileImage ? (
                                <Avatar
                                    alt="Remy Sharp"
                                    src={userInfo.profileImage}
                                    round={true}
                                    value="100%"
                                    size= "30"
                                    maxInitials
                                    style={{ margin: '0 0 0 -20px' }}
                                    >
                                </Avatar>
                                ) : (
                                    <AccountCircleIcon />
                                )
                            }
                        </Link>
                        <ul className="dropdown-content">
                            <li>
                                <Link to="/profile" style={{color: 'white', textDecoration: 'none'}}>User Profile</Link>
                            </li>
                            <li>
                                <Link to="/orderhistory" style={{color: 'white', textDecoration: 'none'}}>Order History</Link>
                            </li>
                            <li>
                                <Link to="" onClick={() => dispatch(signout())} style={{color: 'white', textDecoration: 'none'}}>
                                    Sign Out
                                </Link>
                            </li>
                        </ul>
                    </div>
                    ) : (
                    <Link to="/login" style={{color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center'}}><AccountCircleIcon /> Sign In</Link>
                    )}
                </div>
            </header>
            <section>
                <aside style={ myCart ? {transform: "translateX(0)"} : {transform: "translateX(110%)"} }>
                    <div className="shopping_cart_wrapper">
                        <div className="shopping_cart_header">
                            <ChevronRightIcon style={{ width: 40, cursor: 'pointer', fontSize: 50 }} onClick={() => setMyCart(false)} />
                            <h1>Shopping Cart</h1>
                        </div>
                        <div>

                            {
                                cartItem.map(item => {
                                    return(
                                        <CartItem key={item.id} itemData={item} />
                                    )
                                })
                            }

                        </div>
                        <div className="shopping_cart_bottom">
                            <p>Subtotal ({ totalItem } items): <b>$ { totalPrice }</b></p>
                        </div>
                    </div>
                </aside>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: .7em 0;
    box-sizing: border-box;
    background: #264653;

    header{
        display: flex;
        justify-content: space-between;
        margin: 0 5em;
        align-items: center;

        .login{
            display: flex;
            align-items: center;
            color: white;
            text-decoration: none;

            p{
                margin: 0 0 0 .5em;
            }
        }
    }

    aside{
        top: 0;
        bottom: 0;
        right: 0;
        position: fixed;
        height: 100%;
        width: 40vw;
        background: white;
        z-index: 999;
        box-shadow: -2px 2px 5px 0px rgba(95,194,253,0.75);
        -webkit-box-shadow: -2px 2px 5px 0px rgba(95,194,253,0.75);
        -moz-box-shadow: -2px 2px 5px 0px rgba(95,194,253,0.75);
        overflow-y: scroll;
        transition: all .5s;

        .shopping_cart_wrapper{
            margin: 0 2em;

            .shopping_cart_header{
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid gray;
            }

            .shopping_cart_bottom{
                display: flex;
                justify-content: right;
            }
        }

    }

    .logo{
        color: white;
        text-decoration: none;
    }

    .info{
        display: flex;
        justify-content: space-evenly;
        
        div{
            display: flex;
            align-items: center;
            padding: 0 1em;
            color: white;
            text-decoration: none;
            cursor: pointer;

            p{
                margin: 0 0 0 .3em;
            }
        }
    }

    /* Dropdown */
    .dropdown {
        display: inline-block;
        position: relative;
    }

    .dropdown-content {
        position: absolute;
        display: none;
        right: 0;
        min-width: 5.6rem;
        padding: 1rem;
        z-index: 1;
        background-color: #203040;
        margin: 0;
        margin-top: 10rem;
        margin-left: 8em;
        border-radius: 0.5rem;
        list-style: none;
        padding: 0 0 0 -10em;

        li{
            padding: .5em 0;
        }
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    @media only screen and (max-width: 992px){
        .contactHeader{
            display: none;
        }

        .wichlistHeader{
            display: none;
        }
    }
`