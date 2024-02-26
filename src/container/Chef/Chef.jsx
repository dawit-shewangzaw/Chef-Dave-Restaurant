import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">There's no greater happiness than feeding my community</p>
        </div>
        <p className="p__opensans">Witnessing the joy on your faces with every bite fuels my passion. That's why I believe good food, made with love, has the power to transform your day, bringing people together and creating lasting memories. I hope you enjoy every dish we serve, and please don't hesitate to share your feedback – it helps us grow and continue delivering the best possible experience for you.. </p>
      </div>

      <div className="app__chef-sign">
        <p>Dave</p>
        <p className="p__opensans">Chef & Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;
