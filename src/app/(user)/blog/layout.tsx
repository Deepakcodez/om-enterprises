import WideScreenHandler from "@/components/WideScreenHandler";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import React from "react";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <WideScreenHandler>
      <XpaddingWrapper>
        <div className=" h-auto w-full overflow-hidden">{children}</div>
      </XpaddingWrapper>
    </WideScreenHandler>
  );
};

export default BlogLayout;
