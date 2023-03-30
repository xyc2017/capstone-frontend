import Goals from "../components/Goals"
import { useLoaderData } from "react-router-dom"

const GoalsPage=(props)=>{
    const goals=useLoaderData()
    return (
            <div>
                {goals.map((goal)=><Goals key={goal.id} goal={goal} />)}
            </div>
        )
}
export default GoalsPage