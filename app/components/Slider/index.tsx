import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 0 20px;

  @media (min-width: 640px) {
    padding: 0 24rem;
  }
`;

const SlideText = styled.p`
  color: white;
  font-size: 30px;
  color: #fafafa;
  margin-bottom: 32px;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Button = styled.button`
  padding: 12px 32px;
  margin-top: 30px;
  background-color: transparent;
  border: 1px solid #7f7f7f;
  color: white;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LinkButton = styled.a`
  padding: 12px 32px;
  margin-top: 30px;
  display: inline-block;
  background-color: white;
  border: 1px solid #7f7f7f;
  color: black;
  border-radius: 20px;
  text-decoration: none; // Menghapus garis bawah

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  div {
    width: 8px;
    height: 8px;
    margin: 0 5px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);

    &.active {
      background: #b488f2;
    }
  }
`;

const Slider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperCore | null>(null); // Menggunakan useRef untuk referensi swiper

  const slides = [
    {
      text: "Professionals around the world shared how they feel about technology and I've listened. Now it’s your turn.",
      button: "Continue",
    },
    {
      text: "I’ll ask you a handful of meaningful questions and compare your responses with people in your industry.",
      button: "Continue",
    },
    {
      text: "You'll get insights into current industry sentiments and a reality check about technology in a few minutes. Deal? Great!",
      button: "Get started",
      href: "/form",
    },
  ];

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleIndicatorClick = (index: number) => {
    swiperRef.current?.slideTo(index); // Pindah ke slide yang diklik
  };

  return (
    <Container>
      <Swiper
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Menyimpan instance ke swiperRef.current
        spaceBetween={50}
        slidesPerView={1}
        modules={[Pagination]}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <SlideContent className="">
              <SlideText>{slide.text}</SlideText>

              <PaginationContainer>
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={index === activeIndex ? "active" : ""}
                    onClick={() => handleIndicatorClick(index)} // Tambahkan handler klik
                  />
                ))}
              </PaginationContainer>

              {/* <Button
                onClick={() => {
                  swiperRef.current?.slidePrev(); // Button untuk slide ke belakang
                }}
              >
                Back
              </Button> */}
              {index === 2 ? (
                <LinkButton href={slide.href}>{slide.button}</LinkButton>
              ) : (
                <Button
                  onClick={() => {
                    swiperRef.current?.slideNext();
                  }}
                >
                  {slide.button}
                </Button>
              )}
            </SlideContent>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Slider;
