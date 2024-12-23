import { SpecialistsContent } from "@modules/SpecialistsModule/components/SpecialistsContent";
import { Breadcrumb } from "@ui/Breadcrumb/Breadcrumb";
import { Container } from "@ui/Container/Container";

export const SpecialistsPage = () => {
    return (
        <Container>
            <Breadcrumb />
            <SpecialistsContent />
        </Container>
    );
};
