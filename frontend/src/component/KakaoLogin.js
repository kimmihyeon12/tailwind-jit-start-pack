import qs from "qs";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "firebaseInit";
export default function KakaoRedirect() {
  const navigate = useNavigate();

  const REST_API_KEY = process.env.REACT_APP_KAKAO_CLIEND_ID;
  const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URL;
  const CLIENT_SECRET = process.env.REACT_APP_KAKAO_CLIENT_SECRET;
  const code = new URL(window.location.href).searchParams.get("code");

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });
    try {
      const res = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        payload
      );
      window.Kakao.init(REST_API_KEY);
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      return res;
    } catch (e) {
      console.log(e);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getUserProfile = async (kakaotoken) => {
    let data = await window.Kakao.API.request({
      url: "/v2/user/me",
    });
    return data;
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const kakaoCustomLogin = async (userInfo) => {
    console.log(userInfo);
    const res = await axios.post(`http://localhost:8000/login/kakao`, {
      userInfo: userInfo,
    });
    auth.signInWithCustomToken(res.data.firebaseToken);
    console.log(res.data.firebaseToken);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const kakaoToken = await getToken();
    const userInfo = await getUserProfile(kakaoToken);
    await kakaoCustomLogin(userInfo);
    navigate("/select", { replace: true });
  }, []);
  return <></>;
}
