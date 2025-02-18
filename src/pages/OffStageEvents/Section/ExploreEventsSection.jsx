import React, { useEffect } from "react";
import StageEventCard from "@/components/page-components/StageEventCard";

const ExploreEventsSection = (props) => {
  const EventData = props.EventData;

  return (
    <div className="bg-gray-900 min-h-screen p-8 sticky">
      <div className="max-w-7xl mx-auto">
        <h1 
          className="text-white text-4xl font-bold mb-8"
          data-aos="fade-down"
        >
          Explore All Events
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EventData.map((event) => (
            <div
              key={event.id}
              data-aos="fade-up"
              className="h-full"
            >
              <StageEventCard {...event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreEventsSection;