// import { VerificationIcon } from '../../assets/icons/VerificationIcon';
// import { Button } from '../../shared/ui';
// import styles from './VacancyCardDetailed.module.css';
// interface VacancyCardDetailedProps {
//     title: string;
//     salaryAmount?: string;
//     salaryComment?: string;
//     tags: string[];
//     companyName: string;
//     rating: number;
//     reviewsCount: number;
//     location: string;
//     description: string[];
//     onApply?: () => void;
// }
// export const VacancyCardDetailed: React.FC<VacancyCardDetailedProps> = ({
//     title,
//     salaryAmount,
//     salaryComment,
//     tags,
//     companyName,
//     rating,
//     reviewsCount,
//     location,
//     description,
//     onApply,
// }) => {
//     return (
//         <div className={styles.card}>
//             <h3 className={styles.title}>{title}</h3>
//             {/* Блок зарплаты */}
//             <div className={styles.salaryRow}>
//                 <span className={styles.salaryAmount}>{salaryAmount}</span>
//                 {salaryComment && <span className={styles.salaryComment}> {salaryComment}</span>}
//             </div>
//             {/* Теги (опыт, удаленка) */}
//             <div className={styles.tagsContainer}>
//                 {tags.map((tag, index) => (
//                     <span key={index} className={styles.tag}>
//                         {tag}
//                     </span>
//                 ))}
//             </div>
//             {/* Компания */}
//             <div className={styles.companyRow}>
//                 <span className={styles.companyName}>{companyName}</span>
//                 {/* Иконка верификации (синяя галочка) */}
//                 <VerificationIcon className={styles.verifiedIcon} />
//             </div>
//             {/* Рейтинг */}
//             <div className={styles.ratingRow}>
//                 <span className={styles.star}>★</span>
//                 <span className={styles.ratingValue}>{rating}</span>
//                 <span className={styles.dot}>•</span>
//                 <span className={styles.reviewsCount}>{reviewsCount} отзывов</span>
//             </div>
//             <div className={styles.location}>{location}</div>
//             {/* Описание (параграфы) */}
//             <div className={styles.description}>
//                 {description.map((text, idx) => (
//                     <p key={idx}>{text}</p>
//                 ))}
//             </div>
//             <Button color="red" size="sm" onClick={onApply}>
//                 Откликнуться
//             </Button>
//         </div>
//     );
// };
import React from 'react';

import { VerificationIcon } from '../../assets/icons/VerificationIcon';
import { Button } from '../../shared/ui';

// import styles from './VacancyCardDetailed.module.css'; // Удаляем

interface VacancyCardDetailedProps {
    title: string;
    salaryAmount?: string;
    salaryComment?: string;
    tags: string[];
    companyName: string;
    rating: number;
    reviewsCount: number;
    location: string;
    description: string[];
    onApply?: () => void;
}

export const VacancyCardDetailed: React.FC<VacancyCardDetailedProps> = ({
    title,
    salaryAmount,
    salaryComment,
    tags,
    companyName,
    rating,
    reviewsCount,
    location,
    description,
    onApply,
}) => {
    return (
        <div className="bg-white rounded-lg py-5 px-4 max-w-[350px] w-full box-border">
            <h3 className="font-semibold text-lg text-dark mb-2">{title}</h3>

            <div className="mb-4 text-[15px]">
                <span className="text-green font-semibold text-md">{salaryAmount}</span>

                {salaryComment && <span className="text-dark font-light text-sm"> {salaryComment}</span>}
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
                {description.map((text, idx) => (
                    <p key={idx} className="mb-3 last:mb-0">
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
