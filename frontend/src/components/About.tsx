import aboutData from '../content/about.json';

const AboutSection = () => {
    const [firstParagraph, ...otherParagraphs] = aboutData.text;

    return (
        <section className=" bg-gray-50">
            <h2 style={{ fontSize: 'var(--text-xl)' }} className="font-bold h2 mb-4 m-6">
                {aboutData.title}
            </h2>

            <div className="border border-gray-100 p-3 bg-white rounded-lg w-full">
                <div className="flex items-start mb-3">
                    <p className="text-gray-700  flex-1 p5">{firstParagraph}</p>

                    <div
                        className="shrink-0 -mr-3 -mt-3 w-39.5 h-32 rounded-tr-lg bg-cover bg-top"
                        style={{ backgroundImage: `url(${aboutData.image})` }}
                    ></div>
                </div>

                {otherParagraphs.map((paragraph, index) => (
                    <p key={index} className="mb-4 p5 text-gray-700">
                        {paragraph}
                    </p>
                ))}
            </div>
        </section>
    );
};

export default AboutSection;
