import React from 'react'

const Table = () => {
  return (
    <div class = "mb-[4%]">
        <div class = "mb-5">Current Time</div>

        <div class = "flex justify-center align-middle w-[100%] border-t-2 border-b h-[8vh]">
            <div class = "basis-1/5 flex flex-col justify-center align-middle pl-5">
                <div class = "font-bold">Queue 1</div>
                <div class = "text-xs">Quantum 1</div>
            </div>
            <div class = "basis-1/5 bg-[#C7B2E0]">1</div>
            <div class = "basis-1/5 bg-[#]">2</div>
            <div class = "basis-1/5 bg-[#C7B2E0]">3</div>
            <div class = "basis-1/5 bg-[#]">4</div>
        </div>

        <div class = "flex justify-center align-middle w-[100%] border-t border-b h-[8vh]">
            <div class = "basis-1/5 flex flex-col justify-center align-middle pl-5">
                <div class = "font-bold">Queue 3</div>
                <div class = "text-xs">Quantum 1</div>
            </div>
            <div class = "basis-1/5 bg-[#C7B2E0]">1</div>
            <div class = "basis-1/5">2</div>
            <div class = "basis-1/5 bg-[#C7B2E0]">3</div>
            <div class = "basis-1/5">4</div>
        </div>

        <div class = "flex justify-center align-middle w-[100%] border-t border-b h-[8vh]">
            <div class = "basis-1/5 flex flex-col justify-center align-middle pl-5">
                <div class = "font-bold">Queue 4</div>
                <div class = "text-xs">Quantum 1</div>
            </div>
            <div class = "basis-1/5 bg-[#C7B2E0]">1</div>
            <div class = "basis-1/5">2</div>
            <div class = "basis-1/5 bg-[#C7B2E0]">3</div>
            <div class = "basis-1/5">4</div>
        </div>

        <div class = "flex justify-center align-middle w-[100%] border-t border-b-2 h-[8vh]">
            <div class = "basis-1/5 flex flex-col justify-center align-middle pl-5">
                <div class = "font-bold">Queue 5</div>
                <div class = "text-xs">Quantum 1</div>
            </div>
            <div class = "basis-1/5 bg-[#C7B2E0]">1</div>
            <div class = "basis-1/5">2</div>
            <div class = "basis-1/5 bg-[#C7B2E0]">3</div>
            <div class = "basis-1/5">4</div>
        </div>
    </div>
  )
}

export default Table