import Navbar from "@/components/custom/Navbar";
import { getSession } from "@/lib/getSession";
import { ClientUser, USer } from "@/types/types";
import { redirect } from "next/navigation";

export default async function layout({children}:{children:React.ReactNode}) {
  const session =  await getSession()
  const user:any= session?.user || {};
  console.log(user);
  
  const USER ={
    _id:user._id,
    userName: user.userName,
    dp: user.dp,
    firstName: user.firstName,
    lastName: user.lastName,
    bio:user.bio,
    email: user.email,
    contact: user.contact,
    password: user.password,
    id: user.id,
    createdAt: user.createdAt,
    eventsInvolvedIn: user.eventsInvolvedIn,
    eventsAttended: user.eventsAttended,
    eventsToBeAttended: user.eventsToBeAttended,
    wishToAttended: user.wishToAttended,
  }
  // const email = user?.email;
  // const dp = user?.dp;
  // console.log(user , "User logged in 🍻");
  console.log("User logged in 🍻")
  if(!session){
    redirect('/login')
  }
  return (
   <>
   <Navbar Login={session?true:false} user={user}/>
   <main>
    {children}
   </main>
   </>
  );
}

