import aboutData from '../content/about.json';

const AboutSection = () => {
    const [firstParagraph, ...otherParagraphs] = aboutData.text;

    return (
        <section className=" bg-gray-50 p-5">
            <h2 className="text-3xl font-bold mb-4">{aboutData.title}</h2>

            <div className="border border-gray-100 p-3 bg-white rounded-lg w-full">
                <div className="flex items-start mb-3">
                    <p className="text-gray-700  flex-1">{firstParagraph}</p>

                    <div className="shrink-0 -mr-3 -mt-3">
                        <img src={aboutData.image} alt="О нас" width={158} height={128} className="rounded-tr-lg" />
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
