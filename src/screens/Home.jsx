import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import HeroCard from '../components/HeroCard';
import WomenWorld from '../components/WomenWorld';
import MenWorld from '../components/MenWorld';
import NewArrival from '../components/NewArrival';
import OurService from '../components/OurService';
import Footer from '../components/Footer';
import GoogleMap from '../components/GoogleMap';

export default function App() {
  return (
    <Wrapper className="container">
        <Header />
        <HeroCard />
        <WomenWorld />
        {/* <MenWorld /> */}
        {/* <NewArrival /> */}
        <OurService />
        <GoogleMap />
        <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`