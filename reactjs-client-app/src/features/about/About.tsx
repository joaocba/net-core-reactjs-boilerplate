import { Container, Segment, Header, Icon } from "semantic-ui-react";

export default function About() {
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
                    <Icon name="info" />
                    About Us
                </Header>
            </Segment>
        </Container>
    );
}
