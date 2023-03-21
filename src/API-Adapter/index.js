const URL = "https://fitness-tracker-emcu.onrender.com";

export const registerNewUserCall = async (username, password) => {
  try {
    const response = await fetch(`${URL}/api/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });

    const result = await response.json();
    return result;
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
        user: {
          username: username,
          password: password,
        },
      }),
    });

    const result = await response.json();
    return result;
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
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getAllUserRoutinesCall = async (username) => {
  try {
    const response = await fetch(`${URL}/${username}/routines`, {
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
    return result;
  } catch (error) {
    console.log(error);
  }
};
