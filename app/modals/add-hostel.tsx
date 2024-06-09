"use client";


import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";

interface AddHostelModalProps {
  trigger: React.ReactNode;
}

export const AddHostelModal = ({ trigger }: AddHostelModalProps) => {
    const[isLoading, setIsLoading] = useState(false);
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425]">
        <DialogHeader>
          <DialogTitle>Add Hostel</DialogTitle>
          <DialogDescription>
            Add a new hostel to your listing
          </DialogDescription>
                  <div>
                      
          </div>
          <DialogFooter>
            <div className="flex flex-row items-center justify-between gap-4">
              <Button variant="outline" size="default">Back</Button>
              <Button variant="default" size="default" disabled={isLoading}>Next</Button>
            </div>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
