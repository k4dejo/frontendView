/* eslint-disable react/prop-types */
import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

//changes for a final images
const carouselImages = [
  'src/assets/neom-1.jpg',
  'src/assets/neom-2.jpg',
  'src/assets/neom-3.jpg',
  'src/assets/neom-4.jpg',
];

const ONE_SECOND = 500;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;
const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const dragX = useMotionValue(0);
    useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setIndex((pv) => {
          if (pv === carouselImages.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && index < carouselImages.length - 1) {
      setIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && index > 0) {
      setIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${index * 101}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={index} />
      </motion.div>

      <Dots imgIndex={index} setImgIndex={setIndex} />
      <GradientEdges />
    </div>
  );
};

const Images = ({ idx }) => {
  return (
    <>
      {carouselImages.map((imgSrc, index) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: index === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-h-4 aspect-w-10 w-screen shrink-0 rounded-xl bg-neutral-800 object-cover"
          />
        );
      })}
    </>
  );
};


const Dots = ({imgIndex, setImgIndex}) => {
  return (
    <div className='mt-4 flex w-full justify-center gap-2 '>
      {
        carouselImages.map((_, index) => {
          return (
            <button 
              key={index}
              onClick={() => setImgIndex(index)}
              className={`w-2 h-2 rounded-full ${imgIndex === index ? 'bg-white' : 'bg-neutral-500'}`}
            />
          )
        })
      }
    </div>
  )
}

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-white"/>
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-white"/>
    </>
  )
}

export default  Carousel ;