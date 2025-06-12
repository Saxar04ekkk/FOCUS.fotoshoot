
import React from 'react';
import FeatureItem from './FeatureItem';
import { featuresData } from './FeaturesData';
import s from './WhyChoose.module.css';

const WhyChoose = () => {
  return (
    <section className={s.whyChoose}>
      <h2 className={s.title}>ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
      <div className={s.Grid}>
        {featuresData.map((feature, index) => (
          <FeatureItem key={index} icon={feature.icon} title={feature.title} />
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
