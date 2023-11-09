import React from 'react';

import { Button } from '@/components/ui/button';
import {
    SettingsFieldNoIconProps,
    SettingsFieldIconProps,
} from '@/types/generalTypes';

export type SettingsFieldProps =
    | SettingsFieldNoIconProps
    | SettingsFieldIconProps;

const SettingsField = (props: SettingsFieldProps) => {
    return (
        <>
            <div
                key={props.text}
                className="relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 h-12 text-sm outline-none transition-colors justify-between"
                onClick={props.clickHandler}
            >
                <span className="select-none">{props.text}</span>
                {'icon' in props && (
                    <Button variant="link" size="icon">
                        {props.rotationProps?.iconRotationState
                            ? React.cloneElement(props.icon, {
                                  className: `transition-all ${
                                      props.rotationProps.clockwise ? '' : '-'
                                  }rotate-${props.rotationProps.degrees}`,
                              })
                            : props.icon}
                    </Button>
                )}
            </div>
        </>
    );
};

export default SettingsField;
