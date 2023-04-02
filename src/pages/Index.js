import Expenses from "../components/Expenses"
import Goals from "../components/Goals"
import { useLoaderData } from "react-router-dom";
import Chat from "../components/ChatGPT"

const Index=(props)=>{
    const expenses=useLoaderData()
    console.log(expenses, "here are the expenses")
    //const goals=useLoaderData()
    //console.log(goals, "here are the goals")
    return (
        <div className="index">
        <div className="flex-container">
        {expenses.expenses.map((expense)=>
            <div className="expenses-container expenses-red" key={expense.id}>
                <h2>{expense.itemName}</h2>
                <p>${expense.price}</p>
                <p className="date">{expense.dateOcurred}</p>
            </div>
        )}
    </div>
           
    </div>
    )
}
export default Index