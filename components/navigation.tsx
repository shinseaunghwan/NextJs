"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? " ✔" : ""}
        </li>
        <li>
          <Link href="/React">React</Link>
          {path === "/React" ? " ✔" : ""}
        </li>
        <li>
          <Link href="/movies">Moives</Link> {path === "/movies" ? " ✔" : ""}
        </li>
        <li>
          <Link href="/naverApi">Api</Link> {path === "/naverApi" ? " ✔" : ""}
        </li>
      </ul>
    </nav>
  );
}