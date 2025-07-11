import axios from "axios";
import React from "react";
import useCookies from "./useCookies";

const useBlogger = () => {
  const [isBlogger, setIsBlogger] = React.useState<boolean>(false);
  const { getToken } = useCookies();
  const token = getToken();

  const validateBlogger = async () => {
    try {
      const resp = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/validate`,
        {
          headers: {
            Authorization: `${token}`
          }
        }
      );
      console.log(resp.data.user.role);
      // ✅ Check for "blogger" role
      if (resp.data.user?.role === "blogger" || resp.data.user?.role === "admin") {
        setIsBlogger(true);
      } else {
        setIsBlogger(false);
      }
    } catch  {
      setIsBlogger(false);
    }
  };

  React.useEffect(() => {
    validateBlogger();
  });

  return { isBlogger };
};

export default useBlogger;
