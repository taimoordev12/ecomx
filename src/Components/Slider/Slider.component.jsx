import React, { useState } from 'react';
import b2 from '../../assets/images/b2.jpg';
import e4 from '../../assets/images/e4.jpg'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
console.log(e4);
const items = [
  {
    src:{e4},
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://cdn.shopify.com/s/files/1/0100/5499/1969/t/7/assets/slideshow_4.jpg?v=8171324962076785025',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://cdn.shopify.com/s/files/1/0100/5499/1969/t/7/assets/slideshow_3.jpg?v=15227626826394297397',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} className="img-fluid" alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Slider;