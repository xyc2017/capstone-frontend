import {Form} from "react-router-dom"

const NewExpense=()=>{
    return (
        <div>
            <Form action="/create" method="post">
                <input type="date" name="dateOcurred" />
                <input type="text" name="itemName" placeholder="Item Name" />
                <input type="number" name="price" placeholder="Price" />  
                <div><button>Add New Expense</button></div>
            </Form>
        </div>
    )
}

export default NewExpense