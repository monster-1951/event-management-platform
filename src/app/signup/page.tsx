"use client";
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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { register } from "@/action/actions";

const SignUp = () => {
  const [show, setshow] = useState(true);

  const togglePassword = () => {
    setshow(!show)
  }
  
  return (
    <div className="w-[75%] lg:w-[50%] mx-auto flex flex-col min-h-screen">
      <Card className="glass my-auto">
        <CardHeader>
          <CardTitle className="border-b-2 py-2 text-center te">
            SIGN-UP INTO THE-EVENT
          </CardTitle>
        </CardHeader>
        <CardContent >
          <form className="flex flex-col" action={register}>
            <div className="flex p-3">
              <Label className="w-[30%]">
                <p className="p-3">First Name</p>
              </Label>
              <Input
                type="text"
                name="firstName"
                className="placeholder:italic"
                placeholder="Your First Name"
                required
              />
            </div>

            <div className="flex p-3">
              <Label className="w-[30%]">
                <p className="p-3">Last Name</p>
              </Label>
              <Input
                type="text"
                name="lastName"
                className="placeholder:italic"
                placeholder="Last Name"
              />
            </div>

            <div className="flex p-3">
              <Label className="w-[30%]">
                <p className="p-3">Email Address</p>
              </Label>
              <Input
                type="email"
                name="email"
                className="placeholder:italic"
                placeholder="Your Email address"
                required
              />
            </div>

            <div className="flex p-3">
              <Label className="w-[30%]">
                <p className="p-3">Mobile Number</p>
              </Label>
              <Input
                type="tel"
                name="contact"
                className="placeholder:italic"
                placeholder="Mobile Number"
              />
            </div>

            <div className="flex justify-around p-3">
              <Label className="w-[30%]">
                <p className="p-3">Password</p>
              </Label>
              <Input
                type={show?"text":"password"}
                name="password"
                className="placeholder:italic"
                placeholder="Password"
                required
              />

              <Button
                onClick={togglePassword}
                className="z-10 absolute -mr-[80%]"
                type="button"
              >
                {show ? <FaEye /> : <FaEyeSlash />}
              </Button>
            </div>

            <div className="flex p-3 justify-around">
              <Label className="w-[30%]">
                <p className="p-3">Confirm Password</p>
              </Label>
              <Input
                type={show?"text":"password"}
                name="confirmPassword"
                className="placeholder:italic"
                placeholder="Confirm Password"
                required
               />

              <Button
                onClick={togglePassword}
                className="z-10 absolute -mr-[80%]"
                type="button"
              >
                {show ? <FaEye /> : <FaEyeSlash />}
              </Button>
            </div>
            <div className="flex p-5 justify-around border-t-2">
              <Link href={"/login"}>
                <Button className="border w-fit">LOG IN</Button>
              </Link>
              <Button className="border w-fit">SIGN-UP</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="px-10"></CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
