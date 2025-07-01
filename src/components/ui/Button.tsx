"use client"
import { cn } from "@/utills/cn";
import React from "react";


interface ButtonProps {
  title: string;
  className?: string;
  Icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean
  onClick?: () => void;
  shimmer? : boolean;
}

const Button: React.FC<ButtonProps> = ({ title, className, Icon,onClick=()=>{} , type = "button", disabled = false , shimmer = true}) => {
  return (
    <button
      className={cn(" cursor-pointer bg-gradient-to-br from-primary1 to-primary group relative duration-300 px-12 py-2 w-fit rounded-sm text-white flex items-center justify-center gap-2 overflow-hidden", className)}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      <h1>{title}</h1>
      {Icon && <span>{Icon}</span>} 
      {
        shimmer &&
      <div className=" h-[12rem] w-12  absolute -left-12 group-hover:left-56 duration-500 -rotate-45 bg-gradient-to-r from-transparent via-white/20 to-transparent "/>
      }
    </button>
  );
};

export default Button;

