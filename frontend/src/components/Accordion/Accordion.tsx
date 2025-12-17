import React, { useState } from 'react';

import { MinusIcon } from '../../assets/icons/MinusIcon';
import { PlusIcon } from '../../assets/icons/PlusIcon';
import { Button } from '../../shared/ui';

import accordionData from './data.json';

interface AccordionItemData {
    question: string;
    answer: string;
}

export const Accordion: React.FC = () => {
    const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenItemIndex(openItemIndex === index ? null : index);
    };

    return (
        <div className="max-w-87.5  flex flex-col gap-2">
            <h2 className="text-xl font-bold mb-2 mt-4 pl-4">
                Вопрос — <span className="text-bright-purple">ответ</span>
            </h2>

            <div className="border border-secondary rounded-lg px-4 pb-4 max-w-87.5 bg-white">
                <div>
                    {(accordionData as AccordionItemData[]).map((item, index) => {
                        const isOpen = openItemIndex === index;

                        return (
                            <div key={index} className="border-b last:border-b-0 border-gray-200 ">
                                <div className="flex justify-between items-center  cursor-pointer py-4" onClick={() => toggleItem(index)}>
                                    <h4 className="font-semibold text-sm">{item.question}</h4>

                                    <span className="text-2xl font-light text-red transition-transform duration-300">
                                        {isOpen ? <MinusIcon /> : <PlusIcon />}
                                    </span>
                                </div>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                                >
                                    <p className="py-4  whitespace-pre-line max-w-79.5 p5">{item.answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <Button color="darkPurple" size="sm">
                    Все вопросы
                </Button>
            </div>
        </div>
    );
};
