interface CheckboxProps {
    className?: string;
    checked?: boolean;
}

export function Checkbox({ className, checked }: CheckboxProps) {
    return (
        <label className="inline-flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="absolute opacity-0 w-5 h-5 m-0 z-20 cursor-pointer" checked={checked} />
            <span
                className={`${className} w-5 h-5 border-2 border-blue box-border rounded-md flex items-center justify-center pointer-events-none transition-all duration-200 relative z-10`}
            >
                <svg
                    width="11"
                    height="11"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-0 transition-opacity duration-200 group-has-checked:opacity-100"
                    aria-hidden="true"
                >
                    <path d="M1.16895 10.9821L7.46895 16.8174L19.1689 0.817383" stroke="#5057D3" strokeWidth="4" />
                </svg>
            </span>
        </label>
    );
}
