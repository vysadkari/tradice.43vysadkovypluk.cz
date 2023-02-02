import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header, { MenuItem } from "./Header";

export default {
  title: "Components",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Header_ = Template.bind({});

const menuItems: Array<MenuItem> = [
  {
    title: "Historie",
    url: "/historie",
    backgroundImage: "/assets/images/menu/historie.jpg",
  },
  {
    title: "Zahraniční operace",
    url: "/zahranicni-operace",
    backgroundImage: "/assets/images/menu/zahranicni-operace.jpg",
  },
  {
    title: "Velitelé",
    url: "/velitele",
    backgroundImage: "/assets/images/menu/velitele.jpg",
  },
  {
    title: "Uniforma",
    url: "/uniforma",
    backgroundImage: "/assets/images/menu/uniforma.jpg",
  },
  {
    title: "Cháron",
    url: "/charon",
    backgroundImage: "/assets/images/menu/charon.jpg",
  },
];

Header_.args = {
  activeItem: "/historie",
  menuItems: menuItems,
};
