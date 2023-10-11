import { IBottomNavigationSidebarProps } from "../schemas/IComponent-props";
import { NavLink, NavLinkNested } from "../../";
import BottomNavigationSidebarHeader from "./sidebar-header";
import BottomNavigationSidebarFooter from "./sidebar-footer";

export default function BottomNavigationSidebar({
  navLinksItems,
  subLinksItems,
  sidebar,
  onCloseSideBar,
  Link,
}: IBottomNavigationSidebarProps) {
  const { profile } = sidebar;

  return (
    <>
      <BottomNavigationSidebarHeader profile={profile} />

      <aside className="px-6">
        {navLinksItems?.map((navLinkItem, idx) => (
          <NavLink
            key={idx}
            to={navLinkItem.to}
            pathname={navLinkItem.pathname}
            label={navLinkItem.label}
            icon={navLinkItem.icon}
            Link={Link}
          />
        ))}

        {subLinksItems && (
          <NavLinkNested
            pathname={subLinksItems.pathname}
            label={subLinksItems.label}
            icon={subLinksItems.icon}
            sublinks={subLinksItems.subLinks}
            Link={Link}
          />
        )}

        <BottomNavigationSidebarFooter
          onCloseSideBar={onCloseSideBar}
          sidebar={sidebar}
        />
      </aside>
    </>
  );
}
