"use client";
import animationData from "@/public/JB2G_Lottie.json";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import { Provider } from "react-redux";
import MultiStepForm from "../components/MultistepForm";
import Reload from "../components/Reload";
import { store } from "../store/store";
import styles from "./style.module.scss";

export default function Form() {
  return (
    <>
      <Provider store={store}>
        <div className={styles.landing}>
          <div className="flex items-center justify-between p-4 bg-[#0c0d10] text-white">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer">
              <ArrowLeftIcon className="w-6 h-6" />
            </div>

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
            initial="initial"
            animate="enter"
            className={styles.landingWrapper}
          >
            <div className={styles.imageWrapper}>
              <Lottie animationData={animationData} className="w-24 h-w-24" />
            </div>
          </motion.div>
          <MultiStepForm />
        </div>
      </Provider>
    </>
  );
}
