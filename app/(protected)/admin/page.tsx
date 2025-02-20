"use client";

import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";

const AdminPage = () => {
  // Server Action for course management
  const onCourseActionClick = () => {
    admin()
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        }
        if (data.success) {
          toast.success(data.success);
        }
      })
  }

  // API Route for enrollment statistics
  const onEnrollmentStatsClick = () => {
    fetch("/api/admin/enrollment-stats")
      .then((response) => {
        if (response.ok) {
          toast.success("Statistics retrieved successfully!");
        } else {
          toast.error("Failed to fetch enrollment statistics!");
        }
      })
  }

  return (
    <Card className="w-[95%] sm:w-[600px] h-[calc(100vh-8rem)] shadow-md mb-10 mx-auto">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">
          🎓 Course Administration
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess
            message="You have access to course administration!"
          />
        </RoleGate>

        {/* Enrollment Statistics Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg border p-3 shadow-md gap-3 sm:gap-0">
          <p className="text-sm font-medium">
            View Enrollment Statistics
          </p>
          <Button onClick={onEnrollmentStatsClick}>
            Fetch Stats
          </Button>
        </div>

        {/* Course Management Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg border p-3 shadow-md gap-3 sm:gap-0">
          <p className="text-sm font-medium">
            Course Management
          </p>
          <Button onClick={onCourseActionClick}>
            Manage Courses
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;