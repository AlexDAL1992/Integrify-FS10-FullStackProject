import axios from "axios";
const baseUrl = "http://localhost:5000/api/v1/users";

const getAllUsers = async () => {
  try {
    const res = await axios.get(baseUrl);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteAUser = async (userId: string) => {
  try {
    const res = await axios.delete(`${baseUrl}/${userId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default { getAllUsers, deleteAUser };
