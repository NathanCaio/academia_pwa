import React from 'react';

import Slider from '@/components/HomePage/Slider';
import BuyByCategory from './BuyByCategory';
import NewsletterBar from '../NewsletterBar';

const HomePage = () => {
    return (
        <>
            <Slider />
            <BuyByCategory />
            <NewsletterBar />
        </>
    );
};

export default HomePage;
