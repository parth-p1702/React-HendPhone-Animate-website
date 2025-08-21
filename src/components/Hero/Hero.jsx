import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone3 from "../../assets/headphone3.png";
const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      y: 100,
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};
const headphoneData = [
  {
    id: 1,
    image: Headphone1,
    title: "Headphones Wireless",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus enim nisi nesciunt eius fuga perspiciatis.minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$100",
    model: "Model Brown",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    image: Headphone2,
    title: "Headphones Wireless 2",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus enim nisi nesciunt eius fuga perspiciatis.minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$100",
    model: "Lime Green",
    bgColor: "#638153",
  },
  {
    id: 3,
    image: Headphone3,
    title: "Headphones Wireless 3",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus enim nisi nesciunt eius fuga perspiciatis.minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$100",
    model: "Ocean Blue",
    bgColor: "#5d818c",
  },
];

const Hero = () => {
  const [active, setActive] = useState(headphoneData[0]);
  const handleActiveData = (data) => {
    setActive(data);
  };
  return (
    <>
      <section className="bg-[#151616] text-white font-varela px-6">
        <div className="p-[2rem] md:p-[1rem] grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
          {/* Brand Info */}
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500x]">
            <div className="space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 10,
                  }}
                >
                  <motion.h1
                    key={active.id}
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-3xl lg:text-6xl font-bold font-varela"
                  >
                    {active.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={active.id}
                  variants={fadeUp(0.3)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm leading-loose text-white/80 "
                >
                  {active.subtitle}
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <UpdateFollower 
                mouseOptions={{
                    backgroundColor: active.bgColor,
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 6,
                    backgroundElement:<div>
                      <img src={active.image} alt="" />
                    </div>,
                    
                  }}>
                  <motion.button
                    key={active.id}
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{ backgroundColor: active.bgColor }}
                    className="px-4 py-2 inline-block font-normal rounded-sm"
                  >
                    Buy and Listen
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>

              {/* Headphone list separator */}

              <div className="flex  justify-center items-center  md:text-xl  md:justify-start md:px-8 gap-4 !mt-24">
                <div className="w-20 h-[1px] md:w-50 bg-white"></div>
                <p className="uppercase text-sm">Top Headphone for you</p>
                <div className="w-20 h-[1px] md:w-50 bg-white"></div>
              </div>

              {/* Headphone list switcher */}
              <div className="grid grid-cols-3 gap-10">
                {headphoneData.map((item) => {
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleActiveData(item)}
                      className="grid grid-cols-2 place-items-center cursor-pointer"
                    >
                      <div>
                        <img src={item.image} alt="" className="w-[200px]" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-base font-bold">{item.price}</p>
                        <p className="text-xs font-normal text-nowrap">
                          {item.model}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div className="flex flex-col justify-end items-center">
            <img
              src={active.image}
              alt=""
              className="w-[300px] md:w-[400px] xl:w-[550px]"
            />
          </div>
          {/* WHatsapp icon */}
          <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
            <a href="">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
