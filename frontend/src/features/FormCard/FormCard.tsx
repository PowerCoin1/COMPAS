import { Link } from 'react-router-dom';

import { Button } from '../../shared/ui';
import { Checkbox } from '../../shared/ui/Checkbox/Checkbox';
import { Input } from '../../shared/ui/Input/Input';

export function FormCard() {
    return (
        <div className="bg-white rounded-lg py-5 px-4 w-full border border-secondary mt-3">
            <div className="flex flex-col items-center gap-3">
                <h2>
                    <span className="text-bright-purple">Форма</span> обратной связи
                </h2>
                <form className="flex flex-col gap-3.5 w-full">
                    <Input type="text" placeholder="Имя" />
                    <Input type="email" placeholder="Почта" />
                    <Input typeInpArea="textarea" placeholder="Сообщние" />
                    <div className="flex items-center gap-2.5">
                        <Checkbox />
                        <div className="text-sm  font-light">
                            Я соглашаюсь с{' '}
                            <Link to="/" className="text-blue font-normal">
                                Пользовательским соглашением
                            </Link>
                        </div>
                    </div>
                    <Button type="submit">Отправить</Button>
                </form>
            </div>
        </div>
    );
}
