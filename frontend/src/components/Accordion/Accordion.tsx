import React, { useState } from 'react';

import { MinusIcon } from '../../assets/icons/MinusIcon';
import { PlusIcon } from '../../assets/icons/PlusIcon';

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
        <div className="max-w-[390px] mr-4 ml-4 flex flex-col gap-2">
            <h3 className="text-xl font-bold mb-2 pl-4">
                Вопрос — <span className="text-[#bb88eb] ">ответ</span>
            </h3>

            <div className="border border-[#eeebf4] rounded-lg px-4 pb-4 min-w-[350px]">
                {(accordionData as AccordionItemData[]).map((item, index) => {
                    const isOpen = openItemIndex === index;

                    return (
                        <div key={index} className="border-b last:border-b-0 border-gray-200">
                            <div className="flex justify-between items-center  cursor-pointer py-4" onClick={() => toggleItem(index)}>
                                <h4 className="font-semibold text-sm text-gray-800 ">{item.question}</h4>

                                <span className="text-2xl font-light text-[#ff3131] transition-transform duration-300">
                                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                                </span>
                            </div>

                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                                <p className="py-2 text-[#26222b] font-light text-xs whitespace-pre-line max-w-[318px] text-justify">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
