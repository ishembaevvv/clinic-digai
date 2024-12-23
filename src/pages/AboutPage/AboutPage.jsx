import { AboutContent } from "@modules/AboutModule/components/AboutContent/AboutContent";
import { License } from "@modules/AboutModule/components/License/License";
import { Breadcrumb } from "@ui/Breadcrumb/Breadcrumb";
import { Container } from "@ui/Container/Container";

export const AboutPage = () => {
    return (
        <Container>
            <Breadcrumb />
            <AboutContent />
            <License />
        </Container>
    );
};
