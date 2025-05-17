type ButtonProps = {
    text: string,
    link: string
}

export default function Button({text, link}: ButtonProps) {
    return (
        <a href={link} className="border rounded-md pl-2 pr-2 pt-1 pb-1 text-black whitespace-nowrap mr-2 mb-2 text-[20px] inline-block">
            {text}
        </a>
    );
}