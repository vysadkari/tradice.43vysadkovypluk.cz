import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Intro from "./Intro";

export default {
  title: "Components",
  component: Intro,
} as ComponentMeta<typeof Intro>;

const Template: ComponentStory<typeof Intro> = (args) => <Intro {...args} />;

export const Intro_ = Template.bind({});

Intro_.args = {
  title: "Tradice výsadkářů",
  backgroundImage: "/assets/images/homepage/intro.jpg",
  showLogo: true,
};
