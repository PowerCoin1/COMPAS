import { Button } from '../../shared/ui';

interface CardProps {
    title: string;
    tag: string;
    durationText: string;
    document: string;
    onClick?: () => void;
}

export function AssistanceCard({ title, tag, durationText, document, onClick }: CardProps) {
    return (
        <div className="bg-white rounded-lg py-5 px-4 w-full border border-secondary">
            <h3>{title}</h3>
            <div className="flex flex-col gap-2 mt-2 text-sm">
                <div className="py-1 px-1.5 rounded-xs bg-lavender text-xsm font-light w-fit">{tag}</div>

                <p>
                    Срок оказания услуги: <span className="font-light">{durationText}</span>
                </p>
                <p>
                    Документы для подачи заявления: <span className="font-light">{document}</span>
                </p>
            </div>
            <div className="mt-4">
                <Button onClick={onClick}>Откликнуться</Button>
            </div>
        </div>
    );
}
