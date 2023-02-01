import "../styles/globals.css";

import * as NextImage from "next/image";
import Link from "next/link";
import { themes } from "@storybook/theming";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

Object.defineProperty(Link, "default", {
  configurable: true,
  value: (props) => <a {...props} />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
};
