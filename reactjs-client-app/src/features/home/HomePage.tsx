import { Container, Segment, Header, Icon } from "semantic-ui-react";

export default function HomePage() {
    return (
        <Container>
            <Segment
                textAlign="center"
                vertical
            >
                <Header
                    as="h1"
                    icon
                >
                    <Icon name="home" />
                    Welcome to the Home Page
                </Header>
            </Segment>
        </Container>
    );
}
