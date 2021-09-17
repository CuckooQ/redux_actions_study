import axios from "axios";

export async function getUsers() {
  try {
    const res = await axios.get("https://api.github.com/users");
    return res.data;
  } catch (error) {
    throw error;
  }
}
