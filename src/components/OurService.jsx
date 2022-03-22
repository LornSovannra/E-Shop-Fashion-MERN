import React from 'react'
import styled from 'styled-components'
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import HelpIcon from '@material-ui/icons/Help';
import HistoryIcon from '@material-ui/icons/History';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

export default function OurService() {
    return (
        <Wrapper>
            <div className="our_service_header">
                <h1>Our Company Service</h1>
            </div>
            <div className="our_service_section_wrapper">
                <div className="our_service_section">
                    <LocalShippingIcon style={{fontSize: 50, color: 'red'}} />
                    <p>Free Shipping</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, nesciunt accusantium. Dolor placeat distinctio quibusdam, blanditiis nostrum quaerat saepe tempore soluta suscipit error, aliquid magni!</p>
                </div>
                <div className="our_service_section">
                    <HelpIcon style={{fontSize: 50, color: 'green'}} />
                    <p>Support 24/7</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit esse doloribus alias. Similique reiciendis accusamus aliquid sapiente aut beatae deleniti, doloremque vel quidem illo aspernatur.</p>
                </div>
                <div className="our_service_section">
                    <HistoryIcon style={{fontSize: 50, color: 'blueviolet'}} />
                    <p>30 Days Return</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus excepturi ex enim praesentium rem nobis voluptatum vel id aut cum dolorum sed, quis deleniti laboriosam!</p>
                </div>
                <div className="our_service_section">
                    <AccountBalanceIcon style={{fontSize: 50, color: "#fb8b24"}} />
                    <p>100% Payment Secure</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus excepturi ex enim praesentium rem nobis voluptatum vel id aut cum dolorum sed, quis deleniti laboriosam!</p>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 0 5em;

    .our_service_header{
        padding: 2.5em 0;
        text-align: center;
        font-size: 2em;
    }

    .our_service_section_wrapper{
        display: flex;
        justify-content: space-between;

        .our_service_section:not(:nth-child(4))
        {
            margin-right: 1em;
        }

        .our_service_section:not(:nth-child(1))
        {
            margin-left: 1em;
        }

        .our_service_section{
            text-align: center;
            padding: 2em 3em;
            border-radius: 5px;
            box-shadow: 6px 7px 21px -1px rgba(0,0,0,0.36);
            -webkit-box-shadow: 6px 7px 21px -1px rgba(0,0,0,0.36);
            -moz-box-shadow: 6px 7px 21px -1px rgba(0,0,0,0.36);

            p:nth-child(2)
            {
                font-weight: bold;
            }
        }
    }

    @media screen and (max-width: 1200px){
        .our_service_section_wrapper{
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .our_service_section{
                height: 300px;
                width: 500px;
                margin: 0;
                padding: 0;
            }
        }
    }
`