import { NewsContent } from "@modules/NewsModule/components/NewsContent";
import { Breadcrumb } from "@ui/Breadcrumb/Breadcrumb";
import { Container } from "@ui/Container/Container";

export const NewsPage = () => {
    return (
        <Container>
            <Breadcrumb />
            <NewsContent />
        </Container>
    );
};
