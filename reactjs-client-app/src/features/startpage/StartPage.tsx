import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Container, Header, Segment, Image, Button } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import LoginForm from "../users/LoginForm";
import RegisterForm from "../users/RegisterForm";

// eslint-disable-next-line react-refresh/only-export-components
export default observer(function StartPage() {
    const { modalStore, userStore } = useStore();

    return (
        <Segment
            inverted
            textAlign="center"
            vertical
            className="masthead"
        >
            <Container text>
                <Header
                    as="h1"
                    inverted
                >
                    <Image
                        size="massive"
                        src="/assets/logo.png"
                        alt="logo"
                        style={{ marginBottom: 12 }}
                    />
                    Brand Logo
                </Header>
                {userStore.isLoggedIn ? (
                    <>
                        <Header
                            as="h2"
                            inverted
                            content="Welcome to App"
                        />
                        <Button
                            as={Link}
                            to="/home"
                            size="huge"
                            inverted
                        >
                            Go to Home Page
                        </Button>
                    </>
                ) : (
                    <>
                        <Button
                            onClick={() => modalStore.openModal(<LoginForm />)}
                            size="huge"
                            inverted
                        >
                            Login
                        </Button>
                        <Button
                            onClick={() => modalStore.openModal(<RegisterForm />)}
                            size="huge"
                            inverted
                        >
                            Register
                        </Button>
                    </>
                )}
            </Container>
        </Segment>
    );
});
