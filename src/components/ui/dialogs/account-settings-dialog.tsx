import {
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from '@/components/ui/alert-dialog';

const AccountSettingsDialog = () => {
    return (
        <>
            <AlertDialogHeader>
                <AlertDialogTitle>Account Settings</AlertDialogTitle>
                <AlertDialogDescription>
                    dummy description
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
        </>
    );
};

export default AccountSettingsDialog;
