import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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
        <Button variant="outline">{btnText}</Button>
      </DialogTrigger>
      <DialogContent className={cn("sm:max-w-[425px]", className)}>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DialogModal;
