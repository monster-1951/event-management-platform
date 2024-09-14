import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { USer, Event } from "@/types/types"
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface EventCardProps extends Event {
  CardClass: string;
}
const EventCard = ({
  CardClass,
  name,
  date,
  venue,
  time,
  banner,
  category,
  description,
  organizer,
  seats,
  noOfInterests,
  _id
}: EventCardProps) => {
  return (
    <Card className={`${CardClass}`}>
      <div className="border">
        <CardHeader className="">
          <CardTitle className="text-3xl border-b-2 p-2 ">{name}</CardTitle>
          <Image
            alt="Event Banner"
            src={banner}
            width={400}
            height={200}
            className="pt-3 mx-auto my-auto"
          />
          <CardDescription className="text-left border p-3">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col">
         <div className="flex justify-between border-b-2">
         <span>Event Category  </span>
         <span>{category}</span>
         </div>
        <div className="flex justify-between border-b-2">
        <span>Date  </span>
        <span>{date}</span>
        </div>
         <div className="flex justify-between border-b-2">
         <span>Venue  </span>
         <span>{venue}</span>
         </div>
         <div className="flex justify-between border-b-2">
         <span>Time  </span>
         <span>{time}</span>
         </div>
         <div className="flex justify-between border-b-2">
         <span>No. of Seats</span>
         <span>{seats}</span>
         </div>
        </CardContent>
        <CardFooter className="flex flex-col text-left gap-y-3">
          <div className="w-full font-semibold">Organized by</div>
          <div className="w-full flex justify-between">
           <p> {organizer.userName}</p>
           <Link href={`/event/${_id}`} className="-mt-1">
           <Button className="glass">MORE INFO</Button>
           </Link>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};

export default EventCard;
