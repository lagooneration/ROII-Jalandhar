"use client";

import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

const AdminPage = () => {
  const onServerActionClick = () => {
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

  const onApiRouteClick = () => {
    fetch("/api/admin")
      .then((response) => {
        if (response.ok) {
          toast.success("Allowed API Route!");
        } else {
          toast.error("Forbidden API Route!");
        }
      })
  }

  return (
    <Card className="w-[600px] h-screen shadow-md mb-10">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">
        🔅 Dashboard 🔅
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess
            message="You are eligible to get innovation insights!"
          />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md gap-x-2">
          <Input type="text" placeholder="Enter Area" />
          <Button onClick={onApiRouteClick}>
            Get Insights
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center">
            Map here
        </div>

        
      </CardContent>
    </Card>
  );
};

export default AdminPage;