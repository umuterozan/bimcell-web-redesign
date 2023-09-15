'use client'

import Image from "next/image";
import Slide1 from "../../../public/slider-images/slide1.png"
import Slide2 from "../../../public/slider-images/slide2.png"
import Slide3 from "../../../public/slider-images/slide3.png"
import Slide4 from "../../../public/slider-images/slide4.png"
import Slide5 from "../../../public/slider-images/slide5.png"
import Slide6 from "../../../public/slider-images/slide6.png"
import Slide7 from "../../../public/slider-images/slide7.png"
import Slide8 from "../../../public/slider-images/slide8.png"
import Slide9 from "../../../public/slider-images/slide9.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

export default function HeroSection() {

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear'
  }

  return (
    <section className="h-[455px] bg-[url('/slider_background.jpg')] bg-cover bg-no-repeat">
      <div className="h-full bg-text-one bg-opacity-75">
        <div className="h-full container mx-auto py-8">
          <Slider {...sliderSettings}>
            <div className="outline-none">
              <Image className="mx-auto" src={Slide1} alt="Slide 1" />
            </div>
            <div className="outline-none">
              <Image className="mx-auto" src={Slide2} alt="Slide 2" />
            </div>
            <div className="outline-none">
              <Image className="mx-auto" src={Slide3} alt="Slide 3" />
            </div>
            <div className="outline-none">
              <Image className="mx-auto" src={Slide4} alt="Slide 4" />
            </div>
            <div className="outline-none">
              <Image className="mx-auto" src={Slide5} alt="Slide 5" />
            </div>
            <div className="outline-none">
              <Image className="mx-auto" src={Slide6} alt="Slide 6" />
            </div>
            <div className="outline-none">
              <Image className="mx-auto" src={Slide7} alt="Slide 7" />
            </div>
            <div className="outline-none">
              <Image className="mx-auto" src={Slide8} alt="Slide 8" />
            </div>
            <div className="outline-none">
              <Image className="mx-auto" src={Slide9} alt="Slide 9" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  )
}