"use client";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import NavbarMobile from "@/components/navbar/NavbarMobile";
import Topbar from "@/components/TopBar";
import useNavbarStore from "@/store/NavbarStore";

export default function UserLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const { isOpen } = useNavbarStore();
  return (
    <div className="h-auto">
      <Topbar />
      <Navbar />
      
      {isOpen && <NavbarMobile />}

      {children}
      <Footer />
    </div>
  );
}
