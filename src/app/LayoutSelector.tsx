"use client"
import { usePathname } from "next/navigation";

import UserLayout from "./layouts/user/Userlayout";
import AdminLayout from "./layouts/admin/layout";


export default function LayoutSelector({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  if (pathname.startsWith("/admin")) {
    return <AdminLayout>{children}</AdminLayout>;
  }
  
  return <UserLayout>{children}</UserLayout>;
}