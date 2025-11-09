import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Factory } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Trang chủ" },
    { path: "/revolution-1", label: "Cách mạng 1.0" },
    { path: "/revolution-2", label: "Cách mạng 2.0" },
    { path: "/revolution-3", label: "Cách mạng 3.0" },
    { path: "/revolution-4", label: "Cách mạng 4.0" },
    { path: "/quiz", label: "Kiểm tra" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Factory className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg text-foreground">Industrial Revolutions</span>
        </Link>
        
        <ul className="flex items-center space-x-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-muted",
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "text-foreground"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
