"use client";
import animationData from "@/public/JB2G_Lottie.json";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Provider } from "react-redux";
import MultiStepForm from "../components/MultistepForm";
import { store } from "../store/store";
import styles from "./style.module.scss";
import { ArrowLeftIcon, ArrowPathIcon } from "@heroicons/react/24/solid";

export default function Form() {
  return (
    <>
      <Provider store={store}>
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
