"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";
import Translate from "../components/translate"

export default function Navigation( ) {
  const [showNav, setShowNav] = useState(true);
  const [showTl, setShowTl] = useState(true);
  const [bg, setBg] = useState(false);
  const path = usePathname();

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const isNaverApi = path.startsWith("/naverApi");
    const isMovies = path.startsWith("/movies");
    const isTranslate = path.startsWith("/movies/");
    document.body.classList.toggle("bgColorBlack", isMovies);
    setBg(isNaverApi);
    setShowTl(isTranslate);
}, [path]);

  
  return (
    <>
    <nav className={`${styles.nav} ${showNav ? styles.show : styles.hide} ${bg ? styles.bgColorNaverApi : styles.bgColorBlack}`}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? (<span className={styles.arrow}>✔</span>) : "" }
        </li>
        <li>
          <Link href="/React">React</Link> {path === "/React" ? (<span className={styles.arrow}>✔</span>) : ""}
        </li>
        <li>
          <Link href="/movies">Movies</Link> {path === "/movies" ? (<span className={styles.arrow}>✔</span>) : ""}
        </li>
        <li>
          <Link href="/naverApi">Api</Link> {path === "/naverApi" ? (<span className={styles.arrow}>✔</span>) : ""}
        </li>
      </ul>
    </nav>
    {showTl && <Translate />}
    </>
  );
}
