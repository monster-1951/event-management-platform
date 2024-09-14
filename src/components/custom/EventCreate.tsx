import React, { useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Selectt from "@/components/custom/Select";
import { Button } from "../ui/button";
import { createEvent } from "@/action/actions";
import InputImage from "./InputImage";
const EventCreate = () => {
  const categories = [
    "Business",
    "Music",
    "Parties",
    "Food & Drinks",
    "Festivals",
    "Nature",
    "Adventure",
    "Health",
    "Arts"
  ];

  return (
    <div className="w-[75%] lg:w-[40%] mx-auto flex flex-col min-h-screen">
      <Card className="glass my-auto">
        <CardHeader>
          <CardTitle className="border-b-2 py-2 text-center te">
            PUBLISH YOUR EVENT
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action={createEvent}></form>
          <form className="flex flex-col" action={createEvent}>
            <InputImage />
            <div className="flex p-3">
              <Label className="w-[30%]">
                <p className="p-3">Event Name</p>
              </Label>
              <Input
                type="text"
                name="EventName"
                className="placeholder:italic"
                placeholder="Name of Your Event"
                required
              />
            </div>

            <div className="flex p-3">
              <Label className="w-[30%]">
                <p className="p-3">Venue</p>
              </Label>
              <Input
                type="text"
                name="venue"
                className="placeholder:italic"
                placeholder="Where?"
                required
              />
            </div>

            <div className="flex p-3">
              <Label className="w-[30%]">
                <p className="p-3">Date</p>
              </Label>
              <Input
                type="date"
                name="date"
                className="placeholder:italic"
                placeholder="When"
                required
              />
            </div>

            <div className="flex p-3">
              <Label className="w-[30%]">
                <p className="p-3">Time</p>
              </Label>
              <Input
                type="time"
                name="time"
                className="placeholder:italic"
                placeholder="At what time?"
                required
              />
            </div>

            <div className="flex p-3">
              <Label className="w-[30%]">
                <p className="p-3">Number of Seats</p>
              </Label>
              <Input
                type="number"
                name="seats"
                className="placeholder:italic"
                placeholder="How many people are allowed"
                required
              />
            </div>

            <div className="flex p-3">
              <Label className="w-[30%]">
                <p className="p-3">Description</p>
              </Label>
              <Input
                type="text"
                name="description"
                className="placeholder:italic"
                placeholder="About your Event"
              />
            </div>

            <div className="flex p-3">
              <Label className="w-[30%]">
                <p className="p-3">Category</p>
              </Label>
              <Selectt
                TriggerValue="Category"
                options={categories}
                TriggerclassName="w-full"
                ContentclassName="text-white hover:cursor-pointer glass"
                ItemclassName="text-white hover:font-bold hover:cursor-pointer"
              ></Selectt>
            </div>

            <div className="flex p-5 justify-around border-t-2">
              <Button type="submit" className="border w-1/2">
                CREATE
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="px-10"></CardFooter>
      </Card>
    </div>
  );
};

export default EventCreate;
