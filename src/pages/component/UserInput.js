import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setArrivalTime,setcpuBurst,setioBurst,settotalTime,setcpuVariance } from "../processSlice";

const UserInput = (props) => {
  const process = useSelector((state) => state.process);
  const dispatch = useDispatch();

  let handleArrivalChange = (event) => {
    const currentVal = event.currentTarget.value;
    dispatch(setArrivalTime(currentVal));
  }

  let handleCPUBurstChange = (event) => {
    const currentVal = event.currentTarget.value;
    dispatch(setcpuBurst(currentVal));
  }

  let handleIOBurstChange = (event) => {
    const currentVal = event.currentTarget.value;
    dispatch(setioBurst(currentVal));
  }

  let handleTotalTimeChange = (event) => {
    const currentVal = event.currentTarget.value;
    dispatch(settotalTime(currentVal));
  }

  let handleCPUVarianceChange = (event) => {
    const currentVal = event.currentTarget.value;
    dispatch(setcpuVariance(currentVal));
  }

  return (
    <form className=" flex mb-4 w-[100%] rounded-full bg-[#F8F3FE] shadow-[4px 4px 10px 5px rgba(0, 0, 0, 0.1)] drop-shadow-lg">
      <div className="text-xl font-bold w-[15%]  mx-[3%] my-[1%] pl-[2%] p-2">
        Process {props.name}
      </div>
      <div className = "w-[90%] grid grid-cols-5 gap-1 pr-6 py-[0.3%]">
          <input  onChange = {handleArrivalChange} id="arrival_time" type="number" className=" px-6 my-[5%] mx-[4%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md "></input>
          <input  onChange = {handleCPUBurstChange} id="cpu-burst" type="number" className=" px-6 my-[5%] mx-[4%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md "></input>
          <input  onChange = {handleIOBurstChange} id="io_burst" type="number" className=" px-6 my-[5%] mx-[4%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md "></input>
          <input  onChange = {handleTotalTimeChange} id ="total_time" type="number" className=" px-6 my-[5%] mx-[4%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md "></input>
          <input  onChange = {handleCPUVarianceChange} id ="cpu_variance" type="number" className=" px-6 my-[5%] mx-[4%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md "></input>
      </div>

      {/* input with text */}
    </form>
  );
};

export default UserInput;
