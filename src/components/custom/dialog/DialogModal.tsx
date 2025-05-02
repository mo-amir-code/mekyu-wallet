import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export interface DialogModalType {
  btnText: string;
  children: ReactNode;
  className?: string;
}

const DialogModal = ({ btnText, children, className }: DialogModalType) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className={" cursor-pointer"} >{btnText}</Button>
      </DialogTrigger>
      <DialogTitle>
        
      </DialogTitle>
      <DialogContent className={cn("sm:max-w-[425px]", className)}>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DialogModal;
