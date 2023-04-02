import {Link} from "react-router-dom"

const Expenses=({expense})=>{
    console.log(expense)
    return(
        <div className="expense">
            <Link to={`/expenses/${expense.id}`}>
                <h1>{expense.itemName}</h1>
                <h2>{expense.dateOcurred}</h2>
                <h2>{expense.price}</h2>
            </Link>
        </div>
    )
}

export default Expenses