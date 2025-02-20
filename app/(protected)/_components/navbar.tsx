"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-secondary mt-5 flex flex-col sm:flex-row justify-between items-center p-4 rounded-xl w-[95%] sm:w-[95%] shadow-sm mx-auto">
      <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-x-2 w-full sm:w-auto">
        <Button
          asChild
          variant={pathname === "/solar" ? "default" : "outline"}
          className="w-[calc(50%-0.25rem)] sm:w-auto"
        >
          <Link href="/solar">Insights</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/server" ? "default" : "outline"}
          className="w-[calc(50%-0.25rem)] sm:w-auto"
        >
          <Link href="/server">Server</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/client" ? "default" : "outline"}
          className="w-[calc(50%-0.25rem)] sm:w-auto"
        >
          <Link href="/client">Client</Link>
        </Button>
        <Button 
          asChild 
          variant={pathname === "/admin" ? "default" : "outline"}
          className="w-[calc(50%-0.25rem)] sm:w-auto"
        >
          <Link href="/admin">Admin</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/settings" ? "default" : "outline"}
          className="w-[calc(50%-0.25rem)] sm:w-auto"
        >
          <Link href="/settings">Settings</Link>
        </Button>
      </div>
      <UserButton className="mt-4 sm:mt-0"/>
    </nav>
  );
};
