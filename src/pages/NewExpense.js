import {Form} from "react-router-dom"

const NewExpense=()=>{
    return (
        <div>
            <Form action="/create" method="post">
                <input type="date" name="Date OCCurred" placeholder="Date Occurred" />
                <input type="text" name="Item Name" placeholder="Item Name" />
                <input type="number" name="Price $" placeholder="Price" />  
                <div><button>Add New Expense</button></div>
            </Form>
        </div>
    )
}

export default NewExpense