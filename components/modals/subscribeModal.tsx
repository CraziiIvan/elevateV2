"use client";

import { useState } from "react";
import SubscribeForm from "@/components/forms/subscribeForm";
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
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";

export default function SubscribeModal() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 640px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Subscribe</Button>
        </DialogTrigger>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Stay Update with Elevate</DialogTitle>
            <DialogDescription>
              Join our community and never miss and update on quality tools
            </DialogDescription>
          </DialogHeader>
          <SubscribeForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button>Subscribe</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Stay Update with Elevate</DrawerTitle>
          <DrawerDescription>
            Join our community and never miss and update on quality tools
          </DrawerDescription>
        </DrawerHeader>
        <SubscribeForm className="px-6 pb-6" />
      </DrawerContent>
    </Drawer>
  );
}
