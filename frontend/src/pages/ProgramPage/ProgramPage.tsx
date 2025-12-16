import { CardTraining } from '../../components/CardTraining/CardTraining';

import programData from './programData.json';

export function ProgramPage() {
    return (
        <div className="min-h-screen bg-primary mb-4">
            <div className="flex flex-col gap-4">
                {programData.map((program, index) => (
                    <CardTraining
                        key={index}
                        title={program.title}
                        university={program.university}
                        specialization={program.specialization}
                        workman={program.workman}
                        Duration={program.duration}
                    />
                ))}
            </div>
        </div>
    );
}
