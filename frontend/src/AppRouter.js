import { auth, db } from "firebaseInit";
import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SelectPage from "page/SelectPage";
import InsertPage from "page/InsertPage";
import Login from "page/Login";
import KakaoLogin from "component/KakaoLogin";
import Public from "component/Public";
import Private from "component/Private";
import Loading from "component/Loading";
import PageBox from "component/PageBox";
import ReactLoading from "react-loading";
import { useRecoilState } from "recoil";
import { userState } from "state/user";
export default function AppRouter() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useRecoilState(userState);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        await firebaseSelect(user);
        console.debug("로그인됨");
      } else {
        // 로그인 안됨
        console.debug("로그인안됨");
        // navigate("/", { replace: true });
      }
      setLoading(true);
    });
  }, []);

  const firebaseSelect = async (user) => {
    setUser(user);
    db.collection("user")
      .where("id", "==", user.uid)
      .get()
      .then(async (results) => {
        if (Number(results.size) === 0) await firebaseInsert(user);

        results.forEach((result) => {
          //전역 상태로 user 저장!
          // console.log(result.data());
          setUserData(result.data());
        });
      });
  };
  const firebaseInsert = async (user) => {
    const userdata = {
      id: user.uid,
      nickname: user.displayName,
      email: user.email,
    };
    db.collection("user")
      .add(userdata)
      .then((results) => {
        setUserData(userdata);
      });
  };

  return (
    <PageBox>
      <Loading
        isLoading={!loading}
        loadingUI={
          <div className="flex items-center justify-center w-full h-full">
            <ReactLoading
              type={"spin"}
              color={"pink"}
              height={"20%"}
              width={"20%"}
            />
          </div>
        }
      >
        <Routes>
          <Route
            path="/"
            element={
              <Public user={user} restricted={true}>
                <Login />
              </Public>
            }
          />
          <Route
            path="select"
            element={
              <Private user={user}>
                <SelectPage />
              </Private>
            }
          />
          <Route
            path="insert"
            element={
              <Private user={user}>
                <InsertPage />
              </Private>
            }
          />
          <Route path="kakaoRedirect" element={<KakaoLogin />} />
        </Routes>
      </Loading>
    </PageBox>
  );
}
