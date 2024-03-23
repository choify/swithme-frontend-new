import "@/app/ui/globals.css";
import {ReactNode} from "react";
import {Header} from "@/app/components/header";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-x-hidden">
      <Header />

      <div className="px-[64px]">
        {children}
      </div>
    </div>
  );
};