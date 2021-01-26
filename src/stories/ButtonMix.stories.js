import React from "react";
import { ButtonMix } from "./ButtonMix";

export default {
  title: "Example/ButtonMix",
  component: ButtonMix,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const UI = (args) => <ButtonMix {...args} />;

export const Primary = UI.bind({});
Primary.args = {
  primary: true,
  label: "ButtonMix",
};
