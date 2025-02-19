// import { Poppins } from "next/font/google";
// import { cn } from "@/lib/utils";

// import { Button } from "@/components/ui/button";
// import { LoginButton } from "@/components/auth/login-button";

// const font = Poppins({
//   subsets: ["latin"],
//   weight: ["600"],
// });

// export default function Home() {
//   return (
//     <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500 to-blue-500">
//       <div className="space-y-6 text-center">
//         <h1
//           className={cn(
//             "text-6xl font-semibold text-white drop-shadow-md",
//             font.className
//           )}
//         >
//           🔐 Auth
//         </h1>
//         <p className="text-white text-lg">A simple authentication service!</p>
//         <div>
//           <LoginButton asChild>
//             <Button variant="secondary" size="lg">
//               Sign In
//             </Button>
//           </LoginButton>
//         </div>
//       </div>
//     </main>
//   );
// }





import dynamic from 'next/dynamic'
import { Suspense, useRef } from 'react'
import Hero from "@/components/sections/hero/Hero";
import VideoBlock from "@/components/sections/videoblock/VideoBlock";
import CoursesGrid from "@/components/sections/coursesgrid/CoursesGrid";
import TeamGrid from "@/components/sections/teamgrid/TeamGrid";
import { CONSULTANTS } from "@/constants/consultants";
import { Footer } from '@/components/landing/Footer';



export default function Home() {
  return (
    <main>
      <Hero 
        title={"ROI Punjab"} 
        description={"Land of the Five Rivers"} 
        button={{
          children: "Know More",
          href: "/"
        }}
      />
      
      <CoursesGrid 
        heading={"Courses"}
        body={"Registrations Open!"}
        courses={[
          { 
            id: "course1",
            steps: [
              {
                id: "step1",
                name: "Social Entrepreneurship",
                seats: 24,
              },
            ],
          },
          {
            id: "course2", 
            steps: [
              {
                id: "step2",
                name: "Smart City Fellowship",
                seats: 6,
              },
            ],
          }
        ]}
      />
      <TeamGrid heading='MENTORS' consultants={CONSULTANTS} />
      <VideoBlock />
      <Footer />
    </main>
  );
}
