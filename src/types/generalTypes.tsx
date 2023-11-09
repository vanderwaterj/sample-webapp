import { ReactElement } from 'react';

// ----------------------------- SETTINGS FIELD -----------------------------

type SettingsFieldCommonProps = {
    text: string;
    clickHandler?: () => void;
    dialogContent?: () => ReactElement;
    onClick?: () => void;
    className?: string;
};

export type SettingsFieldNoIconProps = SettingsFieldCommonProps & {
    icon?: never;
    icons?: never;
    rotationProps?: never;
};

type SettingsFieldCommonIconProps = {
    rotationProps?: {
        iconRotationState?: boolean;
        clockwise: boolean;
        degrees: '45' | '90' | '180';
    };
};

export type SettingsFieldSingleIconProps = SettingsFieldCommonProps &
    SettingsFieldCommonIconProps & {
        icon: ReactElement;
        icons?: never;
    };

export type SettingsFieldMultipleIconsProps = SettingsFieldCommonProps &
    SettingsFieldCommonIconProps & {
        icon?: never;
        icons: ReactElement[];
        selectedIconIndex: number;
    };

export type SettingsFieldIconProps =
    | SettingsFieldSingleIconProps
    | SettingsFieldMultipleIconsProps;
