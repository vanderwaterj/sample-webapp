import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
} from '@/components/ui/alert-dialog';

type OpenDialogWrapperProps = {
    children: React.ReactNode;
    dialogContent: () => React.ReactNode;
    className?: string;
};

const OpenDialogWrapper = (props: OpenDialogWrapperProps) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger className="w-full">
                {props.children}
            </AlertDialogTrigger>
            <AlertDialogContent>{props.dialogContent()}</AlertDialogContent>
        </AlertDialog>
    );
};

export default OpenDialogWrapper;
