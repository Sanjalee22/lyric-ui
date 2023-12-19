import { ActionIcon, Button, createTheme, CSSVariablesResolver } from "@mantine/core";
import buttonClasses from "../src/components/LyricButton/LyricButton.module.css"
import commonButtonClasses from "../src/components/CommonButton.module.css"
import actionIconClasses from "../src/components/LyricActionIcon/LyricActionIcon.module.css"

export const theme = createTheme({
    focusRing: 'auto',
    fontSizes: {
        xs: "11px",
        sm: "12px",
        md: "14px",
    },
    lineHeights: {
        xs: "130%",
        sm: "136%",
        md: "144%",
    },

    radius: {
        "xs": "6px",
        "sm": "8px",
        "md": "10px",
    },

    components: {
        Button: Button.extend({
            classNames: { ...buttonClasses, ...commonButtonClasses }
        }),
        ActionIcon: ActionIcon.extend({
            classNames: { ...actionIconClasses, ...commonButtonClasses }
        }),
    },
})

export const resolver: CSSVariablesResolver = (theme) => ({
    variables: {
        '--mantine-hero-height': theme.other.heroHeight,
        '--radius-md': '10px'
    },
    light: {
        //background colors
        '--colors-bg-brand-primary': '#0A9DFA',
        '--colors-bg-brand-primary_hover': '#45A6FB',
        '--colors-bg-brand-primary_disabled': '#62BCF58F',
        '--colors-bg-brand-primary_active': '#0A9DFA',
        '--colors-bg-brand-secondary': '#0A9DFA1A',
        '--colors-bg-brand-secondary_hover': '#45A6FB1A',
        '--colors-bg-brand-secondary_disabled': '#62BCF51A',
        '--colors-bg-brand-secondary_pressed': '#0A9DFA1A',
        '--colors-bg-brand-secondary_disabled_state': '#62BCF51A',
        '--colors-bg-brand-tertiary': '#FFF',
        '--colors-bg-brand-tertiary_disabled': '#FFF',

        //text colors
        '--colors-text-button': '#FFF',
        '--colors-text-tertiary': '#292F3B',

        //borders colors:
        '--colors-border-blue': '#0A9DFA99',
        '--colors-border-secondary': '#D7DADE',
        '--blue-500-s': '#0A9DFA99',
        '--colors-border-tertiary_hover': '#D7DADE',
        '--colors-border-button-light': '#F5F7FA40',

        // Shadows
        '--shadow-primary-button': '0px 0px 8px 0px rgba(0, 0, 0, 0.06) inset, 0px 1px 4px 0px rgba(0, 0, 0, 0.12)',
        '--shadow-primary-button-hover': '1px -3px 10px 2px rgba(0, 0, 0, 0.08) inset, 0px 2px 12px 0px rgba(0, 0, 0, 0.10)',
        '--shadow-primary-button-focus': '0px -2px 8px 0px rgba(0, 0, 0, 0.06) inset, 0px 0px 4px 0px rgba(0, 0, 0, 0.04)',
        '--shadow-primary-button-active': '1px 2px 16px 1.5px rgba(0, 0, 0, 0.12) inset, 0px 0px 0px 0px rgba(0, 0, 0, 0.12)',
        '--shadow-primary-button-disabled': '0px 0px 8px 0px rgba(0, 0, 0, 0.06) inset, 0px 0px 4px 0px rgba(0, 0, 0, 0.04)',

        '--shadow-secondary-button': '0px -1px 8px 0px rgba(0, 0, 0, 0.04) inset, 0px 1px 6px 0px rgba(0, 0, 0, 0.10)',
        '--shadow-secondary-button_hover': '1px -3px 12px 2px rgba(0, 0, 0, 0.06) inset, 1px 2px 12px 0px rgba(0, 0, 0, 0.10)',
        '--shadow-secondary-button-disabled': '0px 0px 8px 0px rgba(0, 0, 0, 0.06) inset, 0px 1px 6px 0px rgba(0, 0, 0, 0.08)',
        '--shadow-secondary-button-focus': '0px -1px 8px 0px rgba(0, 0, 0, 0.04) inset, 0px 1px 4px 0px rgba(0, 0, 0, 0.08)',
        '--shadow-secondary-button-active': '1px 2px 16px 1.5px rgba(5, 37, 66, 0.10) inset, 0px 0px 0px 0px rgba(0, 0, 0, 0.12)',

        '--shadow-tertiary-button': '0px -1px 8px 0px rgba(0, 0, 0, 0.04) inset, 0px 1px 6px 0px rgba(0, 0, 0, 0.08)',
        '--shadow-tertiary-button_hover': '0.5px -3px 10px 1px rgba(0, 0, 0, 0.08) inset, 1px 3px 14px 1px rgba(0, 0, 0, 0.07)',
        '--shadow-tertiary-button_focus': '0px -1px 8px 0px rgba(0, 0, 0, 0.02) inset, 0px 1px 6px 0px rgba(0, 0, 0, 0.10)',
        '--shadow-tertiary-button_active': '1px 2.5px 10px 1px rgba(0, 0, 0, 0.07) inset, 0px 0px 0px 0px rgba(0, 0, 0, 0.08)',
        '--shadow-tertiary-button_disabled': '0px -1px 8px 0px rgba(0, 0, 0, 0.02) inset, 0px 1px 6px 0px rgba(0, 0, 0, 0.10)',
    },
    dark: {

        //background colors
        '--colors-bg-brand-primary': '#0A9DFA',
        '--colors-bg-brand-primary_hover': '#45A6FB',
        '--colors-bg-brand-primary_disabled': '##0A9DFA',
        '--colors-bg-brand-primary_active': '#0C7BEB',
        '--colors-bg-brand-secondary': '#0A9DFA1A',
        '--colors-bg-brand-secondary_hover': '#45A6FB1A',
        '--colors-bg-brand-secondary_disabled': '#62BCF51A',
        '--colors-bg-brand-secondary_pressed': '#0C7BEB1A',
        '--colors-bg-brand-secondary_disabled_state': '#0A9DFA1A',
        '--colors-bg-brand-tertiary': '#07080A',
        '--colors-bg-brand-tertiary_disabled': '#191C21',

        //text colors
        '--colors-text-button': '#EDEFF2',
        '--colors-text-tertiary': '#BABCBF',

        //border colors      
        '--colors-border-blue': '#0A9DFA99',
        '--colors-border-secondary': '#626466',
        '--colors-border-button-light': '#12151A33',
        '--blue-500-s': '#0C7BEB99',
        '--colors-border-tertiary_hover': '#F5F7FA40',

        //shadows
        '--shadow-primary-button': '0px -2px 8px 0px rgba(0, 0, 0, 0.06) inset, 0px 1px 4px 0px rgba(0, 0, 0, 0.12)',
        '--shadow-primary-button-hover': '1px -2px 10px 2px rgba(0, 0, 0, 0.08) inset, 0px 2px 12px 0px rgba(0, 0, 0, 0.10)',
        '--shadow-primary-button-focus': '0px -2px 8px 0px rgba(0, 0, 0, 0.06) inset, 0px 0px 4px 0px rgba(0, 0, 0, 0.04)',
        '--shadow-primary-button-active': '1px 2px 12px 0px rgba(0, 0, 0, 0.12) inset, 0px 0px 0px 0px rgba(0, 0, 0, 0.12)',
        '--shadow-primary-button-disabled': '0px -2px 8px 0px rgba(0, 0, 0, 0.06) inset, 0px 0px 4px 0px rgba(0, 0, 0, 0.04)',

        '--shadow-secondary-button': '0px -2px 8px 0px rgba(0, 0, 0, 0.06) inset, 0px 1px 4px 0px rgba(0, 0, 0, 0.12)',
        '--shadow-secondary-button_hover': '0px -2px 8px 0px rgba(0, 0, 0, 0.06) inset, 0px 2px 12px 0px rgba(0, 0, 0, 0.10)',
        '--shadow-secondary-button-focus': '0px -2px 8px 0px rgba(0, 0, 0, 0.06) inset, 0px 0px 4px 0px rgba(0, 0, 0, 0.04)', //here
        '--shadow-secondary-button-active': '1px 2px 10px 0px rgba(0, 0, 0, 0.08) inset, 0px 0px 0px 0px rgba(0, 0, 0, 0.12)',
        '--shadow-secondary-button-disabled': '0px -2px 8px 0px rgba(0, 0, 0, 0.06) inset, 0px 1px 4px 0px rgba(0, 0, 0, 0.04)',


        '--shadow-tertiary-button': '0px 0px 8px 0px rgba(0, 0, 0, 0.00) inset, 1px 3px 6px 0px rgba(65, 65, 65, 0.40)',
        '--shadow-tertiary-button_hover': '-1px -2px 24px 1px rgba(165, 165, 165, 0.16) inset, 0px 2px 12px 0px rgba(181, 181, 181, 0.12)',
        '--shadow-tertiary-button_focus': '0px -2px 8px 0px rgba(0, 0, 0, 0.06) inset, 0px 0px 4px 0px rgba(0, 0, 0, 0.04)',
        '--shadow-tertiary-button_active': '1px 2.5px 10px 1px rgba(0, 0, 0, 0.07) inset, 0px 0px 0px 0px rgba(0, 0, 0, 0.08)',
        '--shadow-tertiary-button_disabled': '1px 2px 10px 0px rgba(0, 0, 0, 0.10) inset, 0px 2px 12px 0px rgba(0, 0, 0, 0.08)',


    },
});


