import { NewsBlock } from "@modules/MainModule/NewsBlock/components/NewsBlock";
import { NewsOpenContent } from "@modules/NewsOpenModule/NewsOpenContent";
import { Breadcrumb } from "@ui/Breadcrumb/Breadcrumb";
import { Container } from "@ui/Container/Container";

export const NewsOpenPage = () => {
    return (
        <div>
            <Container>
                <Breadcrumb title="news" />
                <NewsOpenContent />
            </Container>
            <NewsBlock />
        </div>
    );
};
