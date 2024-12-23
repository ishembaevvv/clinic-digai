import { ServiceOpenContent } from "@modules/ServiceOpenModule/components/ServiceOpenContent";
import { Breadcrumb } from "@ui/Breadcrumb/Breadcrumb";
import { Container } from "@ui/Container/Container";
export const ServiceOpenPage = () => {
    return (
        <Container>
            <Breadcrumb />
            <ServiceOpenContent />
        </Container>
    );
};
