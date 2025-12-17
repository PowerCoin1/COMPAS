import { InternshipCard } from '../../components/InternshipCard';
import { InternshipCardDetailed } from '../../components/IntershipCardDetails';
import { SearchBar } from '../../shared/ui/SearchBar/SearchBar';

export const InternshipPage = () => {
    return (
        <div className="min-h-screen bg-primary mb-4">
            <div className="flex flex-col gap-4">
                <SearchBar />

                <InternshipCard
                    title="Стажер в отдел закупок"
                    stipend="28 000 - 64 000 ₽"
                    employmentType="Полная занятость"
                    contractType="Трудовой договор"
                    schedule="5/2"
                    workHours="8"
                    workFormat="На месте работодателя"
                    onDetails={() => alert('Подробнее о стажировке')}
                />

                <h2 className="text-xl font-bold mb-2 mt-4 pl-4">
                    Похожие <span className="text-bright-purple">стажировки</span>
                </h2>

                <InternshipCardDetailed
                    title="Агроном-стажер"
                    stipendAmount="договорная"
                    tags={['Сельское хозяйство', 'Контроль урожайности']}
                    companyName="Магнит"
                    rating={4.2}
                    reviewsCount={8}
                    location="Старый Оскол"
                    responsibilities={['Организация и контроль процессов выращивания.', 'Обеспечение целевых показателей урожайности.']}
                    requirements={['Готовность учиться и внимательность.', 'Базовые знания агрономии будут плюсом.']}
                    benefits={['Наставничество от опытных специалистов.', 'Официальное оформление.', 'Корпоративные программы.']}
                    onApply={() => alert('Отклик отправлен!')}
                />

                <InternshipCardDetailed
                    title="Стажер технолога"
                    stipendAmount="от 35 000 ₽"
                    tags={['Пищевая промышленность', 'Высшее образование']}
                    companyName="Белгранкорм"
                    rating={4.6}
                    reviewsCount={5}
                    location="Белгород"
                    responsibilities={['Стажировка в птицеводстве, свиноводстве и переработке.', 'Участие в производственных процессах.']}
                    requirements={['Высшее образование по технологии производства.', 'Желание развиваться в пищевой отрасли.']}
                    benefits={['Оплачиваемая стажировка.', 'Обучение на рабочем месте.', 'Перспектива трудоустройства.']}
                    onApply={() => alert('Отклик отправлен!')}
                />
            </div>
        </div>
    );
};
