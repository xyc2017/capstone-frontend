import Expenses from "../components/Expenses"
import Goals from "../components/Goals"
import { useLoaderData } from "react-router-dom";
import Chat from "../components/ChatGPT"

const Index=(props)=>{
    const expenses=useLoaderData()
    console.log(expenses, "here are the expenses")
    //const goals=useLoaderData()
    //console.log(goals, "here are the goals")
    return <>
        <div className="expenses">
            {expenses.expenses[0].itemName}
            {expenses.expenses.map((expense)=><Expenses key={expense.id} expense={expense}/>)}
        </div>
        <div className="goals">
            {expenses.goals.map((goal)=><Goals key={goal.id} goal={goal}/>)}
        </div>
        <div className="chat">
            <Chat/>
        </div>
    </>
}

export default Index