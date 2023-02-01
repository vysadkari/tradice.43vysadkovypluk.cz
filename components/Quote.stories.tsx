import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Quote from "./Quote";

export default {
  title: "Components",
  component: Quote,
} as ComponentMeta<typeof Quote>;

const Template: ComponentStory<typeof Quote> = (args) => <Quote {...args} />;

export const Quote_ = Template.bind({});

Quote_.args = {
  author: "generálmajor Frederick Browning",
  image: "/assets/images/homepage/browning.jpg",
  children:
    "Výsadkáři nemají žádnou minulost, ale o to slavnější budou mít budoucnost!",
};
