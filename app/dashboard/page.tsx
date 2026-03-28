import dynamic from "next/dynamic";
import { getAllModules } from "@/lib/content";

const DashboardClient = dynamic(() => import("./DashboardClient"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center">
      <div className="text-[#F0EFEB]/30 animate-pulse">Loading your progress...</div>
    </div>
  ),
});

export const metadata = {
  title: "Your Progress — Epiphany Learn",
};

export default function DashboardPage() {
  const modules = getAllModules();
  return <DashboardClient modules={modules} />;
}
