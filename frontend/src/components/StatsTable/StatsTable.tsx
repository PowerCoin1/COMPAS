// import React from 'react';
// const TABLE_DATA = [
//     {
//         profession: 'Инженер-металлург',
//         salary: '85 000 – 120 000',
//         growth: '12%',
//         employers: 'ОЭМК, Лебединский ГОК',
//     },
//     {
//         profession: 'Агроном-технолог',
//         salary: '70 000 – 110 000',
//         growth: '15%',
//         employers: 'Агрохолдинги, фермерские хозяйства',
//     },
//     {
//         profession: 'Data-аналитик',
//         salary: '90 000 – 150 000',
//         growth: '28%',
//         employers: 'IT-компании, банки, ритейл, бизнес',
//     },
//     {
//         profession: 'Специалист по ИБ',
//         salary: '85 000 – 140 000',
//         growth: '23%',
//         employers: 'Банки, IT-сектор, промышленность',
//     },
//     {
//         profession: 'Frontend-разработчик',
//         salary: '80 000 – 150 000',
//         growth: '21%',
//         employers: 'IT-компании, стартапы',
//     },
// ];
// export const StatsTable = () => {
//     return (
//         // Обертка с белым фоном и скруглением
//         <div className="bg-white rounded-lg px-4 pt-5 w-full">
//             {/* Контейнер скролла */}
//             <div className="overflow-x-auto pb-2">
//                 {/* min-w-[600px] гарантирует, что таблица не сожмется меньше 600px
//                     и появится скролл на маленьких экранах */}
//                 <table className="w-full min-w-[480px] text-left border-collapse">
//                     {/* Заголовок таблицы */}
//                     <thead>
//                         <tr className="border-b border-gray-100">
//                             <th className="py-3 pr-4 font-medium text-sm text-dark align-top w-1/4">Профессия</th>
//                             <th className="py-3 pr-4 font-medium text-sm text-dark align-top w-1/4">
//                                 Средняя зарплата <br />
//                                 <span className="text-gray font-normal">(руб.)</span>
//                             </th>
//                             <th className="py-3 pr-4 font-medium text-sm text-dark align-top w-1/6">
//                                 Рост спроса <br />
//                                 <span className="text-gray font-normal">(% за год)</span>
//                             </th>
//                             <th className="py-3 font-medium text-sm text-dark align-top w-1/3">
//                                 Основные <br />
//                                 работодатели
//                             </th>
//                         </tr>
//                     </thead>
//                     {/* Тело таблицы */}
//                     <tbody className="text-sm">
//                         {TABLE_DATA.map((row, index) => (
//                             <tr key={index} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
//                                 <td className="py-4 pr-4 text-dark font-medium max-w-[76px]">{row.profession}</td>
//                                 <td className="py-4 pr-4 text-dark font-light">{row.salary}</td>
//                                 <td className="py-4 pr-4 text-dark font-light">{row.growth}</td>
//                                 <td className="py-4 text-gray font-light">{row.employers}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

const TABLE_DATA = [
    {
        profession: 'Инженер-металлург',
        salary: '85 000 – 120 000',
        growth: '12%',
        employers: 'ОЭМК, Лебединский ГОК',
    },
    {
        profession: 'Агроном-технолог',
        salary: '70 000 – 110 000',
        growth: '15%',
        employers: 'Агрохолдинги, фермерские хозяйства',
    },
    {
        profession: 'Data-аналитик',
        salary: '90 000 – 150 000',
        growth: '28%',
        employers: 'IT-компании, банки, ритейл, бизнес',
    },
    {
        profession: 'Специалист по ИБ',
        salary: '85 000 – 140 000',
        growth: '23%',
        employers: 'Банки, IT-сектор, промышленность',
    },
    {
        profession: 'Frontend-разработчик',
        salary: '80 000 – 150 000',
        growth: '21%',
        employers: 'IT-компании, стартапы',
    },
];

export const StatsTable = () => {
    return (
        <div className="bg-white rounded-lg px-4 pt-5 w-full">
            <div className="overflow-x-auto pb-2 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-light-purple [&::-webkit-scrollbar-thumb]:rounded-[20px]">
                <table className="w-full min-w-120 text-left border-collapse">
                    <thead>
                        <tr className="border-b border-bright-purple">
                            <th className="py-3 pr-2 font-medium text-sm text-dark align-top w-19">Профессия</th>
                            <th className="py-3 pr-4 font-medium text-sm text-dark align-top w-[120px]">
                                Средняя зарплата <br />
                                <span>(руб.)</span>
                            </th>
                            <th className="py-3 pr-4 font-medium text-sm text-dark align-top ">
                                Рост спроса <br />
                                <span>(% за год)</span>
                            </th>
                            <th className="py-3 font-medium text-sm text-dark align-top ">
                                Основные <br />
                                работодатели
                            </th>
                        </tr>
                    </thead>

                    <tbody className="text-sm">
                        {TABLE_DATA.map((row, index) => (
                            <tr key={index} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                                <td className="py-4 pr-2 text-dark font-medium wrap-break-word align-top">{row.profession}</td>
                                <td className="py-4 pr-4 text-dark font-light align-top">{row.salary}</td>
                                <td className="py-4 pr-4 text-dark font-light align-top">{row.growth}</td>
                                <td className="py-4 text-gray font-light align-top">{row.employers}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
