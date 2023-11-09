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
    return (
        <div
            className={props.className || ''}
            key={props.text}
            onClick={props.clickHandler}
        >
            <span className="select-none">{props.text}</span>
            {'icon' in props && (
                <div>
                    {props.rotationProps?.iconRotationState
                        ? React.cloneElement(props.icon, {
                              className: `transition-all ${
                                  props.rotationProps.clockwise ? '' : '-'
                              }rotate-${props.rotationProps.degrees}`,
                          })
                        : props.icon}
                </div>
            )}
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
