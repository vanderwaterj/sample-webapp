import { Button } from '@/components/ui/button';
import {
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from '@/components/ui/dialog';

const LanguageSettingsDialog = () => {
    return (
        <>
            <DialogHeader>
                <DialogTitle>Language Settings</DialogTitle>
                <DialogDescription>
                    lol no shot im gonna localize this rn
                </DialogDescription>
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

export default LanguageSettingsDialog;
