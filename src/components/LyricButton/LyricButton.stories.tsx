import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import LyricButton  from './LyricButton';
import { IconPhoto } from '@tabler/icons-react';
const icon = <IconPhoto size={14} />;

const meta: Meta<typeof LyricButton> = {
    component: LyricButton,
};

export default meta;
type Story = StoryObj<typeof LyricButton>;

export const Primary: Story = {
    args: {
        buttonType: "primary",
        radius: "md",
        size: "md",
        leftSection: icon,
        rightSection: icon,
        label: "Button",
        disabled: false,
    },
};

export const Secondary: Story = {
    args: {
        buttonType: "secondary",
        radius: "md",
        size: "md",
        leftSection: icon,
        rightSection: icon,
        label: "Button",
        disabled: false,
    },
};

export const Tertiary: Story = {
    args: {
        buttonType: "tertiary",
        radius: "md",
        size: "md",
        leftSection: icon,
        rightSection: icon,
        label: "Button",
        disabled: false,
    },
};

export const Link: Story = {
    args: {
        buttonType: "link",
        radius: "md",
        size: "md",
        leftSection: icon,
        rightSection: icon,
        label: "Button",
        disabled: false,
    },
};
