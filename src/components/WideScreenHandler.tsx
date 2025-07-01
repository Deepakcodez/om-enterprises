import React from "react";

interface WideScreenHandlerProps {
  children: React.ReactNode;
  className?: string;
}

const WideScreenHandler: React.FC<WideScreenHandlerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`w-full max-w-[2560px] mx-auto  ${className}`}>
      <div className="grid grid-cols-12 gap-4">
        <div className="hidden 3xl:block 3xl:col-span-2" />
        <div className="col-span-12 3xl:col-span-8">{children}</div>
        <div className="hidden 3xl:block 3xl:col-span-2" />
      </div>
    </div>
  );
};

export default WideScreenHandler;