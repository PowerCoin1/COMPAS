import ProfilePreviewImg from '../../assets/images/ProfilePreviewImg.webp';
import { Button } from '../../shared/ui';
import { Input } from '../../shared/ui/Input/Input';

export const ProfileForm = () => {
    return (
        <form className="max-w-[390px] mx-auto bg-white p-4">
            <div className="flex gap-4 mb-6">
                <div className="w-[110px] h-[140px] shrink-0  rounded-md overflow-hidden relative flex items-end justify-center">
                    <img src={ProfilePreviewImg} alt="Место для фото" />
                </div>

                {/* Колонка с инпутами (Имя, Фамилия, Отчество) */}
                <div className="flex flex-col justify-between w-full gap-2 font-normal text-sm">
                    <Input placeholder="Имя" className="bg-white" />
                    <Input placeholder="Фамилия" className="bg-white" />
                    <Input placeholder="Отчество" className="bg-white" />
                </div>
            </div>

            <h3 className="text-xl font-semibold text-dark mb-4">Контактные данные</h3>

            <div className="flex flex-col gap-4 mb-12 font-normal text-sm">
                <Input label="Номер телефона" placeholder="+7 ....." type="tel" />
                <Input label="Почта" placeholder=".....@mail.ru" type="email" />
            </div>

            <div className="flex flex-col gap-3">
                <Button color="red" size="sm">
                    Сохранить
                </Button>
                <Button color="darkPurple" size="sm">
                    Изменить
                </Button>
            </div>
        </form>
    );
};
