import {ReactNode} from "react";
import {Header} from "@/app/components/header";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-grow px-[64px]">
        {children}
      </div>
    </div>
  );
};