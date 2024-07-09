"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import SubmitForm from "@/components/forms/submitForm";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";

export default function SubmitModal() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 640px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary">Submit</Button>
        </DialogTrigger>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Submit Your Tool to Elevate</DialogTitle>
            <DialogDescription>
              Have a tool that you believe that is useful for the community?
              Submit it to Elevate and help us grow.
            </DialogDescription>
          </DialogHeader>
          <SubmitForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="secondary">Submit</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Submit Your Tool to Elevate</DrawerTitle>
          <DrawerDescription>
            Let us know about your tool and help us grow.
          </DrawerDescription>
        </DrawerHeader>
        <SubmitForm className="px-6 pb-6" />
      </DrawerContent>
    </Drawer>
  );
}
