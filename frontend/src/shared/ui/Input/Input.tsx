import React from 'react';

interface BaseProps {
    className?: string;
    label?: string;
    typeInpArea?: 'input' | 'textarea';
}

interface InputProps extends BaseProps, React.InputHTMLAttributes<HTMLInputElement> {
    typeInpArea?: 'input';
}

interface TextareaProps extends BaseProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    typeInpArea: 'textarea';
}

type Props = InputProps | TextareaProps;

export const Input = ({ className = '', label, typeInpArea = 'input', ...props }: Props) => {
    return (
        <div className="w-full">
            {/* Ошибка над полем */}

            {label && <label className="block mb-2 text-sm">{label}</label>}

            {typeInpArea === 'input' ? (
                <input
                    className={` h-10 border border-light-purple py-3 px-3.5 rounded-md hover:border-bright-purple focus:border-bright-purple w-full ${className}`}
                    {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
                />
            ) : (
                <textarea
                    className={`resize-none h-20 border border-light-purple py-3 px-3.5 rounded-md hover:border-bright-purple focus:border-bright-purple w-full ${className}`}
                    {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                />
            )}
        </div>
    );
};
