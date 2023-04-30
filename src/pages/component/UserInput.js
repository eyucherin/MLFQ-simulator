import React from 'react'

const UserInput = (props) => {
  return (
    <form className = " flex w-[100%] rounded-full bg-[#F8F3FE] shadow-[4px 4px 10px 5px rgba(0, 0, 0, 0.1)] drop-shadow-lg">
        <div className = "text-2xl font-bold w-[33.33%]  mx-[3%] my-[1%] pl-[2%] p-2">{props.name}</div>
        <input id = "arrival_time" type = "text" className = "w-[33.33%] rounded-full mx-[3%] my-[1%] shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md py-2 px-5" ></input>
        <input id = "burst_time" type = "text" className = "w-[33.33%]  rounded-full ml-[3%] my-[1%] mr-[5%] shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md py-2 px-5" ></input>

        {/* input with text */}
    </form>
  )
}

export default UserInput