import React from "react";
import Link from "next/link";
import { cn } from "@/utills/cn";
import { motion } from "framer-motion";
import { menus } from "./Menus";

interface NavmenuProps {
  pathname: string;
}

interface MenuItem {
  name: string;
  link: string;
  submenu?: MenuItem[];
}

const Navmenu: React.FC<NavmenuProps> = ({ pathname }) => {
  const [activeDropdownPath, setActiveDropdownPath] = React.useState<number[]>([]);
  // Helper function to check active route
const isActive = (link: string) => {
  if (link === "/") return pathname === "/";
  return pathname === link || pathname.startsWith(`${link}/`);
};

  const isDropdownActive = (path: number[]) => {
    // Check if the current path is the prefix of active path
    return (
      activeDropdownPath.length >= path.length &&
      activeDropdownPath
        .slice(0, path.length)
        .every((val, i) => val === path[i])
    );
  };

  const renderMenuItems = (
    items: MenuItem[],
    level = 0,
    path: number[] = []
  ) => {
    return items.map((item, index) => {
      const currentPath = [...path, index];
      const hasSubmenu = item.submenu && item.submenu.length > 0;
      const isActiveDropdown = isDropdownActive(currentPath);

      return (
        <div
          key={`MENU_${level}_${index}`}
          className="relative"
          onMouseEnter={() => hasSubmenu && setActiveDropdownPath(currentPath)}
          onMouseLeave={() => {
            if (level === 0) {
              setActiveDropdownPath([]);
            }
          }}
        >
          <div className="flex items-center">
            <Link
              href={item.link}
              className={cn(
                "cursor-pointer relative flex items-center ",
                level === 0 ? "px-3 py-2" : "px-4 py-2 w-full",
                isActive(item.link)
                  ? "text-gray-700 hover:text-primary"
                  : "text-gray-700 hover:text-primary"
              )}
            >
              <motion.span
                className={cn(
                  "font-medium",
                  level === 0 ? "text-base" : "text-sm"
                )}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {item.name}
              </motion.span>
            </Link>
          </div>

          {level === 0 && isActive(item.link) && (
            <motion.div
              layoutId="nav-underline"
              className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
              initial={false}
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.6
              }}
            />
          )}

          {hasSubmenu && isActiveDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={cn(
                "absolute bg-white shadow-lg rounded-lg z-50 min-w-[200px]   " ,
                level === 0 ? "top-full left-0 " : "top-0 left-full ml-1"
              )}
              onMouseLeave={() => {
                // Clear the dropdown path when leaving the submenu
                if (level > 0) {
                  setActiveDropdownPath(path);
                }
              }}
            >
              {renderMenuItems(item.submenu!, level + 1, currentPath)}
            </motion.div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="relative flex items-center justify-center gap-1 " >
      {renderMenuItems(menus)}
    </div>
  );
};

export default Navmenu;
