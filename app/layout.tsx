import "../styles/global.css";
import { Metadata } from "next";
import Navigation from "../components/navigation";
import layout from "../styles/layout.module.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export const metadata: Metadata = {
  title: {
    template: "%s | NextJs",
    default: "NextJs",
  },
  description: "NextJs framework",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <body>
        <Navigation/>
        <div className={layout.container}>{children}</div>
      </body>
    </html>
  );
}
