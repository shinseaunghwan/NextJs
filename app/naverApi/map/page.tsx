import MapForm from "../../../components/(map)/MapForm";
import ui from "../../../styles/ui.module.css"

export const metadata = {
  title: "map",
};

export default function MapPage() {
  return (
    <>
    <h3 className={ui.pc_green}>네이버 지도</h3>
        <MapForm />
    </>
  );
}