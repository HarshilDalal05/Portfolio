import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item, key) => {
          const {
            id,
            img,
            imgClassName,
            title,
            titleClassName,
            spareImg,
            description,
            className,
          } = item;
          return (
            <BentoGridItem
              id={id}
              key={key}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          );
        })}
      </BentoGrid>
    </section>
  );
};

export default Grid;
