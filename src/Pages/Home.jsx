import React from 'react';
import Banner from '../Components/Banner';
import PopularSkills from '../Components/PopularSkills';
import TopProviders from '../Components/TopProviders';
import HowWorks from '../Components/HowWorks';

const Home = () => {
    return (
        <div>
              <Banner></Banner>
              <PopularSkills></PopularSkills>
              <TopProviders></TopProviders>
              <HowWorks></HowWorks>
     </div>
    );
};

export default Home;