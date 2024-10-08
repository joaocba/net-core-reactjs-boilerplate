import { Container, Menu, Image, Dropdown } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

// eslint-disable-next-line react-refresh/only-export-components
export default observer(function NavBar() {
    const {
        userStore: { user, logout, isLoggedIn },
    } = useStore();
    return (
        <Menu
            inverted
            fixed="top"
        >
            <Container>
                <Menu.Item
                    as={NavLink}
                    to="/"
                    header
                >
                    <img
                        src="/assets/logo.png"
                        alt="logo"
                        style={{ marginRight: "10px" }}
                    />
                    Brand Logo
                </Menu.Item>
                {isLoggedIn && (
                    <>
                        <Menu.Item
                            as={NavLink}
                            to="/home"
                            name="Home"
                        />
                        <Menu.Item
                            as={NavLink}
                            to="/about"
                            name="About"
                        />
                        <Menu.Item position="right">
                            <Image
                                avatar
                                spaced="right"
                                src={user?.image || "/assets/user.png"}
                            />
                            <Dropdown
                                pointing="top left"
                                text={user?.displayName}
                            >
                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        as={Link}
                                        to={`/profiles/${user?.username}`}
                                        text="My Profile"
                                        icon="user"
                                    />
                                    <Dropdown.Item
                                        onClick={logout}
                                        text="Logout"
                                        icon="power"
                                    />
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Item>
                    </>
                )}
            </Container>
        </Menu>
    );
});
