'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ProfPanBar = () => {
    const pathName = usePathname()
    console.log(pathName);
    
  const profPanel = [
   {label: "My Events", route:"/MyEvents"},
   {label: "Wish list" ,route:"/WishList"},
    {label:"Booked Events", route:"/BookedEvents"},
    {label:"Events Attended", route:"/Attended"},
    {label:"Edit Profile", route:"/EditProfile"},
    {label:"Profile", route:"/user/profile"},
  ];
  return (
    <ul>
      {profPanel.map((i: {label:string,route:string}, index: number) => {
        const isActive = pathName === i.route
        return (
         <li key={index} className="py-2">
             <Link href={i.route}  className={`${isActive && 'font-bold underline'}`}>
            {i.label}
          </Link>
         </li>
        );
      })}
    </ul>
  );
};

export default ProfPanBar;
