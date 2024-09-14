import { fetchAllEvents } from "@/action/actions";
import AllEvents from "@/components/custom/AllEvents";
import EventCard from "@/components/custom/EventCard";
import EventCreate from "@/components/custom/EventCreate";
import Navbar from "@/components/custom/Navbar";
import User from "@/DataBase/models/User.model";
import { getSession } from "@/lib/getSession";
import { Event, USer } from "@/types";

export default async function Home() {
  const session = await getSession();
  const user: any = session?.user || {};

  const Events = await fetchAllEvents();
  

  const event = Events[0];
  return (
    <>
      <Navbar Login={session ? true : false} user={user} />
      <AllEvents/>
    </>
  );
}
