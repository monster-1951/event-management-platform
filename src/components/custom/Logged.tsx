import { signOut } from "@/auth";
import React from "react";
import { Button } from "../ui/button";
import { FaUserCircle } from "react-icons/fa";
import { ClientUser, USer } from "@/types/types";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import ProfPanel from "./ProfPanel";

interface LoggedProps {
  user?: USer;
  iconClass?: string;
}

const Logged = ({ user, iconClass }: LoggedProps) => {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        {/* <h1>{user.userName}</h1> */}
        <Button className="font-extrabold rounded-xl">Log Out</Button>
      </form>

      <HoverCard>
        <HoverCardTrigger>
          <ProfPanel
            direction="right"
            SheetTriggerClass={`${iconClass} align-middle`}
          />
        </HoverCardTrigger>
        <HoverCardContent className="glass mt-[5%] font-bold ">
          <div className="flex flex-col items-start gap-y-2 text-sm">
            <div className="p-3 border-b-2">
              @{user?.userName || "GuestUser"}
            </div>
            <div className="w-full flex-1 flex">
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
                className="border-r-2 w-[50%]"
              >
                <Button>Log Out</Button>
              </form>
              <Link href={"/user/profile"} className="w-[50%]">
                <Button>Profile</Button>
              </Link>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </>
  );
};

export default Logged;
