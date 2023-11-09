import { SettingsFieldProps } from '@/components/ui/settings/settings-field';
import { SettingsFieldIconProps } from '@/types/generalTypes';

export function settingsFieldHasIcon(
    props: SettingsFieldProps
): props is SettingsFieldIconProps {
    return 'icon' in props;
}
