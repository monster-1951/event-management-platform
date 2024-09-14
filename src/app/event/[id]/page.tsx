import Navbar from "@/components/custom/Navbar";
import Eevent from "@/DataBase/models/Event.model";
import { getSession } from "@/lib/getSession";
import { Event } from "@/types/types";
import React from "react";

const Events = async ({ params }: { params: { id: string } }) => {
  const session = await getSession();
  const user: any = session?.user || {};
  const ThisEvent: Event | null = await Eevent.findById(params.id);

  return (
    <>
      <Navbar Login={session ? true : false} />
      
    </>
  );
};

export default Events;
