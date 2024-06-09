// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.scss";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="carousel"
      >
        <SwiperSlide>
          <img
            src="https://www.fortunaauction.com/wp-content/uploads/2020/07/Email-1500x1000-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.fortunaauction.com/wp-content/uploads/2023/10/brooch-AM.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.fortunaauction.com/wp-content/uploads/2020/12/W1001-hero-10.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <Row>
        <Col span={6}>
          THE LEADING BOUTIQUE JEWELRY AND WATCH AUCTION HOUSE
          <button>
            <Link to="/">LEARN MORE ABOUT US</Link>
          </button>
        </Col>
        <Col span={6}>
          <Link to="/form-sign">BUYING AT AUTION</Link>
        </Col>
        <Col span={6}>
          <Link to="/">SCHEDULE A PREVIEW</Link>
        </Col>
        <Col span={6}>
          <Link to="/">SELLING AT AUCTION</Link>
        </Col>
      </Row>
      .
    </>
  );
}
