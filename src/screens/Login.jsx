import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../actions/UserAction'

export default function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const dispatch = useDispatch()
    const loginHandler = async (e) => {
        e.preventDefault()

        dispatch(signin(email, password))
    }

    useEffect(() => {
        if(userInfo)
        {
            props.history.push(redirect)
        }
    }, [props.history, redirect, userInfo])

    return (
        <Wrapper>
            <div className="login">
                <p className="brand">E-Shop Fashion</p>
                <h3 className="login_to_your_account">Login to your acount</h3>
                <label className="email">Email Address</label>
                <input type="text" className="email_input" value={email} onChange={e => setEmail(e.target.value)} />
                <label className="password">Password</label>
                <input type="password" className="password_input" value={password} onChange={e => setPassword(e.target.value)} />
                <p className="forgot_password">Forgot password?</p>
                <div className="login_register_btn">
                    <p onClick={loginHandler}>Login</p>
                    <p><Link to="/register">Don't have account?</Link></p>
                </div>
            </div>
            <div className="tutorial">
                <img src="https://i.guim.co.uk/img/media/c70b2d859f09849aeff84411717c4fe921a02a8d/0_14_3307_1985/master/3307.jpg?width=1200&quality=85&auto=format&fit=max&s=2809b6bf1f37db022b98b8b1020fad2d" alt="" />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;

    .login{
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 100vh;
        background: #1368aa;
        z-index: 9;
        padding: 0 50px;

        .brand{
            margin: 5em 0 0 0;
        }

        .login_to_your_account{
            margin: 1em 0 0 0;
            font-weight: bolder;
            font-size: 2em;
            color: #ff9f1c;
        }

        .email{
            margin: 2em 0 0 0;
        }

        .email_input{
            margin: 1em 0 0 0;
            height: 2em;
        }

        .password{
            margin: 1em 0 0 0;
        }

        .password_input{
            margin: 1em 0 0 0;
            height: 2em;
        }

        .forgot_password{
            margin: 2em 0 0 0;
            cursor: pointer;
            text-align: right;
        }

        .login_register_btn{
            display: flex;
            align-items: center;
            margin: 1.5em 0 0 0;

            p:nth-child(1){
                cursor: pointer;
                border: 1px solid green;
                padding: .7em 2em;
                background: green;
                color: white;
                transition: all .3s;

                &:hover{
                    background: #017401;
                }
            }

            p:nth-child(2){
                cursor: pointer;
                margin-left: 2em;
                color: white;
            }
        }
    }

    .tutorial{
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 100%;
        }
    }
`