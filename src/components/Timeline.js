import { CalendarIcon } from "@heroicons/react/solid";
import React from "react";
import timelinedata from "../data";
import TimeLineItem from "./Timelineitem";

// export default function Timeline(){
//     return(
//         <section id="timeline">
//         <div className="container px-5 py-10 mx-auto">
//           <div className="text-center mb-20">
//             <CalendarIcon className="w-10 inline-block mb-4" />
//             <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
//               Hackathons
//             </h1>
//             <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
//             Previous and Upcoming Hackathons
//             </p>
//           </div>
        

//         </div>
//       </section>
      
//     );
    
// }
const Timeline = (

) =>
    timelinedata.length > 0 && (
        <section id="timeline"><div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
            <CalendarIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                Hackathons
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                Previous and Upcoming Hackathons
            </p>
        </div><div className="timeline-container">
                {timelinedata.map((data, idx) => (
                    <TimeLineItem data={data} key={idx} />
                ))}

            </div>
            </div>
            </section>
    );
export default Timeline;