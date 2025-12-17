import { VacancyCard } from '../../components/VacancyCard';
import { VacancyCardDetailed } from '../../components/VacancyCardDetailed';
import { SearchBar } from '../../shared/ui/SearchBar/SearchBar';

export const VacancyPage = () => {
    return (
        <div className="min-h-screen bg-primary mb-4">
            <div className="flex flex-col gap-4">
                <SearchBar />
                <VacancyCard
                    title="Финансовый консультант"
                    income="не указан"
                    employmentType="частичная"
                    contractType="Договор ГПХ с самозанятым, с ИП, с физлицом"
                    schedule="свободный"
                    workHours="2, 3, 4 или 5"
                    workFormat="на месте работодателя, удалённо или гибрид"
                />
                <h2 className="text-xl font-bold mb-2 mt-4 pl-4">
                    Похожие <span className="text-bright-purple">вакансии</span>
                </h2>
                <VacancyCardDetailed
                    title="Финансовый менеджер"
                    salaryAmount="50 000 - 60 000 ₽"
                    salaryComment="за месяц, до вычета налогов"
                    tags={['Опыт 1-3 года', 'Можно удалённо']}
                    companyName="KRAKATAU"
                    rating={4.5}
                    reviewsCount={10}
                    location="Санкт-Петербург"
                    description={[
                        'Заполнение отчетов УУ (главных и вспомогательных). Коммуникация с сотрудниками компании для получения данных для УУ.',
                        'Знание гугл таблиц (в т.ч. сложных формул), возможно специфических программ у клиента (1С, План-факт и т.д.).',
                    ]}
                    onApply={() => alert('Отклик отправлен!')}
                />
                <VacancyCardDetailed
                    title="Казначей"
                    tags={['Опыт 1-3 года', 'На месте работодателя']}
                    companyName="Аптека №1"
                    rating={4.7}
                    reviewsCount={6}
                    location="Белгород"
                    description={[
                        'Сопровождение расчетно-кассового обслуживания группы торговых компаний',
                        'Проверка выполненных объемов работ нормативно технической документации;контроль выполнения работ на объекте',
                        'Проведение банковских выписок в учетных и бухгалтерских системах',
                    ]}
                    onApply={() => alert('Отклик отправлен!')}
                />
            </div>
        </div>
    );
};
