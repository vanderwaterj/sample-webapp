import { Button } from '@/components/ui/button';
import {
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from '@/components/ui/dialog';

const AccountSettingsDialog = () => {
    return (
        <>
            <DialogHeader>
                <DialogTitle>Account Settings</DialogTitle>
                <DialogDescription>dummy description</DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <DialogClose asChild>
                    <Button type="button" variant="secondary">
                        Close
                    </Button>
                </DialogClose>
            </DialogFooter>
        </>
    );
};

export default AccountSettingsDialog;
