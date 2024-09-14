import React from 'react'
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
import { login } from '@/action/actions';

const page = () => {
  return (
    <div className='w-[75%] lg:w-[50%] mx-auto flex flex-col min-h-screen'>
      <Card className="glass my-auto">
        <CardHeader>
          <CardTitle className="border-b-2 py-2 text-center te">
            LOGIN INTO THE-EVENT
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col" action={login}>
           

           
            <div className="flex p-3">
              <Label className="w-[30%]">
                <p className="p-3">Email Address</p>
              </Label>
              <Input type="email" name="email" className="" placeholder='Enter your email or phone numbr'/>
            </div>

           

            <div className="flex p-3">
              <Label className="w-[30%]">
                <p className="p-3">Password</p>
              </Label>
              <Input type="password" name="password" className="" placeholder='Enter your password'/>
            </div>

        
            <div className="flex p-5 justify-around">
              <Link href={'/signup'}><Button className="border w-fit">SIGN-UP</Button></Link>
              <Button className="border w-fit">LOG IN</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="px-10"></CardFooter>
      </Card>

    </div>
  )
}

export default page