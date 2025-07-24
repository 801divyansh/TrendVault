"use client";
import Link from "next/link";
import { Home, Star, Film, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const navItems = [
  { href: "/", label: "Home", icon: <Home /> },
  { href: "/favorites", label: "Favorites", icon: <Star /> },
  { href: "/movies", label: "Movies", icon: <Film /> },
  { href: "/settings", label: "Settings", icon: <Settings /> },
];

export default function Sidebar({
  collapsed,
  setCollapsed,
  onNavigate,
}: {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  // Auto-collapse on small screens, expand on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setCollapsed]);

  return (
    <nav
      className={`h-full rounded-r-2xl transition-all duration-300 bg-white dark:bg-black shadow-lg border-r border-gray-200 dark:border-gray-800 flex flex-col py-8 relative  ${
        collapsed ? "w-15 px-2" : "w-64 px-4"
      }`}
    >
      
      <div className="flex items-center justify-between mb-5">
        {!collapsed && (
          <div className="text-2xl font-bold text-black dark:text-white tracking-wide">
            Dashboard
          </div>
        )}
        <button
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow transition-transform"
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>


      {/* Nav Items */}
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`flex items-center gap-3 px-2 py-2 rounded-lg transition-colors ${
                pathname === item.href
                  ? "bg-gray-200 dark:bg-gray-800 text-black dark:text-white font-semibold"
                  : "hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-300"
              }`}
              onClick={onNavigate}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              {/* Only show label when expanded */}
              {!collapsed && (
                <span className="ml-2">{item.label}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className={`mt-auto text-xs text-gray-400 dark:text-gray-600 text-center pt-8 transition-all duration-300 ${
        collapsed ? "opacity-0 h-0" : "opacity-100 h-auto"
      }`}>
        &copy; {new Date().getFullYear()} TrendVault
      </div>
    </nav>
  );
}