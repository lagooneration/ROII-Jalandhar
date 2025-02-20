// components/admin/stats-display.tsx
"use client";

import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface EnrollmentStats {
  totalCourses: number;
  totalEnrollments: number;
  pendingEnrollments: number;
  approvedEnrollments: number;
}

export const StatsDisplay = () => {
  const [stats, setStats] = useState<EnrollmentStats | null>(null);

  useEffect(() => {
    fetch("/api/admin/enrollment-stats")
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Card className="p-4">
        <h3 className="font-semibold">Total Courses</h3>
        <p className="text-2xl">{stats?.totalCourses || 0}</p>
      </Card>
      <Card className="p-4">
        <h3 className="font-semibold">Pending Enrollments</h3>
        <p className="text-2xl">{stats?.pendingEnrollments || 0}</p>
      </Card>
      <Card className="p-4">
        <h3 className="font-semibold">Approved Enrollments</h3>
        <p className="text-2xl">{stats?.approvedEnrollments || 0}</p>
      </Card>
      <Card className="p-4">
        <h3 className="font-semibold">Total Enrollments</h3>
        <p className="text-2xl">{stats?.totalEnrollments || 0}</p>
      </Card>
    </div>
  );
};