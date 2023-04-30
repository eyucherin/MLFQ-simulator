import React from 'react'

const UserInput = (props) => {
  return (
    <form className = " flex w-[100%] border border-black rounded-3xl">
        <div className = "text-2xl font-bold w-[33.33%]  mx-[3%] my-[1%] pl-[2%]">{props.name}</div>
        <input id = "arrival_time" type = "text" className = "w-[33.33%] border border-black rounded-2xl mx-[3%] my-[1%]" ></input>
        <input id = "burst_time" type = "text" className = "w-[33.33%] border border-black rounded-2xl ml-[3%] my-[1%] mr-[5%] " ></input>

        {/* input with text */}
    </form>
  )
}

export default UserInput