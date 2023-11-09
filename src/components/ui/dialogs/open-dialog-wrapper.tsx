import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';

type OpenDialogWrapperProps = {
    children: React.ReactNode;
    dialogContent: () => React.ReactNode;
    className?: string;
};

const OpenDialogWrapper = (props: OpenDialogWrapperProps) => {
    return (
        <Dialog>
            <DialogTrigger className="w-full">{props.children}</DialogTrigger>
            <DialogContent>{props.dialogContent()}</DialogContent>
        </Dialog>
    );
};

export default OpenDialogWrapper;
