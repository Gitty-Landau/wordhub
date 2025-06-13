import { StarIcon } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { titleCase } from "@/utils/strings";

const NAV_SPECS = [
  { path: "/", Icon: StarIcon },
  { value: "dictionary", path: "dictionary" },
  { value: "thesaurus", path: "thesaurus" },
  { value: "enhance", path: "enhance" },
];

const Navbar = () => {
  return (
    <div className="h-[var(--nav-height)] grid place-items-center">
      <NavigationMenu className="h-fit w-fit max-w-[80%] border rounded-full px-2 py-2">
        <NavigationMenuList className="gap-4 flex">
          {NAV_SPECS.map(({ value, Icon, path }, i) => (
            <NavigationMenuItem key={i}>
              <NavigationMenuLink asChild>
                <Link
                  to={path}
                  className="flex-row gap-2 items-center text-sm font-roboto-mono"
                >
                  {Icon && <Icon className="h-4.5 w-4.5" />}
                  {value && titleCase(value)}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
