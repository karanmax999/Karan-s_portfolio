import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            header={<div className={item.titleClassName}>{item.header}</div>}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;