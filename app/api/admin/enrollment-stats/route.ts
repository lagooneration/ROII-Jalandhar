// app/api/admin/enrollment-stats/route.ts
import { db } from "@/lib/db";
import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const role = await currentRole();

  if (role === UserRole.ADMIN) {
    const stats = await db.$transaction([
      db.course.count(),
      db.enrollment.count(),
      db.enrollment.count({
        where: { status: "PENDING" }
      }),
      db.enrollment.count({
        where: { status: "APPROVED" }
      })
    ]);

    return NextResponse.json({
      totalCourses: stats[0],
      totalEnrollments: stats[1],
      pendingEnrollments: stats[2],
      approvedEnrollments: stats[3]
    });
  }

  return new NextResponse(null, { status: 403 });
}