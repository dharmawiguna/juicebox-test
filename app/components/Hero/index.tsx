"use client";
import RoundedButton from "@/app/common/RoundedButton";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { slideUp } from "./animation";
import styles from "./style.module.scss";
import Link from "next/link";
import Reload from "../Reload";

export default function Hero() {
  const slider = useRef(null);
  const xPercent = useRef(0); // useRef to persist value
  const direction = useRef(-1); // useRef to persist value

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction.current = e.direction * -1), // Update ref value
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

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <>
      <div className={styles.landing}>
        <div className="flex items-center justify-between p-4 bg-[#0c0d10] text-white">
          <div></div>

          <Link href="/">
            <Image
              src="/images/juicebox-logo.png"
              width={120}
              height={120}
              alt="background"
              className={styles.images}
            />
          </Link>

          <Reload />
        </div>
        <motion.div
          variants={slideUp}
          initial="initial"
          animate="enter"
          className={styles.landingWrapper}
        >
          <div className={styles.imageWrapper}>
            <Image
              src="/images/Vector.png"
              width={350}
              height={350}
              alt="background"
              className={styles.images}
            />
          </div>
          <div data-scroll data-scroll-speed={0.1} className={styles.desc1}>
            <p>WA businesses feel confident about future growth</p>
          </div>
          <div data-scroll data-scroll-speed={0.2} className={styles.desc2}>
            <p>AI cant replace creativity</p>
          </div>
          <div data-scroll data-scroll-speed={0.3} className={styles.desc3}>
            <p>Sales measure true success</p>
          </div>
          <div data-scroll data-scroll-speed={0.4} className={styles.desc4}>
            <p>Human connection drives WA business</p>
          </div>
        </motion.div>
        <div className={styles.description}>
          <p>
            Compare your thoughts on <br /> <span>technology</span> with current
            industry opinions.
          </p>
        </div>
        <div className={styles.started}>
          <div className="mt-10">
            <RoundedButton to="/get-started">
              <p>Get a reality check</p>
            </RoundedButton>
          </div>
        </div>
      </div>

      <div ref={container} className={styles.slidingImages}>
        <motion.div style={{ height }} className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </motion.div>
      </div>
    </>
  );
}
