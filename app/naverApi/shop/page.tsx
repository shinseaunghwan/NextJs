import ShopForm from "../../../components/(shop)/shopForm";
import ui from "../../../styles/ui.module.css"

export const metadata = {
  title: "Shop",
};

export default function ShopPage() {
  return (
    <>
      <h3 className={ui.pc_green}>네이버 쇼핑</h3>
      <ShopForm />
    </>
  );
}