import { motion } from "framer-motion";
import { MdMenu } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import { UpdateFollower } from "react-mouse-follower";
import "../../../src/App.css";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "Categories",
    link: "#",
  },
  {
    id: 3,
    title: "Blog",
    link: "#",
  },
  {
    id: 4,
    title: "About",
    link: "#",
  },
  {
    id: 5,
    title: "Contact",
    link: "#",
  },
];
const Navbar = () => {
  return (
    <div className="bg-[#151616] text-white py-4 font-varela px-6">
      <motion.nav 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1, delay:0.5}}
      className="p-[2rem] md:p-[1rem] flex justify-between items-center">
        {/* logo section */}
        <div className="">
          <a href="#" className="text-xl font-bold uppercase">
            Playing /{" "}
            <span className="font-extralight text-white/70">Market</span>
          </a>
        </div>
        {/* Menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4">
            {NavbarMenu.map((item) => (
              <li key={item.key}>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 999,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "difference",
                  }}
                >
                  <a
                    href={item.link}
                    className="inline-block text-sm py-2 px-3 uppercase"
                  >
                    {item.title}
                  </a>
                </UpdateFollower>
              </li>
            ))}
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <button className="text-xl ps-14 ">
                <SlEarphones />
              </button>
            </UpdateFollower>
          </ul>
        </div>
        {/* Mobile Hamburger section */}
        <div className="md:hidden">
          <MdMenu className="text-4xl " />
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
