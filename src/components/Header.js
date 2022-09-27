// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Header(props) {
  let { title, searchBar } = props;
  let navItemStyle={
    fontSize:"1.15em",
    color:"black",
    textDecoration:"none",
    margin:"auto 15px"
  }
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="px-5">
      <Navbar.Brand href="#home">{title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Link to="/">
            <div style={navItemStyle}>Home</div>
          </Link>
          <Link to="/about">
            <div style={navItemStyle}>About</div>
          </Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
        </Nav>
        {searchBar ? (
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        ) : null}
      </Navbar.Collapse>
    </Navbar>
  );
}

Header.defaultProps = {
  title:"Default Title",
  searchBar:true
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchBar: PropTypes.bool
};

export default Header;
