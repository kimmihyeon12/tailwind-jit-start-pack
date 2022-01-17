import axios from "axios";
import express from "express";
import dotenv from "dotenv";
import firebaseAdmin from "firebase-admin";
import serviceAccount from "./firebasekey.js";
import bodyparsor from "body-parser";
import cors from "cors";

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
});

const app = express();
app.use(bodyparsor.json());
dotenv.config();

const PORT = 8000;

const whitelist = ["https://todoit.kr", "http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed Origin!"));
    }
  },
};
app.use(cors(corsOptions));
app.get("/", async (req, res) => {
  console.log("gg");
});
app.post("/login/kakao", async (req, res) => {
  console.debug("[카카오 로그인 요청]");
  const { userInfo } = req.body;
  console.log(userInfo);
  // 카카오 유저 정보를 기반으로 생성 or 업데이트
  const firebaseToken = await createFirebaseToken(userInfo).then(
    (userRecord) => {
      console.debug(
        `creating a custom firebase token based on uid ${userRecord.uid}`
      );
      return firebaseAdmin
        .auth()
        .createCustomToken(userRecord.uid, { provider: "KAKAO" });
    }
  );

  res.json({ firebaseToken: firebaseToken });
});

const createFirebaseToken = (kakaoUserInfo) => {
  const userId = `kakao:${kakaoUserInfo.id}`;
  if (!userId) throw new Error("not found kakao user id ");
  const email = kakaoUserInfo.kakao_account.email
    ? kakaoUserInfo.kakao_account.email
    : null;

  return getOrCreateUser(userId, email);
};

const getOrCreateUser = (userId, email) => {
  console.log(`userid ${userId}`);
  return firebaseAdmin
    .auth()
    .getUser(userId)
    .catch((error) => {
      // console.debug(error);
      if (error.code === "auth/user-not-found") {
        const createUser = {
          uid: userId,
          email: email ? email : "",
        };
        return firebaseAdmin.auth().createUser(createUser);
      }
      throw error;
    });
};

app.listen(PORT, () => console.debug(`server is running on ${PORT}`));
