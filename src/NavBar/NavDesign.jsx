// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function NavScrollExample() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container fluid>
//         <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="#action2">Link</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" disabled>
//               Link
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavScrollExample;


import React from 'react';
import { Nav, NavDropdown, NavLink, Navbar, NavbarBrand } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./NavDesign.css"
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import Help from '../Components/Contact/Help';
import SignUp from '../Components/Contact/Signup';
import Login from '../Components/Contact/Login';
import Home from '../Components/Home/Home';
import News from '../Components/News/News';
import Category from '../Components/Pages/Category';
import Playlists from '../Components/Pages/Playlists';
function NavDesign() {
    return (
        <div>
            
            <Router>
                <Navbar bg='dark' variant='dark' expand='lg'>
                    <div className='nav'>
                        <NavbarBrand><img src={require("./navlogo.png")}></img></NavbarBrand>
                            <NavbarToggle><img src={require("./menu.png")}></img>MENU</NavbarToggle>
                            <NavbarCollapse>
                                <div><Nav className='nav1'>
                                    <NavLink as={Link} to='/'>Home</NavLink>
                                    <NavLink as={Link} to='/about'>About</NavLink>
                                    <NavDropdown className='drop' title='Pages' id="basic-nav-dropdown">
                                        <NavDropdown.Item as={Link} to='/category'>Category</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to='/playlists'>Playlists</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to='/artist'>Artist</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to='/news'>Blog</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to='/contact'>Contact</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavLink as={Link} to='/news'>News</NavLink>
                                    <NavLink as={Link} to='/contact'>Contact</NavLink>
                                    </Nav></div>
                            </NavbarCollapse>
                            <Nav>
                                    <NavLink as={Link} to='/help'>Help</NavLink>
                                    <NavLink as={Link} to='/login'>Login</NavLink>
                                    <NavLink id='create' as={Link} to='/sign'>Create an account</NavLink>
                            </Nav>
                        </div>
                </Navbar>
                <Routes>
                    <Route path='/' element={<Home></Home>} ></Route>
                    <Route path='/about' element={<About></About>} ></Route>
                    <Route path='/news' element={<News></News>} ></Route>
                    <Route path='/category' element={<Category></Category>} ></Route>
                    <Route path='/playlists' element={<Playlists></Playlists>} ></Route>
                    <Route path='/artist' element={<About></About>} ></Route>
                    <Route path='/login' element={<Login></Login>} ></Route>
                    <Route path='/contact' element={<Contact></Contact>}></Route>
                    <Route path='/sign' element={<SignUp></SignUp>} ></Route>
                    <Route path='/help' element={<Help></Help>} ></Route>
                </Routes>
            </Router>
        </div>
    )
}
export default NavDesign;