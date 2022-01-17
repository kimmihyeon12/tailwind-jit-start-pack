import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, provider } from "firebaseInit";

export default function SelectPage() {
  const login = (name) => {
    if (name === "email") {
      auth
        .createUserWithEmailAndPassword("2_5_3_1@naver.com", "wedfwelkml2")
        .then((result) => {
          console.log(result);
        });
    }
    if (name === "google") {
      auth.signInWithPopup(provider).then((result) => {});
    }
  };
  return (
    <>
      <p className="text-center font-neoh">
        오늘의할일에 <br /> 오신것을 환영합니다
      </p>
      <p
        onClick={() => {
          login("email");
        }}
      >
        이메일
      </p>
      <p
        onClick={() => {
          login("google");
        }}
      >
        구글
      </p>
      <a
        href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIEND_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URL}&response_type=code`}
      >
        카카오
      </a>
    </>
  );
}
