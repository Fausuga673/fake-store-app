import { ContentHeaderProps } from "../../../interfaces/interfaces.ts";
import "../../../css/contentHeader.css";

export default function ContentHeader({
  sections,
  currentSlide,
}: ContentHeaderProps) {
  const sectionsHasItems = sections.length > 0;
  const categoryName = sections[0][0].category;

  const categoryNameWithFirstLetterCapitalized =
    categoryName[0].toUpperCase() + categoryName.slice(1);

  return (
    <article className="content__header">
      <h2>{sectionsHasItems && categoryNameWithFirstLetterCapitalized}</h2>
      <div className="content__header--pages">
        {sections.map(
          (_slider, index) =>
            sections.length >= 2 && (
              <div
                key={index}
                className={
                  index == currentSlide
                    ? `content__header--pages-page active`
                    : "content__header--pages-page"
                }
              ></div>
            )
        )}
      </div>
    </article>
  );
}
