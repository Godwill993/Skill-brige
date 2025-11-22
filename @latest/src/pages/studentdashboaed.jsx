
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, School, User, Bell } from "lucide-react";
export default function StudentDashboard() {
return (
<div className="flex bg-gray-100 h-screen">
<Sidebar />


<div className="flex-1 p-4 overflow-y-scroll">
<Topbar />
<DashboardStats />
<OpportunitiesList />
<ProfileCard />
</div>
</div>
);
}