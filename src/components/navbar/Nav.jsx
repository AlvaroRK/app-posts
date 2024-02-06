import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Posts", "Photos", "Users"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">App-posts</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link className="text-black" href="#" aria-current="page">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
export default Nav;
