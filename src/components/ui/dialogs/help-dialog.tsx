import { Button } from '@/components/ui/button';
import {
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from '@/components/ui/dialog';

const HelpDialog = () => {
    return (
        <>
            <DialogHeader>
                <DialogTitle>Help</DialogTitle>
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

export default HelpDialog;
