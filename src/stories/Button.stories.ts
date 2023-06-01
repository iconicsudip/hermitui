import type { Meta, StoryObj } from '@storybook/react';

import HButton from '../components/HButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: HButton,
  tags: ['autodocs'],
} satisfies Meta<typeof HButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Button: Story = {
  args: {
    label: 'Click me',
    type:"success",
    size: "small"
  },
}; 