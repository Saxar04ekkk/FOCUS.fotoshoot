import React from 'react';
import s from './PhotoSession.module.css';
import Hero from './Hero/Hero';
import WhyChoose from './WhyChoose/WhyChoose';
import Pass from './Pass/Pass';

const PhotoSession = () => (
    <div className={s.wrapper}>
        <Hero />
        <WhyChoose />
        <Pass />
        {/* <Pass />
        <Gallery />
        <Request />
        <Footer /> */}
    </div>
);

export default PhotoSession;
