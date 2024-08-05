"use client";

import Image from "next/image";
import UgoOnoh from "./images/Ugo_Onoh_Poster.jpeg";
import { useRef, useState } from "react";
import { getTimeRemaining } from "@/utils/utils";
import { AiOutlineCloudDownload } from "react-icons/ai";

export default function Home() {
  const downloadLink =
    "drive.google.com/uc?export=download&id=1jqwnCwb0S2Bk5qEg1bg-qzwXTFjFuoiQ";
  const ref = useRef(null);
  const [timeRemaining, setTimeRemaining] = useState({});

  const futureDate = new Date();
  futureDate.setUTCFullYear(2024);
  futureDate.setUTCMonth(7);
  futureDate.setUTCDate(17);
  futureDate.setUTCHours(13);
  futureDate.setUTCMinutes(45);
  futureDate.setUTCSeconds(26);

  const timer = setInterval(
    () => setTimeRemaining(getTimeRemaining(futureDate)),
    1000
  );
  ref.current = timer;

  const { daysToGo, hoursToGo, minsToGo, secsToGo } = timeRemaining;

  return (
    <>
      <div className="container flex flex-col flex-nowrap justify-center items-center mx-auto">
        <div
          ref={ref}
          className="countdown flex flex-row gap-2 items-center justify-center text-2xl my-6"
        >
          <div className="days flex flex-col basis-1/4 shrink-0 items-center justify-center bg-gray-800 border border-[#d8b965] text-[#d8b965] rounded-t-full p-4">
            <span className="">{daysToGo > 0 ? daysToGo : 0}</span>
            <span className="uppercase text-xs">Days</span>
          </div>
          <div className="hours flex flex-col basis-1/4 shrink-0 items-center justify-center bg-gray-800 border border-[#d8b965] text-[#d8b965] rounded-t-full p-4">
            <span>{hoursToGo > 0 ? hoursToGo : 0}</span>
            <span className="uppercase text-xs">Hours</span>
          </div>
          <div className="minutes flex flex-col basis-1/4 shrink-0 items-center justify-center bg-gray-800 border border-[#d8b965] text-[#d8b965] rounded-t-full p-4">
            <span>{minsToGo > 0 ? minsToGo : 0}</span>
            <span className="uppercase text-xs">Mins</span>
          </div>
          <div className="seconds flex flex-col basis-1/4 shrink-0 items-center justify-center bg-gray-800 border border-[#d8b965] text-[#d8b965] rounded-t-full p-4">
            <span className="anim-sec animate-ping text-white">
              {secsToGo > 0 ? secsToGo : 0}
            </span>
            <span className="uppercase text-xs">Secs</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            className="w-[80vw] bg-gray-900 border border-[#d8b965] rounded-lg image-effects"
            src={UgoOnoh}
            alt="Late Princess Madam Esther Ugo Onoh"
            placeholder="blur"
          />
          <div className="flex flex-row justify-center items-center px-6 my-6 text-2xl gap-1 bg-gray-800 border border-[#d8b965] text-[#d8b965] rounded-lg hover:text-gray-100 hover:bg-[#d8b965]">
            <p>
              <button className="p-4" title="Download e-copy">
                {/* daysToGo <= 0 && hoursToGo <= 2 */}
                {daysToGo >= 0 ? (
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`//${downloadLink}`}
                    download
                  >
                    Get E-copy (35MB)
                  </a>
                ) : (
                  <a href="#">E-copy coming soon...</a>
                )}
              </button>
            </p>
            <span className="text-2xl">
              <AiOutlineCloudDownload />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
