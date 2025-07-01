
import useNavbarStore from "@/store/NavbarStore";
import useServicesStore from "@/store/ServiceStore";
import { usePathname , useRouter} from "next/navigation";

import React, { useState } from "react";

const NavbarMobileMenu: React.FC = () => {
  const  pathname  = usePathname()
  const router = useRouter()
  const { closeNavbar } = useNavbarStore();
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const { setSelectedServiceId } = useServicesStore();

  const menus = [
    {
      name: "Home",
      link: "/"
    },

    {
      name: "Services",
      link: "/services"
    },
    {
      name: "Pricing",
      link: "/pricing"
    },
    {
      name: "Contact",
      link: "/contact"
    },
    {
      name: "Careers",
      link: "/careers"
    },
    {
      name: "Blog",
      link: "/blog"
    },
    {
      name: "About Us",
      link: "/aboutUs"
    }
  ];

  const navigateToPage = (link: string, menuName?: string) => {
    if (menuName === "Services") {
      setShowServicesMenu(!showServicesMenu);
      return;
    }
    router.push(link);
    closeNavbar();
  };

  return (
    <div>
      {menus.map((menu, index) => (
        <React.Fragment key={index}>
          <div
            onClick={() => navigateToPage(menu.link, menu.name)}
            className={`flex items-center justify-between py-4 border-b text-black border-primary ps-4 cursor-pointer ${
              pathname === menu.link ? "border-b-primary" : "border-b-gray-200"
            }`}
          >
            <p>{menu.name}</p>
            {menu.name === "Services" && (
              <span className="pr-4 text-black cursor-pointer">{showServicesMenu ? "−" : "+"}</span>
            )}
          </div>
          {menu.name === "Services" && showServicesMenu && (
            <div className="bg-gray-50 text-black">
              <MobileServicesSubmenu 
                onServiceSelect={(id: number) => {
                  closeNavbar();
                  router.push('services')
                  setSelectedServiceId(id);
                }}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

interface MobileServicesSubmenuProps {
  onServiceSelect: (id: number) => void;
}

const MobileServicesSubmenu: React.FC<MobileServicesSubmenuProps> = ({
  onServiceSelect
}) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const servicesData = {
    Messaging: [
      { id: 1, title: "A2P Messaging" },
      { id: 2, title: "RCS Business Messaging" },
      { id: 3, title: "Viber Business Messages" },
      { id: 4, title: "Whatsapp Business Messages" },
      { id: 5, title: "2 Way Solution" },
      { id: 6, title: "Acculync" },
      { id: 7, title: "Mail 2 SMS" },
      { id: 8, title: "CPAAS" },
      { id: 9, title: "Omnichannel Communications" }
    ],
    Operator: [
      { id: 10, title: "SMSC" },
      { id: 11, title: "Instant Virtual Number" }
    ],
    Voice: [
      { id: 12, title: "Outbound Dealer" },
      { id: 13, title: "IVR" },
      { id: 14, title: "Missed Call" },
      { id: 15, title: "Click 2 Call" },
      { id: 16, title: "SMS 2 Call" }
    ],
    Marketing: [{ id: 17, title: "Email Marketing" }],
    Identity: [{ id: 18, title: "Verified SMS" }],
    "Website Development": [
      { id: 19, title: "Website Development" },
      { id: 20, title: "Website Designing" }
    ]
  };

  return (
    <div className="pl-8">
      {Object.entries(servicesData).map(([category, items]) => (
        <div
          key={category}
          className="border-b border-gray-200 last:border-b-0"
        >
          <div
            className="py-3 flex items-center justify-between pr-4 font-medium cursor-pointer"
            onClick={() =>
              setExpandedCategory(
                expandedCategory === category ? null : category
              )
            }
          >
            <span>{category}</span>
            <span>{expandedCategory === category ? "−" : "+"}</span>
          </div>
          {expandedCategory === category && (
            <div className="pb-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="py-2 pl-4 text-sm hover:bg-gray-100 cursor-pointer"
                  onClick={() => onServiceSelect(item.id)}
                >
                  {item.title}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavbarMobileMenu;
