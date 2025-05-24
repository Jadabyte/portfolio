import type { ReactNode } from 'react';

type DetailItemProps = {
    title: string,
    description: string | ReactNode,
    size: string,
    align?: string,
    weight?: string,
}

export default function DetailItem({title, description, align = "text-left", size = "small", weight = "medium"}: DetailItemProps){
    const titleSize = size === "small" ? "text-[14px]" : "text-[20px]";
    const descriptionSize = size === "small" ? "text-[18px]" : "text-[24px]";
    const marginSize = size === "small" ? "mb-2" : "mb-4";

    return(
        <div className={align}>
            <h3 className={`${titleSize} text-gray-500`}>
                {title}
            </h3>
            <p className={`${descriptionSize} ${marginSize} font-${weight}`}>
                {description}
            </p>
        </div>
    );
}