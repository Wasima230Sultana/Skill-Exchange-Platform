import React from 'react';
import Banner from '../Components/Banner';
import PopularSkills from '../Components/PopularSkills';
import TopProviders from '../Components/TopProviders';

const Home = () => {
    return (
        <div>
              <Banner></Banner>
              <PopularSkills></PopularSkills>
              <TopProviders></TopProviders>
     </div>
    );
};

export default Home;