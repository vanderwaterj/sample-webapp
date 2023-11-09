import { Separator } from '@/components/ui/separator';
import SettingsField, {
    SettingsFieldProps,
} from '@/components/ui/settings/settings-field';

type SettingsMenuContentProps = {
    settingsFields: SettingsFieldProps[];
};

const SettingsMenuContent = (props: SettingsMenuContentProps) => {
    const { settingsFields } = props;

    return settingsFields.map((field, index) => {
        const isLastField = index === settingsFields.length - 1;

        const settingsClassName =
            'relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 h-12 text-sm outline-none transition-colors justify-between';

        return (
            <div key={field.text}>
                <SettingsField className={settingsClassName} {...field} />
                {!isLastField && <Separator />}
            </div>
        );
    });
};

export default SettingsMenuContent;
