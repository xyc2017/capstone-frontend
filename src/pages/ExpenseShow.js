import { useLoaderData, Form } from "react-router-dom";

const ExpenseShow=()=>{
    const expense=useLoaderData()
    console.log(expense)
    return (
        <div>
            <h1>{expense.itemName}</h1>
            <h2>{expense.dateOcurred}</h2>
            <h2>{expense.price}</h2>
            <div>
                <h2>Update Expense</h2>
                <Form action={`/update/${expense.id}`} method="post">
                    <label>Item Name: </label>
                    <input type="text" name="itemName" placeholder="Item Name" defaultValue={expense.itemName} />
                    <label>Date Occurred: </label>
                    <input type="date" name="dateOcurred" defaultValue={expense.dateOcurred} />
                    <label>Price: $</label>
                    <input type="number" name="price" defaultValue={expense.price} />
                    <button>Update Expense</button>
                </Form>
                <Form action={`/delete/${expense.id}`} method="post">
                    <button>Delete Expense</button>
                </Form>
            </div>
        </div>
    )
}

export default ExpenseShow