"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getDisplayName } from "next/dist/shared/lib/utils";
import { SelectLabel } from "@radix-ui/react-select";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface SelecttProps {
  options?: string[];
  TriggerclassName?: string;
  ContentclassName?: string;
  ItemclassName?: string;
  TriggerValue: string;
  name?: string;
}

const Selectt = ({
  options,
  TriggerclassName,
  ContentclassName,
  ItemclassName,
  TriggerValue,
}: SelecttProps) => {

  

  return (
    <Select name="category">
      <SelectTrigger className={TriggerclassName} name="">
        <SelectValue placeholder={TriggerValue}  />
      </SelectTrigger>
      <SelectContent className={ContentclassName} >
        {options?.map((item: string, id: number) => {
          return (
            <SelectItem value={item} key={id} className={ItemclassName} >
              {item}
            </SelectItem>
          );
        })}
      </SelectContent>
    
    </Select>
  );
};

export default Selectt;
