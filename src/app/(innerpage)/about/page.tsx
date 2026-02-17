import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Counter1 from '../../Components/Counter/Counter1';
import Video2 from '../../Components/Video/Video2';
import Testimonial3 from '../../Components/Testimonial/Testimonial3';
import Awards from '../../Components/Award/Awards';

const page = () => {
  return (
    <div>
             <BreadCumb
                bgimg="/assets/img/page_header.jpg"
                Title="About Us"
            ></BreadCumb> 
            <Counter1></Counter1> 
            <Video2></Video2> 
            <Testimonial3></Testimonial3>
            <Awards></Awards>
    </div>
  );
};

export default page;