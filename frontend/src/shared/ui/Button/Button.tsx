type colorVariant = 'red' | 'darkPurple';
type sizeVariant = 'sm' | 'md';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: sizeVariant;
    className?: string;
    color?: colorVariant;
    onClick?: () => void;
    children: React.ReactNode;
}

const colorVariant = {
    red: 'bg-red hover:bg-dh-red',
    darkPurple: 'bg-dark-purple hover:bg-dh-purple',
};

const sizeVariant = {
    sm: 'h-9',
    md: 'h-10',
};

export function Button({ onClick, color = 'red', size = 'md', children, className }: ButtonProps) {
    return (
        <button className={`${colorVariant[color]} ${sizeVariant[size]} w-full rounded-full text-white  ${className}`} onClick={onClick}>
            <span className="text-sm">{children}</span>
        </button>
    );
}
