import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import Logged from "./Logged";
import { USer } from "@/types/types";

interface BasicMenuProps {
  Login: Boolean;
  user?: USer;
}

const BasicMenu = ({ Login, user }: BasicMenuProps) => {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div className="mt-2 p-3">Options</div>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <NavigationMenuLink>
                <Link href={"/user/CreateEvent"}>
                  <Button className="font-extrabold rounded-xl">
                    Create an event
                  </Button>
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink>
                {Login ? (
                  <>
                    <Logged user={user} iconClass="ml-2" />
                  </>
                ) : (
                  <>
                    <Link href={"/signup"}>
                      <Button className="font-extrabold rounded-xl">
                        Sign-In
                      </Button>
                    </Link>
                    <Link href={"/login"}>
                      <Button className="font-extrabold rounded-xl">
                        Log-In
                      </Button>
                    </Link>
                  </>
                )}
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default BasicMenu;
