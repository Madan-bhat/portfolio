import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import comp_on_my_lap from "@/app/images/about_image.webp";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="relative py-20 bg-black text-white overflow-hidden"
    >
      <div className="parallax-background"></div>
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
        className="text-4xl text-center md:text-5xl font-bold mb-8"
      >
        About Me
      </motion.h2>
      <div ref={ref} className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full max-w-xs mt-2 md:max-w-md"
            >
              <Image
                src={comp_on_my_lap}
                alt="About Me"
                width={400}
                height={400}
                className="object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 1 }}
              className="space-y-8 md:space-y-12"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="text-lg md:text-xl"
              >
                Hi, I'm Madan Bhat, a 17-year-old developer with 2 years of
                experience in coding. From building my first app in 8th grade to
                developing complex solutions today, I've built expertise in
                ReactJS, React Native, and JavaScript.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="text-lg md:text-xl"
              >
                In addition to my development work, I use Arch Linux as my
                primary operating system and enjoy experimenting with various
                desktop managers and window managers such as Xmonad and Sway.
                This hobby allows me to customize my development environment to
                fit my needs perfectly.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .parallax-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at center,
            #000000 0%,
            #333333 100%
          );
          z-index: -1;
          animation: backgroundAnimation 20s infinite alternate;
        }

        @keyframes backgroundAnimation {
          0% {
            background-color: #000000;
          }
          100% {
            background-color: #333333;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
