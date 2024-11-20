'use client'
import {useState} from 'react'
type Task = {
  name: string;
  time: string;
};

export default function Todo() {

      const [taskList,settaskList]  = useState<Task[]>([]);
    const [taskName, settaskName] = useState<string>("");

    const handleAddTask = ()=>{
      if (taskName.trim()) {
        const newTask = {
            name: taskName,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }
        settaskList([...taskList, newTask])
        settaskName("")
    }
  }
    const handletaskName = (e:React.ChangeEvent<HTMLInputElement>)=>{
        settaskName(e.target.value)
    }

    const handleDeleteTask = (index:number)=>{
        settaskList(taskList.filter((_,i)=>{
            return i!=index
        }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-200 via-blue-200 to-blue-400 grid place-items-center">
            <div className="bg-blue-100 p-8 rounded-2xl shadow-lg w-[600px] space-y-8">
            <div className="space-y-10">
            <h2 className="text-2xl font-bold text-black text-center">
                    Type Here Your Task
                </h2>
                <input type="text" name="task" id="task" value={taskName} onChange={(e)=>handletaskName(e)} className="block leading-10 rounded-2xl w-full px-4 py-2"/>
                <div className="space-y-5 flex items-center flex-col">
                  
                <button className="bg-blue-600/70 px-6 py-4 text-white font-bold rounded-2xl text-2xl" onClick={handleAddTask}>Click to Add Task</button>
                <div className="space-y-5">
                <ul className="font-normal text-xl space-y-5 ">
                  
                    {
                        taskList.map((c,i)=>(
                            <li key={i} className="bg-gray-600 text-white px-4 py-2 rounded-2xl w-[400px] flex justify-between items-center">
                                <div className='flex flex-col w-[250px]'>
                                <span>{c.name}</span></div>
                                <div><span className="text-sm text-gray-300">{c.time}</span></div>
                                <span><button className="bg-gray-400/50 rounded-lg text-xl h-8 w-8 text-white" onClick={()=>handleDeleteTask(i)}>x</button></span>
                            </li>))
                        }
                    
                </ul>
                </div>
            </div>
            </div>
            <footer className="mt-8 text-lg font-medium text-gray-700">
                Total Tasks: {taskList.length}
            </footer>
        </div>
        </div>
    );
}