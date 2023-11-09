import {
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from '@/components/ui/alert-dialog';

const LanguageSettingsDialog = () => {
    return (
        <>
            <AlertDialogHeader>
                <AlertDialogTitle>Language Settings</AlertDialogTitle>
                <AlertDialogDescription>
                    lol no shot im gonna localize this rn
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
        </>
    );
};

export default LanguageSettingsDialog;
