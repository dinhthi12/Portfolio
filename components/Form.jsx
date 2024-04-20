import React from "react";
import { Input } from "./ui/input";
import { User } from "lucide-react";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="name" />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="name" />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="name" />
        <User className="absolute right-6" size={20} />
      </div>
    </form>
  );
};

export default Form;
