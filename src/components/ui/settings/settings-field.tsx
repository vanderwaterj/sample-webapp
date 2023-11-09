import React from 'react';

import OpenDialogWrapper from '@/components/ui/dialogs/open-dialog-wrapper';
import {
    SettingsFieldNoIconProps,
    SettingsFieldIconProps,
} from '@/types/generalTypes';

export type SettingsFieldProps =
    | SettingsFieldNoIconProps
    | SettingsFieldIconProps;

const SettingsContent = (props: SettingsFieldProps) => {
    let icons: React.ReactElement[] = [];
    if ('icon' in props && props.icon !== undefined) {
        icons.push(props.icon);
    } else if ('icons' in props && props.icons !== undefined) {
        icons = props.icons;
    }

    let selectedIconIndex = 0;
    if ('selectedIconIndex' in props && props.selectedIconIndex !== undefined) {
        selectedIconIndex = props.selectedIconIndex;
    }

    return (
        <div
            className={props.className || ''}
            key={props.text}
            onClick={props.clickHandler}
        >
            <span className="select-none">{props.text}</span>
            {
                <div className="relative">
                    {
                        // If there are multiple icons, render each one, but set scale-0 on all but the selected one
                        // Otherwise, render the single icon
                        icons.map((icon, index) => {
                            const iconScale: string =
                                index === selectedIconIndex
                                    ? 'scale-100'
                                    : 'scale-0';

                            const iconRotation: string =
                                'rotationProps' in props &&
                                props.rotationProps !== undefined
                                    ? props.rotationProps.iconRotationState
                                        ? `${
                                              props.rotationProps.clockwise
                                                  ? ''
                                                  : '-'
                                          }rotate-${
                                              props.rotationProps.degrees
                                          }`
                                        : ''
                                    : 'rotate-0';

                            return (
                                <div
                                    key={index}
                                    className={`absolute transition-all -ml-6 -m-3 ${iconScale} ${iconRotation}`}
                                >
                                    {React.cloneElement(icon, {
                                        className: 'margin',
                                    })}
                                </div>
                            );
                        })
                    }
                </div>
            }
        </div>
    );
};

const SettingsField = (props: SettingsFieldProps) => {
    return (
        <>
            {'dialogContent' in props && props?.dialogContent !== undefined ? (
                <OpenDialogWrapper dialogContent={props.dialogContent}>
                    <SettingsContent {...props} />
                </OpenDialogWrapper>
            ) : (
                <SettingsContent {...props} />
            )}
        </>
    );
};

export default SettingsField;
