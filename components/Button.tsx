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
        <button>
            {title}
        </button>
    )
} 

export default Button;