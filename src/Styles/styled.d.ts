import { themeType } from "./App-theme";
import {} from "styled-components";

declare module "styled-components" {
  interface DefaultTheme extends themeType {}
}
