import { Button } from '../../shared/ui';

interface CardProps {
    title: string;
    university: string;
    specialization: string;
    workman: string;
    Duration: string;
    onClick?: () => void;
}

export function CardTraining({ title, university, specialization, workman, Duration, onClick }: CardProps) {
    return (
        <div className="bg-white rounded-lg py-5 px-4 w-full border border-secondary">
            <h3 className="">{title}</h3>
            <div className="flex flex-col gap-2 mt-2 text-sm">
                <p className="text-dark">
                    Университет: <span className="font-light">{university}</span>
                </p>
                <p className="text-dark">
                    Специальность: <span className="font-light">{specialization}</span>
                </p>
                <p className="text-dark">
                    Работадатель: <span className="font-light">{workman}</span>
                </p>
                <p className="text-dark">
                    Срок обучения: <span className="font-light">{Duration}</span>
                </p>
            </div>
            <div className="mt-4">
                <Button onClick={onClick}>Откликнуться</Button>
            </div>
        </div>
    );
}
