import Expenses from "../components/Expenses"
import { useLoaderData } from "react-router-dom"

const ExpensesPage=(props)=>{
    const {expenses}=useLoaderData()
    return (
            <div>
                {expenses?.map((expense)=><Expenses key={expense.id} expense={expense} />)}
            </div>
         )
}

export default ExpensesPage