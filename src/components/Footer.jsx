import React from 'react'
import styled from 'styled-components'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer() {
    return (
        <Wrapper>
            <footer>
                <div className="about">
                    <h3>ABOUT</ h3>
                    <p>We craft experiences.</p>
                    <p>We build complete experiences, on the highest quality foundations, making our clients 's dream a reality. Work with our team of experts who can assist you to achieve your dream by turning in into a reality.</p>
                </div>
                <div className="contact">
                    <div>
                        <h3>CONTACT</h3>
                    </div>
                    <div className="email">
                        <MailOutlineIcon />
                        <p>sovannnra.lorn@gmail.com</p>
                    </div>
                    <div className="phone_number">
                        <PhoneIcon />
                        <p>+855 78 962 424</p>
                    </div>
                </div>
                <div className="social_media">
                    <div>
                        <h3>SOCIAL MEDIA</h3>
                    </div>
                    <div>
                        <FacebookIcon style={{ color: '#013a63', fontSize: 50, cursor: 'pointer' }} />
                        <InstagramIcon style={{ color: '#ff006e', fontSize: 50, cursor: 'pointer' }} />
                    </div>
                </div>
            </footer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    /* margin: 5em 0 0 0; */
    background: #293241;
    color: whitesmoke;

    footer{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 5em 10em;

        .about{
            
            h3{
                font-size: 2em;
            }

            p:nth-child(2){
                font-weight: bolder;
            }

            p:nth-child(3){
                width: 80%;
            }
        }

        .contact{

            h3{
                font-size: 2em;
            }

            .email{
                display: flex;
                align-items: center;

                p{
                    margin-left: 1em;
                }
            }

            .phone_number{
                display: flex;
                align-items: center;

                p{
                    margin-left: 1em;
                }
            }
        }

        .social_media{

            h3{
                font-size: 2em;
            }
        }
    }

    @media screen and (max-width: 992px){
        footer{
            display: flex;
            flex-direction: column;
            padding: 5em 3em;

            .about{

                p:nth-child(3){
                    width: 100%;
                }
            }
        }
    }

`