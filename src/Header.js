import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { useGlobalContext } from "./context";
import { signout } from "./Actions/userAction";
import slicedApple from "./images/sliced_apple.svg";
import shoppingbag from "./images/shoppingbag.svg";

import { FaUser } from "react-icons/fa";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import CartScreen from "./Screens/CartScreen";
import SigninScreen from "./Screens/SigninScreen";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ShippingAddressScreen from "./Screens/ShippingAddressSreen";
import PaymentMethodScreen from "./Screens/PaymentMethodScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import OrderScreen from "./Screens/OrderScreen";
import { Text, Row, Col, Div, Dropdown, Image } from "atomize";
import OrdenHistoryScreen from "./Screens/OrdenHistoryScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import PrivateRoute from "./Component/PrivateRoute";
import AdminRoute from "./Component/AdminRoute";
import SellerRoute from "./Component/SellerRoute";
import * as FaIcons from "react-icons/all";
import { RiDashboardFill, RiProductHuntFill } from "react-icons/ri";
import { AiOutlineOrderedList } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import ProductListScreen from "./Screens/ProductListScreen";
import ProductEditScreen from './Screens/ProductEditScreen';
import OrderListScreen from "./Screens/OrderListScreen";
import UserListScreen from "./Screens/UserListScreen";
import UserEditScreen from "./Screens/UserEditScreen";
import SellerScreen from "./Screens/SellerScreen";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    flexGrow: 1,
    zIndex: "10000",
  },
  appBarTransparent: {
    backgroundColor: "#fff",
    transition: "all 0.6s ease",
  },
  appBarSolid: {
    backgroundColor: "#fff",
    transition: "all 0.6s ease",
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Header = (props) => {
  const classes = useStyles();
  const [navBackground, setNavBackground] = useState("appBarTransparent");
  const [colorChange, setColorchange] = useState(false);
  const navRef = React.useRef();
  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 391;
      if (show) {
        setNavBackground("appBarSolid");
      } else {
        setNavBackground("appBarTransparent");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 391) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  const { closeSubmenu } = useGlobalContext();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  const menuList = (
    <Div p={{ x: "1rem", y: "0.5rem" }} w="18rem">
      <Link to="/profile" d="flex">
        <Text
          tag="h1"
          textSize="subheader"
          textColor="pantano"
          hoverTextColor="prado"
          m={{y:'1rem'}}
        >
          <Text tag="span">
            <FaIcons.FaUserAlt />
          </Text>{" "}
          Perfil usuario
        </Text>
      </Link>
      <Link to="/OrderHistory">
        <Text
          tag="h1"
          textSize="subheader"
          textColor="pantano"
          hoverTextColor="prado"
          m={{y:'1rem'}}
        >
          <Text tag="span" p=".1rem">
            <FaIcons.FaHistory />
          </Text>{" "}
          Historial
        </Text>
      </Link>
      <Link to="#signout" onClick={signoutHandler}>
        <Text
          tag="h1"
          textSize="subheader"
          textColor="pantano"
          hoverTextColor="prado"
          m={{y:'1rem'}}
        >
          <Text tag="span" p=".1rem">
            <FaIcons.FaDoorClosed />
          </Text>{" "}
          Cerrar
        </Text>
      </Link>
    </Div>
  );
  const adminPanel = (
    <Div p={{ x: "1rem", y: "0.5rem" }} w="18rem">
      <Link to="/dashboard" d="flex">
        <Text
          tag="h1"
          textSize="subheader"
          textColor="pantano"
          hoverTextColor="prado"
          m={{y:'1rem'}}
        >
          <Text tag="span">
            <RiDashboardFill />
          </Text>{" "}
          Dashboard
        </Text>
      </Link>
      <Link to="/productlist">
        <Text
          tag="h1"
          textSize="subheader"
          textColor="pantano"
          hoverTextColor="prado"
          m={{y:'1rem'}}
        >
          <Text tag="span" p=".1rem">
            <RiProductHuntFill />
          </Text>{" "}
          Productos
        </Text>
      </Link>
      <Link to="/orderlist">
        <Text
          tag="h1"
          textSize="subheader"
          textColor="pantano"
          hoverTextColor="prado"
          m={{y:'1rem'}}
        >
          <Text tag="span" p=".1rem">
            <AiOutlineOrderedList />
          </Text>{" "}
          Órdenes
        </Text>
      </Link>
      <Link to="/userlist">
        <Text
          tag="h1"
          textSize="subheader"
          textColor="pantano"
          hoverTextColor="prado"
          m={{y:'1rem'}}
        >
          <Text tag="span" p=".1rem">
            <FiUsers />
          </Text>{" "}
          Usuarios
        </Text>
      </Link>
    </Div>
  );

  return (
    <BrowserRouter>
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar
            position="fixed"
            className={classes[navRef.current]}
            elevation={0}
          >
            <section onMouseOver={closeSubmenu}>
              <Div>
                <div className="toolbar-nav">
                  <div className="nav__">
                    <input type="checkbox" id="nav-check" />
                    <div class="nav-btn__">
                      <label for="nav-check__">
                        <span></span>
                        <span></span>
                        <span></span>
                      </label>
                    </div>

                    <div class="nav-links__">
                      <Div>
                        <Row>
                          <Col size={{ xs: 6 }} p={{ t: ".5rem" }}>
                            <Div d="flex" justify="flex-start">
                              <Link to="/">
                                <Text
                                  tag="h1"
                                  textSize="subheader"
                                  textColor="pantano"
                                  bg="white"
                                  hoverTextColor="prado"
                                  p={{
                                    x: "2rem",
                                    y: ".7rem",
                                  }}
                                  m={{
                                    l: "1.5rem",
                                  }}
                                  rounded="md"
                                >
                                  Contacto
                                </Text>
                              </Link>
                              <Link to="/">
                                <Text
                                  tag="h1"
                                  textSize="subheader"
                                  textColor="pantano"
                                  bg="white"
                                  hoverTextColor="prado"
                                  p={{
                                    x: "2rem",
                                    y: ".7rem",
                                  }}
                                  rounded="md"
                                >
                                  Nosotros
                                </Text>
                              </Link>
                              <Link to="/">
                                <Text
                                  tag="h1"
                                  textSize="subheader"
                                  textColor="pantano"
                                  bg="white"
                                  hoverTextColor="prado"
                                  p={{
                                    x: "2rem",
                                    y: ".7rem",
                                  }}
                                  rounded="md"
                                  textDecor="none"
                                >
                                  Blog
                                </Text>
                              </Link>
                            </Div>
                          </Col>
                          <Col size={{ xs: 6 }} p={{ t: ".5rem" }}>
                            <Div d="flex" justify="flex-end">
                              <Div>
                                <Link to="/cart">
                                  <Image
                                    src={shoppingbag}
                                    alt="shoppingbag"
                                    w="4.5rem"
                                  />
                                  {cartItems.length > 0 && (
                                    <div className="badge__">
                                      {cartItems.length}
                                    </div>
                                  )}
                                </Link>
                              </Div>
                              {userInfo ? (
                                <Div
                                  className="dropdown"
                                  d="flex"
                                  align="center"
                                  p={{
                                    l: "2rem",
                                    r: "1rem",
                                  }}
                                >
                                  <Link to="#">
                                    <Dropdown
                                      targetHover
                                      menu={menuList}
                                      p={{ y: "2rem", x: "2.5rem" }}
                                      direction="bottomright"
                                      textSize="subheader"
                                      textWeight="600"
                                      textColor="pantano"
                                      bg="white"
                                    >
                                      {userInfo.name}
                                    </Dropdown>
                                  </Link>
                                </Div>
                              ) : (
                                <Div
                                  p={{
                                    x: "5rem",
                                  }}
                                >
                                  <Link className="btn signin-btn" to="/signin">
                                    <Text
                                      style={{
                                        fontSize: "3.2rem",
                                        position: "relative",
                                        top: "-5px"
                                      }}
                                      className={
                                        colorChange
                                          ? "navbarColor colorChange"
                                          : "navbarColor"
                                      }
                                    >
                                      <FaUser />
                                    </Text>
                                  </Link>
                                  {userInfo && userInfo.isSeller && (
                                  <div className="dropdown">
                                    <Link to="#admin">
                                      Seller <i className="fa fa-caret-down"></i>
                                    </Link>
                                    <ul className="dropdown-content">
                                      <li>
                                        <Link to="/productlist/seller">Products</Link>
                                      </li>
                                      <li>
                                        <Link to="/orderlist/seller">Orders</Link>
                                      </li>
                                    </ul>
                                  </div>
                                )}
                                </Div>
                              )}
                              {userInfo && userInfo.isAdmin && (
                                <Div
                                  className="dropdown"
                                  d="flex"
                                  align="center"
                                  p={{
                                    r: '3rem',
                                    y: '.5rem'}}
                                >
                                  <Link to="#">
                                    <Dropdown
                                      targetHover
                                      menu={adminPanel}
                                      p={{ x: "2.5rem", y: "2rem" }}
                                      direction="bottomright"
                                      textSize="subheader"
                                      textWeight="600"
                                      textColor="pantano"
                                      bg="white"
                                    >
                                      Admin Panel
                                    </Dropdown>
                                  </Link>
                                </Div>
                              )}
                            </Div>
                          </Col>
                        </Row>
                      </Div>
                    </div>
                  </div>
                </div>
              </Div>
              <Div className="brandCenter" p={{ y: ".7rem" }}>
                <Link to="/">
                  <Text
                    tag="h1"
                    textSize="subheader"
                    d="flex"
                    className={
                      colorChange ? "navbarColor colorChange" : "navbarColor"
                    }
                  >
                    <img
                      src={slicedApple}
                      alt="slicedApple"
                      style={{ width: "6rem", margin: "0 1rem" }}
                    />
                  </Text>
                </Link>
              </Div>
            </section>
          </AppBar>
        </div>
        <Toolbar id="back-to-top-anchor" />
        <ScrollTop {...props}>
          <Fab
            style={{
              backgroundColor: "#5BA616",
              color: "#fff",
            }}
            size="small"
            aria-label="scroll back to top"
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>

        <>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/seller/:id" component={SellerScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrdenHistoryScreen}></Route>
          <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
            exact
          ></AdminRoute>
          <AdminRoute 
            path="/userlist" 
            component={UserListScreen}>
          </AdminRoute>
          <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>
            <SellerRoute
            path="/productlist/seller"
            component={ProductListScreen}
          ></SellerRoute>
          <SellerRoute
            path="/orderlist/seller"
            component={OrderListScreen}
          ></SellerRoute>
          <Route path="/" component={HomeScreen} exact></Route>
        </>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default Header;
