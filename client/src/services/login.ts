import axios from "axios";
import jwt_decode from "jwt-decode";

export const clientId =
  (process.env.GOOGLE_CLIENT_ID as string) ||
  "7367156687-ci6cn59gllt698sjpklf2c8v7a6lh4ji.apps.googleusercontent.com";

export const handleLogin = async (res: any) => {
  const tokenId = res.credential;
  const response = await axios.post(
    "http://localhost:5000/google-login",
    {},
    {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    }
  );
  const token = await response.data.token;
  const decodedToken = jwt_decode(token) as { [key: string]: any };
  return { token, user: decodedToken };
};
