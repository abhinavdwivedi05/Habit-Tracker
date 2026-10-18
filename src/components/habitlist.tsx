import { Button } from "./button"
import {eachDayOfInterval, endOfWeek, format, isFuture, startOfWeek} from "date-fns"
export function HabitList(){

    const habits=[{id:1, name:"Drink Water"}, {id:2, name:"Exercise"}, {id:3, name:"Read Book"}]

    if (habits.length === 0) {
        return <h1 className="text-center px-4 text-zinc-500">No Habit Yet. Add One Above!</h1>
    } 
    return <div className="flex flex-col gap-3">
        {habits.map(habits => 
            (<Habititem key={habits.id} habit={habits}/>
 
        ))}
    </div>
}
type Habititemprops={
    habit:{
        id:number
        name:string
    }
}

function Habititem({habit}: Habititemprops){
    const date=eachDayOfInterval({
        start:startOfWeek(new Date(),{weekStartsOn:1}),
        end: endOfWeek(new Date(), {weekStartsOn:1})
    }) 
    
    return <div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between ">
            <div className="flex gap-3 items-center">

            <span className="font-medium"> {habit.name} </span>
            <span className="text-sm text-amber-400 "> 🔥3</span>
             
            </div>

            <Button variant="ghost" className="text-sm">Delete </Button>
        </div>

        <div className="flex gap-6 items-center">
            {date.map(date=> (
                <Button className="flex flex-1 flex-col items-center gap-0.5 rounded-lg text-xs" key={date.toISOString()} >
                    <span className="font-medium">
                        {format(date, "EEE")}
                    </span>
                    <span>
                        {format(date, "d")}
                    </span>
                </Button>
            ))}
        </div>
      

    </div>
}