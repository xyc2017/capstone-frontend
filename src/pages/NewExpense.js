import {Form} from "react-router-dom"

const NewExpense=()=>{
    return (
        <div className="new-expense">
            <Form action="/create" method="post">
                <label>Date Occurred: </label>
                <input type="date" name="dateOcurred" />
                <label>Item Name: </label>
                <input type="text" name="itemName" placeholder="Item Name" />
                <label>Price: $</label>
                <input type="number" name="price" placeholder="Price" />  
                <div><button>Add New Expense</button></div>
            </Form>
        </div>
    )
}

export default NewExpense