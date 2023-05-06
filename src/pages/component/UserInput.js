import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addProcess,
  setArrivalTime,
  setCpuBurst,
  setIoBurst,
  setTotalTime,
  setCpuVariance,
  getProcess,
} from "../slices/processSlice";

const UserInput = (props) => {
  const dispatch = useDispatch();

  let handleArrivalChange = (event) => {
    const currentVal = parseInt(event.currentTarget.value, 10);
    dispatch(setArrivalTime({ id: props.name, arrivalTime: currentVal }));
  };

  let handleCpuBurstChange = (event) => {
    const currentVal = parseInt(event.currentTarget.value, 10);
    dispatch(setCpuBurst({ id: props.name, cpuBurst: currentVal }));
  };

  let handleIoBurstChange = (event) => {
    const currentVal = parseInt(event.currentTarget.value, 10);
    dispatch(setIoBurst({ id: props.name, ioBurst: currentVal }));
  };

  let handleTotalTimeChange = (event) => {
    const currentVal = parseInt(event.currentTarget.value, 10);
    dispatch(setTotalTime({ id: props.name, totalTime: currentVal }));
  };

  let handleCpuVarianceChange = (event) => {
    const currentVal = parseInt(event.currentTarget.value, 10);
    dispatch(setCpuVariance({ id: props.name, cpuVariance: currentVal }));
  };

  let handleIoVarianceChange = (event) => {
    const currentVal = parseInt(event.currentTarget.value, 10);
    dispatch(setIoVariance({ id: props.name, ioVariance: currentVal }));
  };

  return (
    <div>
      <form className=" flex mb-4 w-[100%] rounded-full bg-[#F8F3FE] shadow-[4px 4px 10px 5px rgba(0, 0, 0, 0.1)] drop-shadow-lg">
        <div className="text-l font-bold w-[8%]  mx-[3%] my-[1%] pl-[2%] p-2">
          P{props.name}
        </div>
        <div className="w-[90%] grid grid-cols-6 gap-4 pr-6 py-[0.3%]">
          <input
            onChange={handleArrivalChange}
            id="arrival_time"
            type="number"
            className=" px-6 my-[5%] mx-[4%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md "
          ></input>
          <input
            onChange={handleCpuBurstChange}
            id="cpu-burst"
            type="number"
            className=" px-6 my-[5%] mx-[4%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md "
          ></input>
          <input
            onChange={handleIoBurstChange}
            id="io_burst"
            type="number"
            className=" px-6 my-[5%] mx-[4%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md "
          ></input>
          <input
            onChange={handleTotalTimeChange}
            id="total_time"
            type="number"
            className=" px-6 my-[5%] mx-[4%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md "
          ></input>
          <input
            onChange={handleCpuVarianceChange}
            id="cpu_variance"
            type="number"
            className=" px-6 my-[5%] mx-[4%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md "
          ></input>
          <input
            onChange={handleIoVarianceChange}
            id="io_variance"
            type="number"
            className=" px-6 my-[5%] mx-[4%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md "
          ></input>
        </div>

        {/* input with text */}
      </form>
    </div>
  );
};

export default UserInput;
