import { fetchAllEvents } from '@/action/actions';
import EventCard from '@/components/custom/EventCard';
import User from '@/DataBase/models/User.model';
import { getSession } from '@/lib/getSession';
import { Event } from '@/types/types';
import React from 'react'
import { event1 } from '@/constants';
const AllEvents =async () => {
  const session = await getSession();
  const user: any = session?.user || {};
  
  const Events = await fetchAllEvents();
//   console.log(Events);
  
  const event = event1
  // console.log(event);
  
  return (
    <div className='glass grid sm:grid sm:{`${Events} grid-cols-2`} md:grid-cols-3 border'>
   {Events.map(async (event: Event) => {
        const id = event.organizer;
        const organizer = await User.findById(id);
        console.log(organizer.userName, "🍻 is the organizer of event ",event.name);
        return (
          <EventCard
            CardClass="glass mx-auto w-full sm:h-full md:h-full text-center "
            banner={event.banner}
            category={event.category}
            date={event.date}
            description={event.description}
            name={event.name}
            organizer={organizer}
            seats={event.seats}
            time={event.time}
            venue={event.venue}
            noOfInterests={event.noOfInterests}
            _id={event._id}
            key={event._id}
          />
        );
      })}
{/*       
      <EventCard
            CardClass="glass mx-auto w-full sm:h-full md:h-full text-center "
            banner={event.banner}
            category={event.category}
            date={event.date}
            description={event.description}
            name={event.name}
            organizer={user}
            seats={event.seats}
            time={event.time}
            venue={event.venue}
            noOfInterests={event.noOfInterests}
          />
      <EventCard
            CardClass="glass mx-auto w-full sm:h-full md:h-full text-center "
            banner={event.banner}
            category={event.category}
            date={event.date}
            description={event.description}
            name={event.name}
            organizer={user}
            seats={event.seats}
            time={event.time}
            venue={event.venue}
            noOfInterests={event.noOfInterests}
          />
      <EventCard
            CardClass="glass mx-auto w-full sm:h-full md:h-full text-center "
            banner={event.banner}
            category={event.category}
            date={event.date}
            description={event.description}
            name={event.name}
            organizer={user}
            seats={event.seats}
            time={event.time}
            venue={event.venue}
            noOfInterests={event.noOfInterests}
          />
      <EventCard
            CardClass="glass mx-auto w-full sm:h-full md:h-full text-center "
            banner={event.banner}
            category={event.category}
            date={event.date}
            description={event.description}
            name={event.name}
            organizer={user}
            seats={event.seats}
            time={event.time}
            venue={event.venue}
            noOfInterests={event.noOfInterests}
          />
      <EventCard
            CardClass="glass mx-auto w-full sm:h-full md:h-full text-center "
            banner={event.banner}
            category={event.category}
            date={event.date}
            description={event.description}
            name={event.name}
            organizer={user}
            seats={event.seats}
            time={event.time}
            venue={event.venue}
            noOfInterests={event.noOfInterests}
          />
      <EventCard
            CardClass="glass mx-auto w-full sm:h-full md:h-full text-center "
            banner={event.banner}
            category={event.category}
            date={event.date}
            description={event.description}
            name={event.name}
            organizer={user}
            seats={event.seats}
            time={event.time}
            venue={event.venue}
            noOfInterests={event.noOfInterests}
          />
      <EventCard
            CardClass="glass mx-auto w-full sm:h-full md:h-full text-center "
            banner={event.banner}
            category={event.category}
            date={event.date}
            description={event.description}
            name={event.name}
            organizer={user}
            seats={event.seats}
            time={event.time}
            venue={event.venue}
            noOfInterests={event.noOfInterests}
          />
      <EventCard
            CardClass="glass mx-auto w-full sm:h-full md:h-full text-center h-[30%]"
            banner={event.banner}
            category={event.category}
            date={event.date}
            description={event.description}
            name={event.name}
            organizer={user}
            seats={event.seats}
            time={event.time}
            venue={event.venue}
            noOfInterests={event.noOfInterests}
          /> */}
    </div>
  )
}

export default AllEvents