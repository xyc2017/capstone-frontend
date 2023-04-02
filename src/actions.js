import {redirect} from "react-router-dom"

// deployed API base URL
const URL="https://alfie-backend.onrender.com/"

// expense actions
export const createExpense = async ({ request }) => {
    const formData = await request.formData(); // get form data
    console.log(formData)
    const newExpense = {
      dateOcurred: formData.get("dateOcurred"), 
      itemName: formData.get("itemName"),
      price: formData.get("price"),
    };
    await fetch(URL + "expenses/new", {
      method: "POST", // use uppercase for HTTP methods
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExpense),
    });
    return redirect("/expenses/");
  };
  
  export const updateExpense = async ({ request, params }) => {
    const formData = await request.formData();
    const updatedExpense = {
      dateOcurred: formData.get("dateOcurred"), 
      itemName: formData.get("itemName"),
      price: formData.get("price"),
    };
    console.log(updatedExpense)
    await fetch(`${URL}/expenses/${params.id}/edit`, {
      method: "PUT", // use uppercase for HTTP methods
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedExpense),
    });
    return redirect("/expenses/");
  };
  
  export const deleteExpense = async ({ params }) => {
    const id = params.id;
    await fetch(URL + `/expenses/${id}`, {
      method: "DELETE", // use uppercase for HTTP methods
    });
    return redirect("/expenses/");
  };

// goal actions
export const createGoal = async ({ request }) => {
    const formData = await request.formData(); // get formData
    const newGoal = {
      goal: formData.get("goal"),
      dueDate: formData.get("dueDate"),
      completed: formData.get("completed") === "true", // convert to boolean
    };
    await fetch(URL + "/goals/new", {
      method: "POST", // use uppercase for HTTP methods
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGoal),
    });
    return redirect("/goals/");
  };

export const updateGoal=async({request, params})=>{
    const formData=await request.formData() //get formData
    const updatedGoal={
        goal: formData.get("goal"),
        dueDate: formData.get("dueDate"),
        completed: formData.get("completed"),
    }
    await fetch(URL+"/goals/"+params.id+"/edit", {
        method: "put",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(updatedGoal)
    })
    return redirect("/goals/")
}

export const deleteGoal = async ({ params }) => {
    try {
      const id = params.id;
      await fetch(URL + `/goals/${id}/`, {
        method: "DELETE",
      });
      redirect("/goals/"); // assuming the redirect function is defined
    } catch (error) {
      console.error(error)

    }
}