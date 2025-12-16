import aboutData from '../content/about.json';

const AboutSection = () => {
    const [firstParagraph, ...otherParagraphs] = aboutData.text;

    return (
        <section className="max-w-[390px] bg-gray-50 p-5">
            <h2 className="text-3xl font-bold mb-4">{aboutData.title}</h2>

            <div className="bg-white rounded-lg shadow-md p-5 w-full">
                <div className="flex items-start mb-4">
                    <p className="text-gray-700  flex-1">{firstParagraph}</p>

                    <div className="flex-shrink-0 -mr-5 -mt-5">
                        <img src={aboutData.image} alt="О нас" width={158} height={128} className="rounded-md shadow-sm flex-shrink-o" />
                    </div>
                </div>

                {otherParagraphs.map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700">
                        {paragraph}
                    </p>
                ))}
            </div>
        </section>
    );
};

export default AboutSection;
