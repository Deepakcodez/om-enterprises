import { cn } from "@/utills/cn";
import React from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

interface InputProps {
  label?: string;
  type?: string;
  placeholder: string;
  className?: string;
  labelClass?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder="enter Something",
  label= false,
  labelClass,
  className,
  name,
  value,
  onChange,
  onKeyDown,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className="flex items-center">
      <div className="w-full">
        {label && <h1 className={cn(`md:text-white text-black `,labelClass)}> {label} </h1>}
        <div className="flex items-center justify-between relative bg-white border  rounded-md">
          <input
            type={
              type === "password" ? (showPassword ? "text" : "password") : type
            }
            name={name}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            className={cn(
              ` outline-none border-gray-800/20 bg-white duration-300  p-3 w-full  rounded-md`,
              className
            )}
          />
          {type === "password" && (
            <div
              className="text-black/50"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;
