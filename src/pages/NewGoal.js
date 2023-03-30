import {Form} from "react-router-dom"

const NewGoal=()=>{
    return (
        <div>
            <Form action="/create" method="post">
                <input type="text" name="Goal" placeholder="Enter goal here" />
                <input type="date" name="Due Date"/>
                <input type="checkbox" name="Completed?" />
                <div><button>Add New Goal</button></div>
            </Form>
        </div>
    )
}

export default NewGoal