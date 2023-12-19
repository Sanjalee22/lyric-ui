import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import LyricActionIcon from './LyricActionIcon';
import { IconPhoto } from '@tabler/icons-react';

const meta: Meta<typeof LyricActionIcon> = {
    component: LyricActionIcon,
};

export default meta;
type Story = StoryObj<typeof LyricActionIcon>;

export const Primary: Story = {
    args: {
        buttonType: "primary",
        radius: "md",
        size: "md",
        disabled: false,
        children: <IconPhoto />
    },
};

export const Secondary: Story = {
    args: {
        buttonType: "secondary",
        radius: "md",
        size: "md",
        disabled: false,
        children: <IconPhoto />
    },
};

export const Tertiary: Story = {
    args: {
        buttonType: "tertiary",
        radius: "md",
        size: "md",
        disabled: false,
        children: <IconPhoto />
    },
};

export const Link: Story = {
    args: {
        buttonType: "link",
        radius: "md",
        size: "md",
        disabled: false,
        children: <IconPhoto />
    },
};
