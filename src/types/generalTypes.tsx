import { ReactElement } from 'react';

// ----------------------------- SETTINGS FIELD -----------------------------

type SettingsFieldCommonProps = {
    text: string;
    clickHandler?: () => void;
    dialogContent?: () => ReactElement;
    className?: string;
};

export type SettingsFieldNoIconProps = SettingsFieldCommonProps & {
    icon?: never;
    rotationProps?: never;
};

export type SettingsFieldIconProps = SettingsFieldCommonProps & {
    icon: ReactElement;
    rotationProps?: {
        iconRotationState?: boolean;
        clockwise: boolean;
        degrees: '45' | '90' | '180';
    };
};
