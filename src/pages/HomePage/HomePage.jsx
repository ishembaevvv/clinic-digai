import {
    AboutBlock,
    MainBlock,
    NewsBlock,
    ResultsBlock,
    ServiceBlock,
    SpecialistsBlock,
} from "@modules/MainModule";

export const HomePage = () => {
    return (
        <div>
            <MainBlock />
            <AboutBlock />
            <SpecialistsBlock />
            <ResultsBlock />
            <ServiceBlock />
            <NewsBlock />
        </div>
    );
};
