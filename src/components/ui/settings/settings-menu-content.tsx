import { Separator } from '@/components/ui/separator';
import SettingsField, {
    SettingsFieldProps,
} from '@/components/ui/settings/settings-field';
import { settingsFieldHasIcon } from '@/types/typeGuards';

type SettingsMenuContentProps = {
    settingsFields: SettingsFieldProps[];
};

const SettingsMenuContent = (props: SettingsMenuContentProps) => {
    const { settingsFields } = props;

    return settingsFields.map((field, index) => {
        const isLastField = index === settingsFields.length - 1;

        if (settingsFieldHasIcon(field)) {
            return (
                <div key={field.text}>
                    <SettingsField
                        text={field.text}
                        icon={field.icon}
                        rotationProps={field.rotationProps}
                    />
                    {!isLastField && <Separator />}
                </div>
            );
        } else {
            return (
                <div key={field.text}>
                    <SettingsField text={field.text} />
                    {!isLastField && <Separator />}
                </div>
            );
        }
    });
};

export default SettingsMenuContent;
