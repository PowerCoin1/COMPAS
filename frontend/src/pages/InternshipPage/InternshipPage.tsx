import { InternshipCard } from '../../components/InternshipCard';
import { InternshipCardDetailed } from '../../components/InternshipCardDetailed';
import { SearchBar } from '../../shared/ui/SearchBar/SearchBar';

export const InternshipPage = () => {
    const filters = [
        'Менеджер по продажам недвижимости',
        'Товаровед магазина',
        'Технолог-стажер',
        'Пеший курьер',
        'Курьер',
        'Риелтор-стажер',
        'Ветеринарный врач',
        'Инженер-стажер',
    ];
    return (
        <div className="min-h-screen bg-primary mb-4">
            <div className="flex flex-col gap-4">
                <SearchBar />

                {/* Заголовок страницы */}
                <h2 className="h3 mt-2 px-1">
                    Работа стажером — вакансии в Белгородской области
                    <span className="h3 text-red ml-2">(87 вариантов)</span>
                </h2>

                {/* Фильтры прямо на странице */}
                <div className="flex flex-wrap justify-start gap-2 px-1">
                    {filters.map((filter, idx) => (
                        <button
                            key={idx}
                            className="bg-lavender text-dark rounded-xs py-1 px-2 text-sm hover:bg-bright-purple hover:text-white transition"
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Сортировка */}
                <div className="flex items-center gap-1 p5 text-gray px-1">
                    <span className="font-semibold">Сортировать по:</span>
                    <button className="px-2 hover:text-blue transition hover:underline">соответствию</button>
                    <span className="text-gray/40 mx-1">|</span>
                    <button className="hover:text-blue transition hover:underline">дате</button>
                    <span className="text-gray/40 mx-1">|</span>
                    <button className="hover:text-blue transition hover:underline">зарплате</button>
                </div>

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

                <InternshipCardDetailed
                    title="Агроном-стажер"
                    stipendAmount="договорная"
                    companyName="Магнит"
                    location="Старый Оскол"
                    responsibilities={['Организация и контроль процессов выращивания.', 'Обеспечение целевых показателей урожайности.']}
                    requirements={['Готовность учиться и внимательность.', 'Базовые знания агрономии будут плюсом.']}
                    benefits={['Наставничество от опытных специалистов.', 'Официальное оформление.', 'Корпоративные программы.']}
                    sourceUrl="https://rabota.magnit.ru"
                    onDetails={() => alert('Подробнее о стажировке')}
                    onApply={() => alert('Отклик отправлен!')}
                />

                <InternshipCardDetailed
                    title="Стажер технолога"
                    stipendAmount="от 35 000 ₽"
                    companyName="Белгранкорм"
                    location="Белгород"
                    responsibilities={['Стажировка в птицеводстве, свиноводстве и переработке.', 'Участие в производственных процессах.']}
                    requirements={['Высшее образование по технологии производства.', 'Желание развиваться в пищевой отрасли.']}
                    benefits={['Оплачиваемая стажировка.', 'Обучение на рабочем месте.', 'Перспектива трудоустройства.']}
                    sourceUrl="https://rabota.magnit.ru"
                    onDetails={() => alert('Подробнее о стажировке')}
                    onApply={() => alert('Отклик отправлен!')}
                />
            </div>
        </div>
    );
};
