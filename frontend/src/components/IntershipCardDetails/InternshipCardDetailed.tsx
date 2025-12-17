import React from 'react';

import { VerificationIcon } from '../../assets/icons/VerificationIcon';
import { Button } from '../../shared/ui';

interface InternshipCardDetailedProps {
    title: string;
    stipendAmount?: string;
    stipendComment?: string;
    tags: string[];
    companyName: string;
    rating: number;
    reviewsCount: number;
    location: string;
    responsibilities: string[];
    requirements: string[];
    benefits: string[];
    onApply?: () => void;
}

export const InternshipCardDetailed: React.FC<InternshipCardDetailedProps> = ({
    title,
    stipendAmount,
    stipendComment,
    tags,
    companyName,
    rating,
    reviewsCount,
    location,
    responsibilities,
    requirements,
    benefits,
    onApply,
}) => {
    return (
        <div className="bg-white rounded-lg py-5 px-4 max-w-[350px] w-full box-border">
            <h3 className="font-semibold text-lg text-dark mb-2">{title}</h3>

            <div className="mb-4 text-[15px]">
                <span className="text-green font-semibold text-md">{stipendAmount}</span>
                {stipendComment && <span className="text-dark font-light text-sm"> {stipendComment}</span>}
            </div>

            <div className="flex gap-2 mb-3 flex-wrap">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-lavender text-dark rounded-xs py-1 px-1.5 font-normal text-sm tracking-[-0.01em]">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex items-center gap-1 mb-1.5">
                <span className="font-medium text-sm uppercase text-dark">{companyName}</span>
                <VerificationIcon className="block" />
            </div>

            <div className="flex items-center gap-1 mb-3.5 font-medium text-sm">
                <span className="text-[#fbbf24] text-lg leading-none">★</span>
                <span className="font-bold text-[#1a1a1a]">{rating}</span>
                <span className="text-dark/40 mx-0.5">•</span>
                <span className="text-dark/40">{reviewsCount} отзывов</span>
            </div>

            <div className="font-normal text-sm tracking-[-0.01em] text-dark mb-3">{location}</div>

            <div className="mb-6 text-dark font-light text-sm">
                <h4 className="font-semibold mb-2">Обязанности:</h4>
                {responsibilities.map((text, idx) => (
                    <p key={idx} className="mb-2">
                        {text}
                    </p>
                ))}

                <h4 className="font-semibold mt-4 mb-2">Требования:</h4>
                {requirements.map((text, idx) => (
                    <p key={idx} className="mb-2">
                        {text}
                    </p>
                ))}

                <h4 className="font-semibold mt-4 mb-2">Мы предлагаем:</h4>
                {benefits.map((text, idx) => (
                    <p key={idx} className="mb-2">
                        {text}
                    </p>
                ))}
            </div>

            <Button color="red" size="sm" onClick={onApply}>
                Откликнуться
            </Button>
        </div>
    );
};
