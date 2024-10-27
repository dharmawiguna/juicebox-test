"use client";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { slideUp } from "./animation";
import styles from "./style.module.scss";
import Slider from "../components/Slider";
import { ArrowLeftIcon, ArrowPathIcon } from "@heroicons/react/24/solid";

export default function GetStarted() {
  const slider = useRef(null);
  const xPercent = useRef(0);
  const direction = useRef(-1);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction.current = e.direction * -1),
      },
      x: "-500px",
    });

    const animate = () => {
      if (xPercent.current < -100) {
        xPercent.current = 0;
      } else if (xPercent.current > 0) {
        xPercent.current = -100;
      }
      xPercent.current += 0.1 * direction.current;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <>
      <div className={styles.landing}>
        <div className="flex items-center justify-between p-4 bg-[#0c0d10] text-white">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer">
            <ArrowLeftIcon className="w-6 h-6" />
          </div>

          <h1 className="text-3xl font-bold">juicebox</h1>

          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer">
            <ArrowPathIcon className="w-6 h-6" />
          </div>
        </div>
        <motion.div
          variants={slideUp}
          initial="initial"
          animate="enter"
          className={styles.landingWrapper}
        >
          <div className={styles.imageWrapper}>
            <Image
              src="/images/vector.png"
              width={150}
              height={150}
              alt="background"
            />
          </div>
        </motion.div>
        <Slider />
      </div>
    </>
  );
}
