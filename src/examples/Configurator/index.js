/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";

// react-github-btn
import GitHubButton from "react-github-btn";

// @mui material components
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

// @mui icons
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Custom styles for the Configurator
import ConfiguratorRoot from "examples/Configurator/ConfiguratorRoot";

// Material Dashboard 2 React context
import {
  useMaterialUIController,
  setOpenConfigurator,
  setTransparentSidenav,
  setWhiteSidenav,
  setSidenavColor,
  setDarkMode,
} from "context";

function Configurator() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    openConfigurator,
    fixedNavbar,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const sidenavColors = ["primary", "dark", "info", "success", "warning", "error"];
  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
  const handleTransparentSidenav = () => {
    sessionStorage.setItem("Sidenav","transparent");
    setTransparentSidenav(dispatch, true);
    setWhiteSidenav(dispatch, false);
  };
  const handleWhiteSidenav = () => {
    sessionStorage.setItem("Sidenav","white");
    setWhiteSidenav(dispatch, true);
    setTransparentSidenav(dispatch, false);
  };
  const handleDarkSidenav = () => {
    sessionStorage.setItem("Sidenav","dark");
    setWhiteSidenav(dispatch, false);
    setTransparentSidenav(dispatch, false);
  };
  
  const handleDarkMode = () => {
    sessionStorage.setItem("darkMode",!darkMode);
    setDarkMode(dispatch, !darkMode);

  }
  const sidenavTypeButtonsStyles = ({
    functions: { pxToRem },
    palette: { white, dark, background },
    borders: { borderWidth },
  }) => ({
    height: pxToRem(39),
    background: darkMode ? background.sidenav : white.main,
    color: darkMode ? white.main : dark.main,
    border: `${borderWidth[1]} solid ${darkMode ? white.main : dark.main}`,

    "&:hover, &:focus, &:focus:not(:hover)": {
      background: darkMode ? background.sidenav : white.main,
      color: darkMode ? white.main : dark.main,
      border: `${borderWidth[1]} solid ${darkMode ? white.main : dark.main}`,
    },
  });
  // sidenav type active button styles
  const sidenavTypeActiveButtonStyles = ({
    functions: { pxToRem, linearGradient },
    palette: { white, gradients, background },
  }) => ({
    height: pxToRem(39),
    background: darkMode ? white.main : linearGradient(gradients.dark.main, gradients.dark.state),
    color: darkMode ? background.sidenav : white.main,

    "&:hover, &:focus, &:focus:not(:hover)": {
      background: darkMode ? white.main : linearGradient(gradients.dark.main, gradients.dark.state),
      color: darkMode ? background.sidenav : white.main,
    },
  });

  return (
    <ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={4}
        pb={0.5}
        px={3}
      >
        <MDBox>
          <MDTypography variant="h5">スタイル設定</MDTypography>
          <MDTypography variant="body2" color="text">
            See our dashboard options.
          </MDTypography>
        </MDBox>

        <Icon
          sx={({ typography: { size }, palette: { dark, white } }) => ({
            fontSize: `${size.lg} !important`,
            color: darkMode ? white.main : dark.main,
            stroke: "currentColor",
            strokeWidth: "2px",
            cursor: "pointer",
            transform: "translateY(5px)",
          })}
          onClick={handleCloseConfigurator}
        >
          close
        </Icon>
      </MDBox>

      <Divider />

      <MDBox pt={0.5} pb={3} px={3}>
        <MDBox>
          <MDTypography variant="h6">ボタン背景</MDTypography>

          <MDBox mb={0.5}>
            {sidenavColors.map((color) => (
              <IconButton
                key={color}
                sx={({
                  borders: { borderWidth },
                  palette: { white, dark, background },
                  transitions,
                }) => ({
                  width: "24px",
                  height: "24px",
                  padding: 0,
                  border: `${borderWidth[1]} solid ${darkMode ? background.sidenav : white.main}`,
                  borderColor: () => {
                    let borderColorValue = sidenavColor === color && dark.main;

                    if (darkMode && sidenavColor === color) {
                      borderColorValue = white.main;
                    }

                    return borderColorValue;
                  },
                  transition: transitions.create("border-color", {
                    easing: transitions.easing.sharp,
                    duration: transitions.duration.shorter,
                  }),
                  backgroundImage: ({ functions: { linearGradient }, palette: { gradients } }) =>
                    linearGradient(gradients[color].main, gradients[color].state),

                  "&:not(:last-child)": {
                    mr: 1,
                  },

                  "&:hover, &:focus, &:active": {
                    borderColor: darkMode ? white.main : dark.main,
                  },
                })}
                onClick={() => {setSidenavColor(dispatch, color), sessionStorage.setItem("sidenavColor",color)}}
              />
            ))}
          </MDBox>
        </MDBox>

        <MDBox mt={3} lineHeight={1}>
          <MDTypography variant="h6">メニュー背景</MDTypography>
          <MDTypography variant="button" color="text">
            {/* Choose between different sidenav types. */}
          </MDTypography>

          <MDBox
            sx={{
              display: "flex",
              mt: 2,
              mr: 1,
            }}
          >
            <MDButton
              color="dark"
              variant="gradient"
              onClick={handleDarkSidenav}
              fullWidth
              sx={
                !transparentSidenav && !whiteSidenav
                  ? sidenavTypeActiveButtonStyles
                  : sidenavTypeButtonsStyles
              }
            >
              暗い
            </MDButton>
            <MDBox sx={{ mx: 1, width: "8rem", minWidth: "8rem" }}>
              <MDButton
                color="dark"
                variant="gradient"
                onClick={handleTransparentSidenav}
                fullWidth
                sx={
                  transparentSidenav && !whiteSidenav
                    ? sidenavTypeActiveButtonStyles
                    : sidenavTypeButtonsStyles
                }
              >
                透明
              </MDButton>
            </MDBox>
            <MDButton
              color="dark"
              variant="gradient"
              onClick={handleWhiteSidenav}
              fullWidth
              sx={
                whiteSidenav && !transparentSidenav
                  ? sidenavTypeActiveButtonStyles
                  : sidenavTypeButtonsStyles
              }
            >
              明るい
            </MDButton>
          </MDBox>
        </MDBox>
        <Divider />
        <MDBox display="flex" justifyContent="space-between" alignItems="center" lineHeight={1}>
          <MDTypography variant="h6">ライト/ダーク</MDTypography>

          <Switch checked={darkMode} onChange={handleDarkMode} />
        </MDBox>
        <Divider/>
        
      </MDBox>
    </ConfiguratorRoot>
  );
}

export default Configurator;
