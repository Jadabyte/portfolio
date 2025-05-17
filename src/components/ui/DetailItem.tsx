import type { ReactNode } from 'react';

type DetailItemProps = {
    title: string,
    description: string | ReactNode,
    align?: string
}

export default function DetailItem({title, description, align = "text-left"}: DetailItemProps){
    return(
        <div className={align}>
            <h3 className="text-[14px] text-gray-500">{title}</h3>
            <p className="font-bold text-[18px] mb-2">{description}</p>
        </div>
    );
}