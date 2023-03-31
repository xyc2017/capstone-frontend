import {Form} from "react-router-dom"

const NewGoal=()=>{
    return (
        <div>
            <Form action="/create" method="post">
                <input type="text" name="goal" placeholder="Enter goal here" />
                <input type="date" name="dueDate"/>
                <input type="checkbox" name="completed" />
                <div><button>Add New Goal</button></div>
            </Form>
        </div>
    )
}

export default NewGoal