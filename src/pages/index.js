/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import UserInput from "./component/UserInput";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProcess } from "./slices/processSlice";
import Table from "./component/Table";
import ProcessInfo from "./component/ProcessInfo";

export default function Home() {
  const dispatch = useDispatch();
  const processes = useSelector((state) => state.processes);
  const scrollToRef = useRef(null);
  const [num, setNum] = useState(1);
  const [processList, setProcessList] = useState([]);

  const colors = [
    "#F9F871",
    "#F08A5D",
    "#56BD66",
    "#5666BD",
    "#BD569A",
    "#BD5666",
    "#66BD56",
    "#9056BD",
    "#BD9056",
  ];

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
    if (num < 10) {
      setNum(num + 1);
      setProcessList(
        processList.concat(<UserInput key={num} name={num + 1} />)
      );
    }
  };

  const handleSimulateBtn = () => {
    // loop through processList and add each process to the store
    processList.forEach((process, id) => {
      dispatch(
        addProcess({
          id: id + 1,
          color: colors[id - 1],
          cpuBurst: parseInt(process.cpu_burst),
          ioBurst: parseInt(process.io_burst),
          cpuVariance: parseInt(process.cpu_variance),
          ioVariance: parseInt(process.io_variance),
          totalTime: 0,
          isFinished: false,
          isRunnable: false,
          unBlockedAt: 0,
          remainingCPUTime: 0,
        })
      );
      // add to ready queue (arrivalTime, processId)
    });
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
          <div className="flex flex-col pt-14">
            <div className="flex flex-row mb-[1.5%] w-[100%] ">
              <div class="basis-1/6"></div>
              <div class="basis-1/6  text-sm font-bold pl-[1.8%]">
                Arrival Time
              </div>
              <div class="basis-1/6 text-sm font-bold pl-[2%]">CPU Burst</div>
              <div class="basis-1/6 text-sm font-bold pl-[2.7%]">IO Burst</div>
              <div class="basis-1/6 text-sm font-bold pl-[1.8%]">
                Total Time
              </div>
              <div class="basis-1/6 text-sm font-bold pl-[1%]">
                CPU Variance
              </div>
              <div class="basis-1/6 text-sm font-bold pl-[1.8%]">
                IO Variance
              </div>
            </div>
            <UserInput name={1} />
            {processList}
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
          <button className="flex justify-center" onClick={handleSimulateBtn}>
            <a href="#Visualization" className="mt-12">
              <Image
                src="/runBtn.png"
                alt="Simulate button"
                width={180}
                height={84}
              />
            </a>
          </button>
        </div>
      </div>

      <div className="pt-48 px-48">
        <div className="text-5xl font-black" id="Visualization">
          Visualization
        </div>
        <div className="text-base w-96 pt-2">This is how MLFQ works!</div>
        <div className="mt-5">Current Time</div>
        <div className="my-[2%]">
          <div className="flex ">
            <img src={"priorityArrow.png"} className="h-[41vh] " />
            <Table processNum={num} />
          </div>
          <ProcessInfo />
        </div>
      </div>
    </div>
  );
}
