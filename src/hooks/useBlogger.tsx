"use client";
import axios from "axios";
import React from "react";
import useCookies from "./useCookies";

const useBlogger = () => {
  const [isBlogger, setIsBlogger] = React.useState<boolean | undefined>(undefined);
  const [loading, setLoading] = React.useState(true);
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
      const role = resp.data?.user?.role;
      if (role === "blogger" || role === "admin") {
        setIsBlogger(true);
      } else {
        setIsBlogger(false);
      }
    } catch (error) {
      setIsBlogger(false);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    validateBlogger();
  }, []);

  return { isBlogger, loading };
};

export default useBlogger;
