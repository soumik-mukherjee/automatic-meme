/*import React from "react";

import CssBaseline from '@material-ui/core/CssBaseline'

import {
  Toolbar,
  RubikRegular,
  AppLogo,
  ToolbarIconButton
} from "@project/ui-components";
import { faEnvelope, faBell } from "@fortawesome/free-regular-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import MyPhoto from "../Assets/Images/me-no-background.jpg";
import styled from "styled-components";
import "@storybook/addon-console";
*/

import { AppShell } from "../index";

/*
const Container = styled.div`
  width: 98vw;
  height: 98vh;
  background-color: rgba(46, 91, 255, 0.07);
`;

const ToolbarLayout = styled.div`
  width: 100%;
  height: 80px;
`;


const AvatarImage = styled.div`
  background-image: url(${MyPhoto});
  height: 50px;
  width: 50px;
`;



*/

export default { title: "AppShell", component: AppShell };

export const defaultLayout = () => {
  return <AppShell />;
};

/*
 */
