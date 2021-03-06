import React from "react";
import "./Navigation.css";
import { Badge, Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useFirebase from "../../Hooks/useFirebase";
import AddToCart from "../AddToCart/AddToCart";
import Categorys from "../../Home/Categorys/Categorys";

const hardIcon = <FontAwesomeIcon icon={faHeart} />;
const userIcon = <FontAwesomeIcon icon={faUserCircle} />;
const barsIcon = <FontAwesomeIcon icon={faBars} />;

const Navigation = () => {
  const { user, admin, logOut } = useFirebase();

  return (
    <div>
      {/* top navbar */}
      <Navbar collapseOnSelect expand="lg" style={{ background: "#ebebeb" }}>
        <Container>
          <Navbar.Brand as={Link} className="fw-bold" to="/home">
            <span style={{ color: "red" }}>T-52</span> Mobile Zone
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ borderRadius: "30px 0 0 30px", border: "1px solid #17d74a !important" }}
                  className="search_input"
                />
                <Button className="search_btn" style={{ borderRadius: "0 30px 30px 0" }} variant="outline-success">
                  Search
                </Button>
              </Form>
            </Nav>
            <Nav>
              {
                admin ?
                  <Nav.Link as={Link} to="/dashboard">
                    Dashboard
                  </Nav.Link>
                  :
                  <Nav.Link as={Link} eventKey={2} to="/account">
                    My Account
                  </Nav.Link>
              }


              <Nav.Link as={Link} eventKey={2} to="/cart">
                Cart
              </Nav.Link>
              <Nav.Link as={Link} eventKey={2} to="/checkout">
                Checkout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* main navbar */}
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ background: "#fef5ef", padding: "20px 0 0", boxShadow: "0 10px 40px 0px rgb(0 0 0 / 15%)" }}
      >
        <Container>
          <NavDropdown title={barsIcon} id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/brands-product/Apple">
              Apple
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/brands-product/Samsung">
              Samsung
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/brands-product/Huawei">
              Huawei
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/brands-product/Oppo">
              Oppo
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/brands-product/Vivo">
              Vivo
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/brands-product/Xiaomi">
              Xiaomi
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/brands-product/Realme">
              Realme
            </NavDropdown.Item>
          </NavDropdown>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto main_nav">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/shop">
                Shop
              </Nav.Link>

              <Nav.Link className="categoy_link" as={Link} to="/home">
                Category
                <div className="categoy_dropdown">
                  <Categorys></Categorys>
                </div>
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>

            </Nav>
            <Nav style={{ marginBottom: '11px' }}>
              <Nav.Link className="total_price">USD: $00.00</Nav.Link>
              <AddToCart></AddToCart>
              <Nav.Link className="nav_icon" href="#deets">
                {hardIcon}
                <Badge>8</Badge>
              </Nav.Link>

              {/* user */}
              <div id="user_box">
                <NavDropdown style={{ marginLeft: '1rem' }} title={userIcon} id="collasible-nav-dropdown">
                  <NavDropdown.Item>{user.displayName}</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/account">
                    My Account
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {user.email ? (
                      <Button onClick={logOut} className="btn_regular">
                        Log Out
                      </Button>
                    ) : (
                      <Link to="/login">
                        <Button className="btn_regular" color="inherit">
                          Login
                        </Button>
                      </Link>
                    )}
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div >
  );
};

export default Navigation;