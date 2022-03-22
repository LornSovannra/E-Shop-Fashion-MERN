import React from 'react'
import styled from 'styled-components'

export default function NewArrival() {
    return (
        <Wrapper>
            <div>
                <p>NEW ARRIVALS</p>
                <h2>JUST FOR <br />YOU</h2>
                <p>More Collection</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 5em 0 0 0;
    background: url("http://citywestshoppingcentre.com/app/uploads/2017/04/Woman-Shopping-Banner.jpg");
    background-position: left;
    background-size: cover;
    height: 800px;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin: 0 0 0 80em;
        height: 800px;

        p:nth-child(1){
            color: green;
            font-size: 1.5em;
            font-weight: bolder;
        }

        h2{
            color: #001524;
            font-size: 5em;
            font-weight: bolder;
            margin-top: -.1em;
            margin-bottom: -.01em;
        }

        p:nth-child(3){
            cursor: pointer;
            padding: 1em 2em;
            color: white;
            background: green;
            border: 1px solid green;
            transition: all .4s;

            &:hover{
                color: green;
                background: transparent;
                border: 1px solid green;
            }
        }
    }
`