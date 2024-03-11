import { SlidersButtonProps } from "../../../interfaces/interfaces.ts";
import './sliderButton.css';

export default function SlidersButton({value, sections, position, handleSliders,}: SlidersButtonProps) {
  return (
    <article className={`buttonContainer__${position}`}>
      {sections.length > 1 && (
        <button
          onClick={() => {
            handleSliders(value, sections.length);
          }}
        >
          {value}
        </button>
      )}
    </article>
  );
}
