// actions/admin.ts
"use server";

import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import { db } from "@/lib/db";

export const admin = async (action: string, data?: any) => {
  const role = await currentRole();

  if (role !== UserRole.ADMIN) {
    return { error: "Unauthorized access!" };
  }

  try {
    switch (action) {
      case "GET_COURSE_STATS":
        const stats = await db.course.findMany({
          select: {
            id: true,
            name: true,
            capacity: true,
            _count: {
              select: { enrollments: true }
            }
          }
        });
        return { success: "Stats retrieved", data: stats };

      case "UPDATE_COURSE_STATUS":
        const updated = await db.course.update({
          where: { id: data.courseId },
          data: { status: data.status }
        });
        return { success: "Course status updated", data: updated };
    }
  } catch (error) {
    return { error: "Operation failed" };
  }
};