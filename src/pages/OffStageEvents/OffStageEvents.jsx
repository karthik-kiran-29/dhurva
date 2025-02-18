import React,{useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

import HeroSection from "./section/HeroSection";
import ExploreEventsSection from "./Section/ExploreEventsSection";
import EventsDisplaySection from "./Section/EventsDisplaySection";

const OffStageEvents = ()=>{
  useEffect(()=>{
    Aos.init();
  })

    const EventData = [
        { id: 1, title: "Solo Dancing", image: "" },
        { id: 2, title: "Solo Dancing", image: "" },
        { id: 3, title: "Solo Dancing", image: "" },
        { id: 4, title: "Solo Dancing", image: "" },
        { id: 5, title: "Solo Dancing", image: "" },
        { id: 6, title: "Solo Dancing", image: "" },
        { id: 7, title: "Solo Dancing", image: "" },
        { id: 8, title: "Solo Dancing", image: "" },
        { id: 9, title: "Solo Dancing", image: "" },
      ];
    

    return(
    <div>
      <HeroSection/>
      <ExploreEventsSection EventData={EventData}/>
      <EventsDisplaySection/>
    </div>
    )
}

export default OffStageEvents;