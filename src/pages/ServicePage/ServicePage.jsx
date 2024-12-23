import { ServiceContent } from "@modules/ServiceModule/components/ServiceContent";
import { Breadcrumb } from "@ui/Breadcrumb/Breadcrumb";
import { Container } from "@ui/Container/Container";

export const ServicePage = () => {
    return (
        <Container>
            <Breadcrumb />
            <ServiceContent />
        </Container>
    );
};
