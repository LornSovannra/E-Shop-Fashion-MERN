import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <Wrapper>
            <div className="login">
                <p className="brand">E-Shop Fashion</p>
                <h3 className="login_to_your_account">Register now</h3>
                <label className="email">Email Address</label>
                <input type="text" className="email_input" />
                <label className="password">Password</label>
                <input type="text" className="email_input" />
                <label className="password">Confirm password</label>
                <input type="password" className="password_input" />
                <div className="login_register_btn">
                    <p>Register</p>
                    <p><Link to="/login">Already have account?</Link></p>
                </div>
            </div>
            <div className="tutorial">
                <img src="https://wallpapercave.com/wp/wp6488880.jpg" alt="" />
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
        background: #fb8b24;
        z-index: 9;
        padding: 0 50px;

        .brand{
            margin: 5em 0 0 0;
        }

        .login_to_your_account{
            margin: 1em 0 0 0;
            font-weight: bolder;
            font-size: 2em;
            color: white;
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