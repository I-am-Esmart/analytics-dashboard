"use client";
import DashboardLeft from "@/components/dashboard/dashboard_left/DashboardLeft";
import DashboardRight from "@/components/dashboard/dashboard_right/DashboardRight";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

const page = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Sidebar />
      <DashboardLeft />
      <DashboardRight />
    </div>
  );
};

export default page;
