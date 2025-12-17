import ImageSoldiers from '../../assets/images/soldiers.svg';
import { AssistanceCard } from '../../components/AssistanceCard/AssistanceCard';

import assistanceData from './assistanceData.json';

export function AssistancePage() {
    return (
        <div>
            <h2 className="mb-2">
                <span className="text-bright-purple">Содействие</span> в поиске работы
            </h2>

            <img src={ImageSoldiers} className="w-full h-60 object-cover rounded-md mb-3" />
            <div className="flex flex-col gap-4 mb-4">
                {assistanceData.map((assistance) => (
                    <AssistanceCard
                        key={assistance.id}
                        title={assistance.title}
                        tag={assistance.tag}
                        durationText={assistance.durationText}
                        document={assistance.document}
                    />
                ))}
            </div>
        </div>
    );
}
