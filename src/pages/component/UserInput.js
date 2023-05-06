import React from "react";

const UserInput = (props) => {
  return (
    <div>
      <form className=" flex mb-4 w-[100%] rounded-full bg-[#F8F3FE] shadow-[4px 4px 10px 5px rgba(0, 0, 0, 0.1)] drop-shadow-lg">
        <div className="text-l font-bold w-[8%]  mx-[3%] my-[1%] pl-[2%] p-2">
          P{props.name}
        </div>
        <div className="w-[90%] grid grid-cols-6 gap-4 pr-6 py-[0.3%]">
          <input
            id="arrival_time"
            type="number"
            className="px-6 my-[5%] mx-[4%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md "
          ></input>
          <input
            id="cpu_burst"
            type="number"
            className="px-6 my-[5%] mx-[4%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md "
          ></input>
          <input
            id="io_burst"
            type="number"
            className="px-6 my-[5%] mx-[4%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md "
          ></input>
          <input
            id="total_time"
            type="number"
            className="px-6 my-[5%] mx-[4%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md "
          ></input>
          <input
            id="cpu_variance"
            type="number"
            className="px-6 my-[5%] mx-[4%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md "
          ></input>
          <input
            id="io_variance"
            type="number"
            className="px-6 my-[5%] mx-[4%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md "
          ></input>
        </div>
      </form>
    </div>
  );
};

export default UserInput;
