import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProfPanBar from "./ProfPanBar";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";

interface profPanel{
    direction:"top"|"left"|"bottom"|"right";
    SheetTriggerClass?:string;
    dp?:string;
}

const ProfPanel = ({direction,SheetTriggerClass,dp}:profPanel) => {
  return (
    <Sheet>
      <SheetTrigger className={`${SheetTriggerClass}`}>
        {dp?(
          <>
          <Image
          alt="dp"
          src={dp}
          />
          </>
        ):(<FaUserCircle className="align-middle h-full w-full p-2" />)}
      </SheetTrigger>
      <SheetContent className="glass text-left w-[40%]" side={direction}>
        <SheetHeader className="">
          <SheetTitle className=" mt-[5%] text-left border-b-2">
            User Name
          </SheetTitle>
        </SheetHeader>
        <SheetDescription >
        </SheetDescription>
          <ProfPanBar />
      </SheetContent>
    </Sheet>
  );
};

export default ProfPanel;
