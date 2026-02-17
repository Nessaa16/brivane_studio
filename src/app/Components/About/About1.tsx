import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About1 = () => {
    return (
<section className="cs_about cs_style_1 position-relative overflow-hidden">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_gap_y_40 cs_tab_reverse">
          <div className="col-lg-6">
            <div className="cs_about_content">
              <div className="cs_section_heading cs_style_1 cs_mb_28">
                <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
                  About Us<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_21 wow fadeInDown">Two Designers. One Vision</h2>
                <p className="cs_section_heading_text mb-0">Brivane Studio is a creative design agency focused on delivering thoughtful, strategy-driven design solutions. We believe great design is not just about aesthetics, it’s about clarity, functionality, and impact. <br /> Founded and led by two passionate designers, we combine creativity with structure to create work that is both visually compelling and strategically effective. </p>
              </div>
              <ul className="cs_list cs_style_1 cs_medium cs_heading_color cs_mp_0">
                <li>
                  <span className="cs_list_icon cs_center"><i className="bi bi-check-lg"></i></span>
                  <span className="cs_list_text">Purposeful Design. Real Impact.</span>
                </li>
                <li>
                  <span className="cs_list_icon cs_center"><i className="bi bi-check-lg"></i></span>
                  <span className="cs_list_text">Design That Speaks for Brands.</span>
                </li>
                <li>
                  <span className="cs_list_icon cs_center"><i className="bi bi-check-lg"></i></span>
                  <span className="cs_list_text">Design with Strategy. Built for Growth.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cs_about_thumbnail_wrapper wow fadeInUp">
              <div className="cs_about_thumbnail position-relative">
                <Image src="/assets/img/about_img_1.jpg" alt="img" width={260} height={353}   />
                <div className="cs_project_infobox_wrapper">
                  <div className="cs_project_infobox cs_blue_bg">
                    <h3 className="cs_fs_48 cs_white_color">10+</h3>
                    <p className="cs_white_color mb-0">Project Completed</p>
                  </div>
                </div>
                <div className="cs_vector_shape position-absolute">
                  <Image src="/assets/img/vector_line.svg" alt="img" width={57} height={19}   />
                </div>
              </div>
              <div className="cs_about_thumbnail position-relative">
                <Image src="/assets/img/about_img_2.jpg" alt="img" width={269} height={453}   />
                <div className="cs_about_shape_3 position-absolute">
                  <Image src="/assets/img/about_shape_1.svg" alt="img" width={99} height={86}   />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_about_shape_1 position-absolute">
          <Image src="/assets/img/blob_shape.svg" alt="img" width={831} height={932}   />
        </div>
        <div className="cs_about_shape_2 position-absolute">
          <Image src="/assets/img/circle_1.svg" alt="img" width={93} height={93}   />
        </div>
      </div>
    </section>
    );
};

export default About1;