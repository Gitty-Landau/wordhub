import { StarIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import { NavigationMenu, NavigationMenuList } from "./ui/navigation-menu";
import { titleCase } from "@/utils/strings";
import { cn } from "@/lib/utils";

const NAV_SPECS = [
  { path: "/", Icon: StarIcon },
  { value: "dictionary", path: "/dictionary" },
  { value: "thesaurus", path: "/thesaurus" },
  {
    value: "enhance",
    path: "/enhance",
    className: "animate-border",
  },
];

const Navbar = () => {
  return (
    <div className="h-[var(--nav-height)] grid place-items-center">
      <NavigationMenu className="h-fit w-fit md:max-w-[80%] border rounded-full p-2">
        <NavigationMenuList className="gap-4 flex">
          {NAV_SPECS.map(({ value, Icon, path, className }, i) => (
            <NavLink
              key={i}
              className={({ isActive }) => {
                return cn(
                  `flex-row gap-2 items-center text-sm rounded-full hover:bg-accent p-2 transition text-foreground/80 hover:text-foreground duration-300 bg-background`,
                  {
                    "bg-accent text-foreground": isActive,
                  },
                  className
                );
              }}
              to={path}
            >
              {Icon && <Icon className="h-4.5 w-4.5" />}
              {value && titleCase(value)}
            </NavLink>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
