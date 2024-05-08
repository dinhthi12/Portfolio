import React from "react";
import { Input } from "./ui/input";
import {UserIcon, HomeIcon, MailIcon, PhoneCall } from "lucide-react";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" />
        <UserIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Phone number" />
        <PhoneCall className="absolute right-6" size={20} />
      </div>
    </form>
  );
};

export default Form;
