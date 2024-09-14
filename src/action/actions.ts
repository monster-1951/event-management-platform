"use server";
import { signIn } from "@/auth";
import connectDB from "@/DataBase/helpers/connectDB";
import Eevent from "@/DataBase/models/Event.model";
import User from "@/DataBase/models/User.model";
import { hash } from "bcryptjs";
import { CredentialsSignin } from "next-auth";
import { redirect } from "next/navigation";
import { Event } from "@/types/types";
import { getSession } from "@/lib/getSession";
export const register = async (formData: FormData) => {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const contact = formData.get("contact") as string;
  const password = formData.get("password") as string;
  const user = {
    firstName,
    lastName,
    email,
    contact,
    password,
  };
  console.log(user);
  await connectDB();
  const hashedPassword = await hash(password, 12);

  const alreadyUser = await User.findOne({ email });

  if (alreadyUser) {
    throw new Error("User already exists with this email");
  }

  const newUser = await User.create({
    userName: `${firstName.trim()}_${lastName}`,
    firstName,
    lastName,
    email,
    contact,
    password: hashedPassword,
  });
  console.log(newUser);

  redirect("/login");
};

export const login = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  try {
    await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email,
      password,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      console.log("signed in");
    } catch (error) {
      const someError = error as CredentialsSignin;
      redirect("/");
      return someError.cause;
    }
    redirect("/user");
};

export const createEvent = async (formData: FormData) => {
  const session = await getSession();
  const email = session?.user?.email;
  const EventName = formData.get("EventName") as string;
  const EventBanner = formData.get("eventBanner") as string;
  const Venue = formData.get("venue") as string;
  const Date = formData.get("date") as string;
  const Time = formData.get("time") as string;
  const seats = formData.get("seats") as string;
  const desc = formData.get("description") as string;
  const category = formData.get("category") as string;

  await connectDB();
  const currentUser = await User.findOne({ email });

  const Eventt: Event = {
    name: EventName,
    banner: EventBanner,
    venue: Venue,
    date: Date,
    category,
    description: desc,
    time: Time,
    seats: seats,
    organizer: currentUser._id,
  };
  // console.log(Eventt);
  const newEvent = await Eevent.create(Eventt);
  await User.findByIdAndUpdate(
    currentUser._id,
    { $push: { eventsInvolvedIn: newEvent._id } },
    { new: true, runValidators: true }
  )
    .then((updatedUser) => {
      if (!updatedUser) {
        console.log("User not found");
      } else {
        console.log("Updated user:", updatedUser);
      }
    })
    .catch((error) => {
      console.error("Error updating user:", error);
    });

  console.log(newEvent);
    if(!session){
    redirect("/")
    } else {
      redirect("/user")
    }
};

export const fetchAllEvents = async () => {
  await connectDB();
  const Events =await Eevent.find({})
  // console.log(Events);
  
  return Events;
}

