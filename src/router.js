import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import {IndexLoader, ExpensesLoader, ExpenseLoader, GoalsLoader, GoalLoader} from "./loaders"
import ExpensesPage from "./pages/ExpensesPage"
import NewExpense from "./pages/NewExpense"
import ExpenseShow from "./pages/ExpenseShow"
import GoalsPage from "./pages/GoalsPage"
import NewGoal from "./pages/NewGoal"
import GoalShow from "./pages/GoalShow"
import {createExpense, updateExpense, deleteExpense, createGoal, updateGoal, deleteGoal} from "./actions"

const router=createBrowserRouter(createRoutesFromElements(
    
    <Route path="/" element={<App/>}>

        <Route path="" element={<Index/>} loader={IndexLoader} />
        <Route path="expenses" element={<ExpensesPage/>} loader={ExpensesLoader}/>
        <Route path="expenses/:id" element={<ExpenseShow/>} loader={ExpenseLoader} />
        <Route path="expenses/new" element={<NewExpense/>} />
        <Route path="create" action={createExpense} />
        <Route path="update/:id" action={updateExpense} />
        <Route path="delete/:id" action={deleteExpense} />
        <Route path="goals/:id" element={<GoalShow />} loader={GoalLoader} />
        <Route path="goals/new" element={<NewGoal/>} />
        <Route path="goals" element={<GoalsPage />} loader={GoalsLoader} />
        <Route path="create" action={createGoal} />
        <Route path="update/:id" action={updateGoal} />
        <Route path="delete/:id" action={deleteGoal} />

    </Route>
   
    ))

export default router