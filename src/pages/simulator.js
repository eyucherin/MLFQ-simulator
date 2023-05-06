export const simulate = (processes) => {
  // Processes is an array of objects, sorted by arrival time
  // processes: [{arrivalTime: 0, processId: 1}, {arrivalTime: 0, processId: 3}, {arrivalTime: 1, processId: 2}}]

  let readyQueues = [];
  let queue1 = [];
  let queue2 = [];
  let queue3 = [];
  let queue4 = [];
  let queue5 = [];
  let runningProcesses = [];
  let history = [];

  let currentTime = 0;
  let quantum = 1;

  const findFirstRunnableProcess = () => {
    // Find the first process that isRunnable in the highest priority queue
    // If there is no process that is runnable, move to the next queue
    const queues = [queue1, queue2, queue3, queue4, queue5];

    for (let queueId = 0; queueId < queues.length; queueId++) {
      const queue = queues[queueId];

      if (queue.length > 0) {
        for (let i = 0; i < queue.length; i++) {
          const processId = queue[i];
          const process = getProcessById(processId); // Assuming you have a function to get a process by its ID

          if (process.isRunnable) {
            return [processId, queueId + 1]; // Adding 1 to the queueId since it's 0-indexed
          }
        }
      }
    }
    return [null, null]; // No process is runnable
  };

  // while readyQueues, queue1, queue2, queue3, queue4, queue5 are not empty
  while (readyQueues.length > 0 || runningProcesses.length > 0) {
    // While readyQueues not empty, check if arrival time of the first process in readyQueues <= current time
    // If it is, add it to queue1 and remove it from readyQueues
    // keep doing this until we find a process that has an arrival time that is greater than the current time
    while (
      readyQueues.length > 0 &&
      readyQueues[0].arrivalTime <= currentTime
    ) {
      setRunningProcesses(runningProcesses.concat(readyQueues[0].processId));
      queue1.push(readyQueues[0].processId);
      readyQueues.shift();
    }

    // Find the first process that is_runnable in the highest priority queue
    // If there is no process that is runnable, move to the next queue
    // return [processId, queueId]
    const [processId, queueId] = findFirstRunnableProcess();

    // If processId is null: no process is runnable
    //      currentTime += 1
    // Else: Execute the process for 1 time unit
    //      Execute: quantum is same(1) for all the priority queues
    //      1. subtract 1 from remainingCPUTime && subtract 1 from totalTime
    //      2. append this to history
    //             setHistory(history.concat({processId: processId, queueId: queueId, startTime: currentTime}))
    //      3. check remainingCPUTime
    //             remove from the current queue
    //             if totalTime <= 0:   // process is done
    //                      remove from the runningProcesses
    //                      remove from the queue
    //                      (good to have) set isRunnable to false, unBlockedAt to null, remainingCPUTime to null, totalTime to null, priority to null
    //             else:    // process is not done
    //                  If remainingCPUTime > 0:    // move this process to the next lower priority queue
    //                      add to next lower priority queue
    //                      update process.priority = next lower priority
    //                  If remainingCPUTime === 0:  // Go for IO burst
    //                      !If this process ends after IO burst, it will be removed from the queue
    //                      !is not meticulously accurate, but since we do not visualize IO burst, it seems fine
    //                      set isRunnable to false
    //                      randIoBurstValue = randInt(ioBurst-ioVariance, ioBurst+ioVariance)
    //                      if randIoBurstValue > totalTime:    // after IO burst, the process is done
    //                          update totalTime = randIoBurstValue
    //                          remove from the runningProcesses
    //                          remove from the queue
    //                          (good to have) set isRunnable to false, unBlockedAt to null, remainingCPUTime to null, totalTime to null, priority to null
    //                      else:   // after IO burst, the process is not done
    //                          update unBlockedAt = current+randIoBurstValue
    //                          update totalTime = totalTime - randIoBurstValue
    //      4. currentTime += 1

    // Check if there is any process that can be unblocked
    // For each process in runningProcesses:
    //      if process.isRunnable === false:
    //          if process.unBlockedAt <= currentTime:
    //              set isRunnable to true
    //              set unBlockedAt to null
    //              append to the end of the queue(process.priority)

    // Boost all processes in the priority queues to the highest priority queue in every n time units
    // if currentTime % n === 0:
    //      For each queue for priority 2 to 5:
    //          if queue is not empty:
    //              for each process in the queue:
    //                  append to the end of the queue1
    //              empty the queue
  }
  return [
    { processId: 1, queueId: 1, startTime: 0 },
    { processId: 2, queueId: 1, startTime: 1 },
    { processId: 1, queueId: 2, startTime: 2 },
    { processId: 3, queueId: 1, startTime: 3 },
    { processId: 2, queueId: 2, startTime: 4 },
    { processId: 2, queueId: 3, startTime: 5 },
    { processId: 2, queueId: 4, startTime: 6 },
    { processId: 2, queueId: 5, startTime: 7 },
    { processId: 3, queueId: 2, startTime: 8 },
  ];
  //   return history;
};
