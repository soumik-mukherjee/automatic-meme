import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { ProductivityAppShell, DemoMuiTheme } from "../index";

export default { title: "ProductivityAppShell", component: ProductivityAppShell };

export const unthemed = () => {
  return <ProductivityAppShell />;
};


export const themed = () => {
  return (
    <ThemeProvider theme={DemoMuiTheme}>
      <ProductivityAppShell />
    </ThemeProvider>
  );
}