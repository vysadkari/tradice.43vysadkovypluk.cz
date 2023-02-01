import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "./Card";

export default {
  title: "Components",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Card_ = Template.bind({});

Card_.args = {
  title: "Nůž pro výsadkáře",
  url: "#",
  backgroundImage: "assets/images/homepage/promo/charon.jpg",
};
