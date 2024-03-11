import { useState, useRef } from "react";
import { SlidersProps } from "../../interfaces/interfaces.ts";
import SlidersButton from "./SliderButton/SliderButton.tsx";
import ContentHeader from "./ContentHeader/ContentHeader.tsx";
import Product from "./Product/Product.tsx";

function Sliders({ sections }: SlidersProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const refSlide = useRef<HTMLDivElement>(null);

  function handleSliders(button: string, numberOfSliders: number) {
    const contentPadding = 12;
    const sliderWidth = refSlide.current!.offsetWidth + contentPadding;

    if (button === "<" && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      refSlide.current!.style.marginLeft = `-${
        (currentSlide - 1) * sliderWidth
      }px`;
    }

    if (button === ">" && currentSlide < numberOfSliders - 1) {
      setCurrentSlide(currentSlide + 1);
      refSlide.current!.style.marginLeft = `-${
        (currentSlide + 1) * sliderWidth
      }px`;
    }
  }

  return (
    <section>
      <SlidersButton
        value={"<"}
        sections={sections}
        position={"left"}
        handleSliders={handleSliders}
      />
      <article className="content">
        <ContentHeader sections={sections} currentSlide={currentSlide} />
        <article ref={refSlide} className="content__sliders">
          {sections?.map((slider, index) => (
            <div key={index} className="content__sliders--slider">
              {slider?.map((product, index) => (
                <Product key={index} product={product} />
              ))}
            </div>
          ))}
        </article>
      </article>
      <SlidersButton
        value={">"}
        sections={sections}
        position={"right"}
        handleSliders={handleSliders}
      />
    </section>
  );
}

export default Sliders;
