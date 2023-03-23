const URL = "https://fitness-tracker-emcu.onrender.com";
// const URL = "http://localhost:3000";

export const registerNewUserCall = async (username, password) => {
  try {
    const response = await fetch(`${URL}/api/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const result = await response.json();
    return result.token;
  } catch (error) {
    console.log(error);
  }
};

export const userLoginCall = async (username, password) => {
  try {
    const response = await fetch(`${URL}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const result = await response.json();
    return result.token;
  } catch (error) {
    console.log(error);
  }
};

export const getPublicRoutinesCall = async () => {
  try {
    const response = await fetch(`${URL}/api/routines`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    console.log("Public Routines Call", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getAllUserRoutinesCall = async (username) => {
  try {
    const response = await fetch(`${URL}/api/users/${username}/routines`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getAllActivitiesCall = async () => {
  try {
    const response = await fetch(`${URL}/api/activities`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    console.log("Activities Call", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const createNewRoutineCall = async (isPublic, name, goal) => {
  try {
    const response = await fetch(`${URL}/api/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        isPublic: isPublic,
        name: name,
        goal: goal,
      }),
    });

    const result = await response.json();
    console.log("createNewRoutinesCall: ", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const createNewActivityCall = async (name, description) => {
  try {
    const response = await fetch(`${URL}/api/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    });
    const result = await response.json();
    console.log("createNewActivityCall:", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const deleteRoutineCall = async (routineId) => {
  try {
    const response = await fetch(`${URL}/api/routines/${routineId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    // const result = await response.json();
    // return result;
  } catch (error) {
    console.log(error);
  }
};

export const deleteRoutineActivityCall = async (routineActivityId) => {
  try {
    const response = await fetch(
      `${URL}/api/routine_activities/${routineActivityId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const result = await response.json();
    console.log("result: ", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const addActivityToRoutineCall = async (
  routineId,
  activityId,
  count,
  duration
) => {
  try {
    const response = await fetch(
      `${URL}/api/routines/${routineId}/activities`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          routineId: routineId,
          activityId: activityId,
          count: count,
          duration: duration,
        }),
      }
    );
    const result = await response.json();
    console.log("result: ", result);
    return result;
  } catch (error) {
    console.log("An error occured during addActivityToRoutineCall!");
    console.error(error);
    throw error;
  }
};

export const updateRoutineCall = async (routineId, name, goal) => {
  try {
    const response = await fetch(`${URL}/api/routines/${routineId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        name: name,
        goal: goal,
      }),
    });
    // const result = response.json();
    // console.log("result: ", result);
    // return result
  } catch (error) {
    console.log("An error occured during updateRoutineCall!");
    console.error(error);
    throw error;
  }
};
