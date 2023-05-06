import React,{useState,useEffect} from 'react'

const Table = (props) => {
    let [currentTime,setCurrentTime] = useState(0);
    let [priorityBoostTime,setPriorityBoostTime] = useState(10);

    let [queue1,setQueue1] = useState([1]);
    let [queue2,setQueue2] = useState([]);
    let [queue3,setQueue3] = useState([]);
    let [queue4,setQueue4] = useState([]);


    useEffect(()=>{

    },[])

  return (
    <div class = "ml-[4%] mb-[4%] w-[100%]">

            <div className = "relative flex justify-center align-middle w-[100%] border-t-2 border-b h-[8vh]">
                <div className = "absolute border left-[20%] w-[80%] h-[50%] top-[25%]">
                    hello
                </div>
                <div className = "basis-1/5 flex flex-col justify-center align-middle pl-5">
                    <div className = "font-bold">Queue 1</div>
                    <div className = "text-xs">Quantum 1</div>
                </div>
                <div className = "basis-1/5 bg-[#C7B2E0]"></div>
                <div className = "basis-1/5 bg-[#]"></div>
                <div className = "basis-1/5 bg-[#C7B2E0]"></div>
                <div className = "basis-1/5 bg-[#]"></div>
            </div>

            <div className = "flex justify-center align-middle w-[100%] border-t border-b h-[8vh]">
                <div className = "basis-1/5 flex flex-col justify-center align-middle pl-5">
                    <div className = "font-bold">Queue 2</div>
                    <div className = "text-xs">Quantum 1</div>
                </div>
                <div className = "basis-1/5 bg-[#C7B2E0]">1</div>
                <div className = "basis-1/5">2</div>
                <div className = "basis-1/5 bg-[#C7B2E0]">3</div>
                <div className = "basis-1/5">4</div>
            </div>

            <div className = "flex justify-center align-middle w-[100%] border-t border-b h-[8vh]">
                <div className = "basis-1/5 flex flex-col justify-center align-middle pl-5">
                    <div className = "font-bold">Queue 3</div>
                    <div className = "text-xs">Quantum 1</div>
                </div>
                <div className = "basis-1/5 bg-[#C7B2E0]">1</div>
                <div className = "basis-1/5">2</div>
                <div className = "basis-1/5 bg-[#C7B2E0]">3</div>
                <div className = "basis-1/5">4</div>
            </div>

            <div className = "flex justify-center align-middle w-[100%] border-t border-b h-[8vh]">
                <div className = "basis-1/5 flex flex-col justify-center align-middle pl-5">
                    <div className = "font-bold">Queue 4</div>
                    <div className = "text-xs">Quantum 1</div>
                </div>
                <div className = "basis-1/5 bg-[#C7B2E0]">1</div>
                <div className = "basis-1/5">2</div>
                <div className = "basis-1/5 bg-[#C7B2E0]">3</div>
                <div className = "basis-1/5">4</div>
            </div>

            <div className = "flex justify-center align-middle w-[100%] border-t border-b-2 h-[8vh]">
                <div className = "basis-1/5 flex flex-col justify-center align-middle pl-5">
                    <div className = "font-bold">Queue 5</div>
                    <div className = "text-xs">Quantum 1</div>
                </div>
                <div className = "basis-1/5 bg-[#C7B2E0]">1</div>
                <div className = "basis-1/5">2</div>
                <div className = "basis-1/5 bg-[#C7B2E0]">3</div>
                <div className = "basis-1/5">4</div>
            </div>

  
    </div>
  )
}

export default Table