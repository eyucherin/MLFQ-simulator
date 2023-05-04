import Image from "next/image";
import { useRef } from "react";
import UserInput from "./component/UserInput";

export default function Home() {
  const scrollToRef = useRef(null);
  const handleSimulateBtnClick = () => {
    if (scrollToRef.current) {
      window.scrollTo({
        top: scrollToRef.current.offsetTop - 60,
        behavior: "smooth",
      });
    } else {
      console.error("Element not found.");
    }
  };

  const handlePlusBtnClick = () => {
    console.log("Plus Btn clicked");
  };

  return (
    <div className="flex flex-col bg-gradient-to-br from-[#E5CAFB] to-[#8A87C1]">
      <div className="flex flex-col justify-center h-[100vh]">
        <div className="flex justify-between pt-28 pl-48 pr-36">
          <div>
            <div className="text-xl font-bold">CPU Scheduling Simulator</div>
            <div className="text-6xl font-black pt-4">MLFQ</div>
            <div className="text-base w-96 pt-6">
              Multilevel feedback queue, A scheduling system that reduces
              response time for interactive tasks and simultaneously minimizes
              turnaround time, even when we dont have prior knowledge of task
              execution durations!
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/ghosts.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
        </div>
        <button
          className="flex justify-center pt-12"
          onClick={handleSimulateBtnClick}
        >
          <Image
            src="/simulateBtn.png"
            alt="Simulate button"
            width={180}
            height={84}
          />
        </button>
      </div>

      <div className="pt-28 px-48">
        <div
          id="elementIdToScrollTo"
          ref={scrollToRef}
          className="text-5xl font-black"
        >
          Define Tasks
        </div>
        <div className="text-base w-96 pt-2">Provide your processes input</div>
        <div className="flex flex-col">
          <div className="flex flex-col justify-center pt-14">
            <div className = "flex flex-row mb-[1.5%] w-[100%] ">
              <div class="basis-1/3 font-bold"></div>
              <div class="basis-1/6 font-bold px-[4%]">Arrival Time</div>
              <div class="basis-1/6 font-bold px-[4%]">IO Burst</div>
              <div class="basis-1/6 font-bold px-[4%]">CPU Burst</div>
              <div class="basis-1/6 font-bold px-[4%]">Total Time</div>
            </div>
            <UserInput name="Process A" />
            <UserInput name="Process B" />
            <UserInput name="Process C" />
          </div>
          <button
            className="flex justify-center pt-12"
            onClick={handlePlusBtnClick}
          >
            <Image
              src="/plusBtn.png"
              alt="Plus button"
              width={40}
              height={58}
            />
          </button>
        </div>
      </div>

      <div className="pt-48 px-48">
        <div className="text-5xl font-black">Visualization</div>
        <div className="text-base w-96 pt-2">This is how MLFQ works!</div>
        <div className=" py-24">
          <div>Queues</div>
          <div>processes info</div>
          <div>cpu usage</div>
        </div>
      </div>
    </div>
  );
}
