import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { db } from "firebaseInit";
import { useRecoilValue } from "recoil";
import { userState } from "state/user";
import queryStirng from "query-string";
export default function InsertPage() {
  const search = useLocation().search; // 문자열 형식으로 결과값이 반환된다.
  const queryObj = queryStirng.parse(search); // 문자열의 쿼리스트링을 Object로 변환
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const userData = useRecoilValue(userState);
  const submit = async () => {
    if (queryObj.action === "insert") {
      await db
        .collection("todolist")
        .add({
          user_id: userData.id,
          title: title,
          content: content,
          checkState: false,
        });
    } else if (queryObj.action === "update") {
      db.collection("todolist")
        .doc(queryObj.list)
        .update({
          user_id: userData.id,
          title: title,
          content: content,
          checkState: false,
        })
        .then(() => {
          console.log("udpate완료");
        });
    }
  };

  return (
    <>
      <div className="flex justify-between px-4 pt-2 font-neoh">
        <Link to="/">Today</Link>
        <div>입력</div>
      </div>
      <div className="w-full px-3 mt-2">
        <p className="text-xs font-neob">할일</p>
        <input
          type="text"
          className="w-full p-1 text-sm border font-neol"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="w-full px-3 mt-2">
        <p className="text-xs font-neob">내용</p>
        <textarea
          rows={16}
          type="text"
          className="w-full p-1 text-sm border font-neol"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </div>
      <div className="w-full px-3 mt-2 " onClick={submit}>
        <Link to="/">
          <p className="flex items-center justify-center h-8 text-xs text-white bg-red-200 font-neob">
            확인
          </p>
        </Link>
      </div>
    </>
  );
}
