"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import useAddHostel from "@/hooks/addhostel";
import { useCallback, useEffect, useState } from "react";

interface ModalProps {
  body?: React.ReactNode;
  footer?: React.ReactNode;
  title?: string;
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  secondaryAction?: () => void;
  actionLabel?: string;
  secondaryActionLabel?: string;
  disabled?: boolean;
  description?: string;
}

export const Modal = ({
  body,
  footer,
  title,
  onSubmit,
  secondaryAction,
  secondaryActionLabel,
  actionLabel,
  onClose,
  isOpen,
  disabled,
  description,
}: ModalProps) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;

    secondaryAction && secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) return null;

  return (
    <Dialog onOpenChange={handleClose} open={isOpen} modal defaultOpen={isOpen}>
      <DialogContent className="sm:max-w-[425]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
          <div className="text-lg font-semibold">{body}</div>
          <DialogFooter>
            <div className="flex flex-row items-center justify-between gap-4">
              {secondaryAction && secondaryActionLabel && (
                <Button
                  variant="outline"
                  onClick={handleSecondaryAction}
                  disabled={disabled}
                >
                  {secondaryActionLabel}
                </Button>
              )}
              <Button disabled={disabled} onClick={handleSubmit}>
                {actionLabel}
              </Button>
            </div>

            {footer}
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
