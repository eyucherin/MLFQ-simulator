import React from "react";

const UserInput = (props) => {
  return (
    <form className=" flex mb-4 w-[100%] rounded-full bg-[#F8F3FE] shadow-[4px 4px 10px 5px rgba(0, 0, 0, 0.1)] drop-shadow-lg">
      <div className="text-xl font-bold w-[30%]  mx-[3%] my-[1%] pl-[2%] p-2">
        {props.name}
      </div>
      <div className = "w-[70%] grid grid-cols-4 gap-4 pr-4">
          <input  id="arrival_time" type="number" className=" px-6 my-[5%] mx-[3%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md "></input>
          <input  id="cpu-burst" type="number" className=" px-6 my-[5%] mx-[3%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md "></input>
          <input  id="io_burst" type="number" className=" px-6 my-[5%] mx-[3%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md "></input>
          <input  id ="total_time" type="number" className=" px-6 my-[5%] mx-[3%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md "></input>
      </div>

      {/* input with text */}
    </form>
  );
};

export default UserInput;
