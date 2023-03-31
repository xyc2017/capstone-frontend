import { useLoaderData, Form } from "react-router-dom";

const GoalShow=()=>{
    const goal=useLoaderData()
    return (
        <div>
            <h1>{goal.name}</h1>
            <h2>{goal.dueDate}</h2>
            <h2>{goal.completed}</h2>
            <div>
                <h2>Update Goal</h2>
                <Form action={`/update/${goal.id}`} method="post">
                    <input type="text" name="goal" placeholder="Goal" defaultValue={goal.goal} />
                    <input type="date" name="dueDate" defaultValue={goal.dueDate} />
                    <input type="checkbox" name="completed" defaultValue={goal.completed} />
                    <button>Update Goal</button>
                </Form>
                <Form action={`/delete/${goal.id}`} method="post">
                    <button>Delete Goal</button>
                </Form>
            </div>
        </div>
    )
}

export default GoalShow