import { Button } from '../../shared/ui';
import { Input } from '../../shared/ui/Input/Input';

export const HomePage = () => {
    return (
        <div className="m-10 flex flex-col items-center gap-4 max-w-120">
            <h1>О нас</h1>

            <Button color="red" size="sm">
                Подробнее
            </Button>
            <Button color="darkPurple" size="md">
                Узнать о мессенджере
            </Button>
            <Input label="Ваш email" placeholder="Введите email" typeInpArea="input" />
            <Input label="Сообщение" placeholder="Введите сообщение" typeInpArea="textarea" />
        </div>
    );
};
