import "../styles/global.css"
import { Metadata } from "next";
import Navigation from "../components/navigation";
import layout from "../styles/layout.module.css"

export const metadata: Metadata = {
  title: {
    template: "%s | NextJs",
    default: "NextJs",
  },
  description: "NextJs framework",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <div className={layout.container}>{children}</div>
      </body>
    </html>
  );
}