import { JSX } from "react/jsx-runtime";
import { Bounded } from "@/components/landing/Bounded";
import { Heading } from "@/components/landing/Heading";
import React from "react";
import { CONSULTANTS } from "@/constants/consultants";
import { SlideIn } from "@/components/landing/SlideIn";
import { Consultant } from "./Consultant";

interface TeamGridProps {
  heading: string;
  consultants: typeof CONSULTANTS;
}

const TeamGrid = ({ heading, consultants }: TeamGridProps): JSX.Element => {
  return (
    <Bounded className="bg-texture relative py-24 bg-brand-navy">
      <SlideIn>
        <Heading as="h2" size="lg" className="mb-8 text-center text-white">
          {heading}
        </Heading>
      </SlideIn>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {consultants.map((consultant, index) => (
          <React.Fragment key={index}>
            {consultant.name && (
              <SlideIn>
                <Consultant index={index} skater={consultant} />
              </SlideIn>
            )}
          </React.Fragment>
        ))}
      </div>
    </Bounded>
  );
};

export default TeamGrid;