type ButtonProps = {
    text: string,
    link: string
}

export default function Button({text, link}: ButtonProps) {
    return (
        <a href={link} 
            className="border rounded-md pl-2 pr-2 pt-1 pb-1 mr-2 mb-2 
                        text-black whitespace-nowrap text-[20px] inline-block font-medium
                        hover:bg-black hover:text-white hover:border-black transition"
        >
            {text}
        </a>
    );
}