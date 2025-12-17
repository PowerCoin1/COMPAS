import { Button } from '../../shared/ui';

interface InternshipCardProps {
    title: string;
    stipend?: string; // вместо income
    employmentType: string;
    contractType: string;
    schedule: string;
    workHours: string;
    workFormat: string;
    tags?: string[];
    onDetails?: () => void;
}

const InfoRow = ({ label, value }: { label: string; value: string }) => (
    <div className="text-sm font-light text-dark">
        <span className="font-normal">{label}: </span>
        <span>{value}</span>
    </div>
);

export const InternshipCard: React.FC<InternshipCardProps> = ({
    title,
    stipend = 'не указана',
    employmentType,
    contractType,
    schedule,
    workHours,
    workFormat,
    tags,
    onDetails,
}) => {
    return (
        <article className="bg-white rounded-lg py-5 px-4 max-w-[350px] w-full">
            <h3 className="font-semibold text-lg text-dark mb-2">{title}</h3>

            <div className="flex flex-col gap-2 mb-4">
                <InfoRow label="Стипендия" value={stipend} />
                <InfoRow label="Занятость" value={employmentType} />
                <InfoRow label="Оформление" value={contractType} />
                <InfoRow label="График" value={schedule} />
                <InfoRow label="Рабочие часы" value={workHours} />
                <InfoRow label="Формат работы" value={workFormat} />
            </div>

            {tags && tags.length > 0 && (
                <div className="flex gap-2 mb-4 flex-wrap">
                    {tags.map((tag, idx) => (
                        <span key={idx} className="bg-lavender text-dark rounded-xs py-1 px-2 text-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            <Button color="red" size="sm" onClick={onDetails}>
                Подробнее
            </Button>
        </article>
    );
};
