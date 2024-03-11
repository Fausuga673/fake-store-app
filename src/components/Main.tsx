import { MainProps } from "../interfaces/interfaces";
import Sliders from "./Sliders/Sliders.tsx";
import "../css/main.css";

export default function Main({ slidersForEachCategory }: MainProps) {
  return (
    <main>
      {slidersForEachCategory?.map((sections, index) => (
        <Sliders key={index} sections={sections} />
      ))}
    </main>
  );
}
