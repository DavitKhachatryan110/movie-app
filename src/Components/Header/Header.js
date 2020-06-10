import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown
} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";

const styles = {
    Navbar: {
        backgroundColor: "#143D59",
    },
    colorW: {
        color: "white"
    },
    icon: {
        color: "#F4B41A"
    }
};

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        axios('https://api.themoviedb.org/3/genre/movie/list?api_key=e2bdf1adf27f9d4d32f149f3274aa754&language=en-US')
            .then(response => {
                setGenres(response.data.genres);

            })
            .catch((error) => {
                console.log(error)
            })
    },[])

    const toggle = () => setIsOpen(!isOpen);

    function onMouseEnter() {
        setDropdownOpen(true);
    }

    function onMouseEnter2() {
        setDropdownOpen2(true);
    }

    function onMouseLeave() {
        setDropdownOpen(false);
    }

    function onMouseLeave2() {
        setDropdownOpen2(false);
    }

    return (
        <div>
            <Navbar style={styles.Navbar} light expand="md">
                <NavbarBrand href="/" style={styles.colorW}>reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto mr-auto" navbar>

                        <Dropdown nav inNavbar onMouseOver={onMouseEnter}
                                  onMouseLeave={onMouseLeave}
                                  isOpen={dropdownOpen}
                                  toggle={toggle}>
                            <DropdownToggle nav style={styles.colorW}>
                                Movies
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem header>
                                    Genres
                                </DropdownItem>
                                {genres.map(data => (
                                    <DropdownItem key={data.id}>
                                        {data.name}
                                    </DropdownItem>
                                ))}
                                <DropdownItem divider />
                                <DropdownItem>
                                    Collections
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <UncontrolledDropdown nav inNavbar onMouseOver={onMouseEnter2}
                                              onMouseLeave={onMouseLeave2}
                                              isOpen={dropdownOpen2}
                                              toggle={toggle}>
                            <DropdownToggle nav  style={styles.colorW}>
                                Cinema
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Moscow Cinema
                                </DropdownItem>
                                <DropdownItem>
                                    Nairi Theatre
                                </DropdownItem>
                                <DropdownItem>
                                    Cinema Star
                                </DropdownItem>
                                <DropdownItem>
                                    Kino Armenia
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <NavItem>
                            <NavLink style={styles.colorW}>About</NavLink>
                        </NavItem>
                    </Nav>
                    <FontAwesomeIcon icon={faUserCircle} style={styles.icon} size="2x" className="mr-3"/>
                    <FontAwesomeIcon icon={faSignOutAlt} style={styles.icon} size="2x" className="mr-3"/>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;