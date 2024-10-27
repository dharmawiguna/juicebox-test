"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import Hero from "./components/Hero";
import styles from "./page.module.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);
  return (
    <Provider store={store}>
      <main className={styles.main}>
        <div className={styles.spacer}>
          <Hero />
        </div>
        <div className={styles.spacer}></div>
      </main>
    </Provider>
  );
}
