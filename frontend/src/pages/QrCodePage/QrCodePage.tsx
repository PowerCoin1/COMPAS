import { QRCodeSVG } from 'qrcode.react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import max from '../../assets/images/max.jpg';
import { Button } from '../../shared/ui';
import { Input } from '../../shared/ui/Input/Input';

export const QrCodePage = () => {
    const [timeLeft, setTimeLeft] = useState(119); // 1:59 in seconds

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timeDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    return (
        <div className="bg-white rounded-lg py-5 px-4 w-full border border-secondary mt-3 mb-3">
            <h3 className="text-center">
                Подтвердите вход <div className="pt-1">через мессенджер</div>{' '}
                <div className="pt-4 flex justify-center items-center gap-2">
                    <img src={max} alt="" className="w-6 h-6" />
                    <div> MAX</div>
                </div>
            </h3>
            <div className="text-center p4 max-w-63 pt-6 mx-auto leading-5">
                Для подключения этого способа подтверждения отсканируйте QR-код с телефона, на который хотите получать коды для входа
            </div>
            <div className="flex flex-col items-center">
                <QRCodeSVG value="https://react-my-web-site.vercel.app/" size={140} className="mx-auto mt-6" />
                <div className="mt-4 text-center">
                    <div className="mb-2">Срок действия кода</div> <b>{timeDisplay}</b>
                </div>
            </div>
            <div className="mt-3">
                <Input type="tel" label="Номер телефона" placeholder="+7...." />
            </div>
            <div className="mt-4 flex flex-col gap-3">
                <Link to="/loginpage">
                    <Button color="red">Узнать о мессенджере</Button>
                </Link>
                <Button color="darkPurple">Продолжить</Button>
            </div>
        </div>
    );
};
