import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

// components
import Aside from "@/components/layout/main/Aside/index";
import Header from "@/components/layout/main/Header/index";
import Content from "@/components/layout/main/Content/index";

// component
const MainLayout: React.FC<MainLayoutProps> = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#FAFAFA]">
      <Aside />
      <main className="flex-auto h-full overflow-auto flex flex-col">
        {/* Content Area */}
        <Header />
        <Content />
      </main>
    </div>
  );
};

export default MainLayout;
