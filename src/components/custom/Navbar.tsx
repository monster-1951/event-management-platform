import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Selectt from "./Select";
import Link from "next/link";
import { signOut } from "@/auth";
import { FaUserCircle } from "react-icons/fa";
import { redirect } from "next/navigation";
import Image from "next/image";
import { USer } from "@/types/types";
import Logged from "./Logged";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import BasicMenu from "./BasicMenu";
const cities: string[] = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Surat",
  "Pune",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Pimpri-Chinchwad",
  "Patna",
  "Vadodara",
  "Ghaziabad",
  "Ludhiana",
  "Agra",
  "Nashik",
  "Faridabad",
  "Meerut",
  "Rajkot",
  "Kalyan-Dombivli",
  "Vasai-Virar",
  "Varanasi",
  "Srinagar",
  "Aurangabad",
  "Dhanbad",
  "Amritsar",
  "Navi Mumbai",
  "Allahabad (Prayagraj)",
  "Howrah",
  "Gwalior",
  "Jabalpur",
  "Coimbatore",
  "Vijayawada",
  "Jodhpur",
  "Madurai",
  "Raipur",
  "Kota",
  "Guwahati",
  "Chandigarh",
  "Solapur",
  "Hubli-Dharwad",
  "Tiruchirappalli",
];

interface NavbarProps {
  Login: boolean;
  user?: USer;
}

const Navbar = ({ Login, user }: NavbarProps) => {
  return (
    <nav className="glass flex flex-1 p-3 sm:justify-between gap-2 sticky top-0 z-20">
      <div className="flex-1 flex gap-2">
        <Selectt
          TriggerValue="Your city"
          options={cities}
          TriggerclassName="w-fit border-none"
          ContentclassName="text-white hover:cursor-pointer"
          ItemclassName="text-white hover:font-bold hover:cursor-pointer"
        />
        <Input
          type="search"
          placeholder="Search for an event"
          className="placeholder:font-thin border-none sm:w-fit"
        />
      </div>
      <div className=" sm:flex-1 sm:flex sm:gap-2 sm:justify-end hidden">
        <Link href={"/user/CreateEvent"}>
          <Button className="font-extrabold rounded-xl">Create an event</Button>
        </Link>
        {Login ? (
          <>
            <Logged user={user} />
          </>
        ) : (
          <>
            <Link href={"/signup"}>
              <Button className="font-extrabold rounded-xl">Sign-In</Button>
            </Link>
            <Link href={"/login"}>
              <Button className="font-extrabold rounded-xl">Log-In</Button>
            </Link>
          </>
        )}
      </div>
      <div className="sm:hidden">
       <BasicMenu Login = {Login} user={user}/>
      </div>
    </nav>
  );
};

export default Navbar;
