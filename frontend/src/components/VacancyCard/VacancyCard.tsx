import { Button } from '../../shared/ui';

interface VacancyCardProps {
    title: string;
    income?: string;
    employmentType: string;
    contractType: string;
    schedule: string;
    workHours: string;
    workFormat: string;
    onApply?: () => void;
}

const InfoRow = ({ label, value }: { label: string; value: string }) => (
    <div className="text-sm font-light text-dark">
        <span className="font-normal">{label}: </span>

        <span>{value}</span>
    </div>
);

export const VacancyCard: React.FC<VacancyCardProps> = ({
    title,
    income = 'не указан',
    employmentType,
    contractType,
    schedule,
    workHours,
    workFormat,
    onApply,
}) => {
    return (
        <article className="bg-white rounded-lg py-5 px-4 max-w-[350px] w-full">
            <h3 className="font-semibold text-lg text-dark mb-2">{title}</h3>

            <div className="flex flex-col gap-2 mb-4">
                <InfoRow label="Уровень дохода" value={income} />
                <InfoRow label="Занятость" value={employmentType} />
                <InfoRow label="Оформление" value={contractType} />
                <InfoRow label="График" value={schedule} />
                <InfoRow label="Рабочие часы" value={workHours} />
                <InfoRow label="Формат работы" value={workFormat} />
            </div>

            <Button color="red" size="sm" onClick={onApply}>
                Откликнуться
            </Button>
        </article>
    );
};
