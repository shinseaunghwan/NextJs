"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const [showNav, setShowNav] = useState(true);
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

  return (
    <nav className={`${styles.nav} ${showNav ? styles.show : styles.hide}`}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? " ✔" : ""}
        </li>
        <li>
          <Link href="/React">React</Link> {path === "/React" ? " ✔" : ""}
        </li>
        <li>
          <Link href="/movies">Movies</Link> {path === "/movies" ? " " : ""}
        </li>
        <li>
          <Link href="/naverApi">Api</Link> {path === "/naverApi" ? " ✔" : ""}
        </li>
      </ul>
    </nav>
  );
}
