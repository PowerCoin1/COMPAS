import React from 'react';

import { Button } from '../../shared/ui';

interface InternshipCardDetailedProps {
    title: string;
    stipendAmount?: string;
    stipendComment?: string;
    tags?: string[];
    companyName: string;
    location: string;
    responsibilities: string[];
    requirements: string[];
    benefits: string[];
    sourceUrl?: string;
    onApply?: () => void;
    onDetails?: () => void;
}

export const InternshipCardDetailed: React.FC<InternshipCardDetailedProps> = ({
    title,
    stipendAmount,
    stipendComment,
    companyName,
    location,
    responsibilities,
    requirements,
    benefits,
    sourceUrl,
    onApply,
    onDetails,
}) => {
    return (
        <div className="bg-white rounded-lg py-5 px-4 max-w-[350px] w-full box-border">
            <h3 className="font-semibold text-lg text-dark mb-2">{title}</h3>

            <div className="mb-4 text-[15px]">
                <span className="text-green font-semibold text-md">{stipendAmount}</span>
                {stipendComment && <span className="text-dark font-light text-sm"> {stipendComment}</span>}
            </div>

            <div className="flex items-center gap-1 mb-1.5">
                <span className="font-medium text-sm uppercase text-gray">{companyName}</span>
                <span className="text-gray/40 mx-1">|</span>
                <span className="font-normal text-sm tracking-[-0.01em] text-gray mb-3 mt-3">{location}</span>
            </div>

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

            {sourceUrl && (
                <div className="flex items-center gap-2 p5 pb-4">
                    <span className=" text-gray">2 месяца назад с</span>
                    <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue hover:underline p5">
                        rabota.magnit.ru
                    </a>
                    <span className="text-gray mx-1">|</span>
                    <div color="blue" onClick={onDetails}>
                        еще
                    </div>
                </div>
            )}

            <Button color="red" size="sm" onClick={onApply}>
                Подробнее
            </Button>
        </div>
    );
};
