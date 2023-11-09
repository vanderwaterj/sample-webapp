import {
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from '@/components/ui/alert-dialog';

const HelpDialog = () => {
    return (
        <>
            <AlertDialogHeader>
                <AlertDialogTitle>Help</AlertDialogTitle>
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

export default HelpDialog;
