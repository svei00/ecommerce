interface Props {
    title: string;
    onClick?: () => void; // The question mark means it nos required.
    width?: string;
    loading?: boolean;
    padding?: string;
    noIcon?: boolean;
}

function Button({ title, onClick, width, loading, padding, noIcon }: Props) {
    return (
        <button
            className={`ease group relative z-30 box-border inline-flex ${
                width ? width: 'w-auto'
            } ${padding} cursor-pointer items-center justify-center overflow-hidden rounded
            bg-gray-700 bg-gradient-to-r from-red-600 to-yellow-600 px-8 py-3 font-bold
            text-white transition-all duration-300 focus:outline-none`}
            onClick={onClick}
        >
            <span className="absolute bottom-0 right-0 -mb-8 -mr-5 h-20 w-8 translate-x-1
            rotate-45 transform bg-white opacity-10 transition-all duration-300 ease-out
            group-hover:translate-x-0"></span>

            <span className="relative z-20 flex items-center font-semibold">
                {noIcon && (
                    <svg
                        className="relative mr-2 h-5 w-5 flex-shrink-0 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http//www.w3.org/2000/svg"
                    />
                )}

            </span>

            {title}
        </button>
    )
} 

export default Button;