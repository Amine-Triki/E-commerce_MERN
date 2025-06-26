import React from "react";
import { useState, type JSX, type MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { NavLink, useNavigate } from "react-router-dom";
import AmineLogo from "../assets/4-157-71-68080953ce2d3.webp";
import { useAuth } from "../context/Auth/AuthContext";
import Button from "@mui/material/Button";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";

const pages: string[] = ["Home", "Projects", "Ecommerce", "Skills", "Contact"];

function Nav(): JSX.Element {
  const { username, isAuthenticated, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();

  const handlelogin = () => {
    navigate("/login");
  };

  const heandlelogout = () => {
    logout();
    handleClose();
    navigate("/Ecommerce");
  };

  const handleCart = () => {
    navigate("/cart");
  };
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(to right,#16B4F2, #ffffff)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Amine Triki
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <NavLink
                    to={
                      page.toLowerCase() === "home"
                        ? "/"
                        : `/${page.toLowerCase()}`
                    }
                    style={({ isActive }: { isActive: boolean }) => ({
                      textDecoration: "none",
                      color: isActive ? "#F2A413" : "black",
                      width: "100%",
                      textAlign: "center",
                      padding: "8px 0",
                      fontWeight: 600,
                    })}
                  >
                    {page}
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".16rem",
              fontSize: "0.9rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Amine Triki
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <img src={AmineLogo} alt="Amine Logo" style={{ height: "40px" }} />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <NavLink
                key={page}
                to={
                  page.toLowerCase() === "home" ? "/" : `/${page.toLowerCase()}`
                }
                style={({ isActive }: { isActive: boolean }) => ({
                  textDecoration: "none",
                  color: isActive ? "#F2A413" : "white",
                  margin: "0 10px",
                  padding: "10px 15px",
                  fontWeight: 700,
                })}
                onClick={handleCloseNavMenu}
              >
                {page}
              </NavLink>
            ))}
          </Box>

          <Typography
            variant="body2"
            sx={{ margin: "0 10", display: { xs: "none", lg: "block" } }}
          >
            {username}
          </Typography>

          <IconButton aria-label="cart" sx={{ margin: "0 10px" }} onClick={handleCart} >
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart  />
            </Badge>
          </IconButton>
          {isAuthenticated ? (
            <Box sx={{ margin: "0 10px" }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar
                  alt={username?.charAt(0).toUpperCase() || "user"}
                  src=""
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>My Orders</MenuItem>
                <MenuItem onClick={heandlelogout}>Logout</MenuItem>
              </Menu>
            </Box>
          ) : (
            <Button variant="outlined" color="info" onClick={handlelogin}>
              login
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;
