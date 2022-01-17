import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "firebaseInit";
import { useRecoilValue } from "recoil";
import { userState } from "state/user";
export default function SelectPage() {
  const userData = useRecoilValue(userState);

  const [chechBox, setCheckBox] = useState([]);
  const [todoLists, setTodoLists] = useState([]);
  useEffect(() => {
    firebaseSelect();
  }, [userData]);
  const firebaseDelete = (list) => {
    db.collection("todolist")
      .doc(list.id)
      .delete()
      .then(() => {
        firebaseSelect();
      });
  };
  const firebaseSelect = () => {
    db.collection("todolist")
      .where("user_id", "==", userData.id)
      .get()
      .then((results) => {
        let List = [];
        results.forEach((result) => {
          List.push(result);
          console.log(result.data());
        });
        setTodoLists(List);
      });
  };

  return (
    <div className="">
      <div className="flex justify-between px-4 pt-2 font-neoh">
        <div>Today</div>
        <Link to="/insert?action=insert">입력</Link>
      </div>
      {todoLists.map((list) => {
        return (
          <div
            className="flex items-center justify-between px-2 m-2 text-xs border rounded-md h-14 font-neol "
            key={list.id}
          >
            <div className="flex">
              <div>
                {list.data().checkState ? (
                  <div className="w-3 h-3 mr-1 bg-pink-200 border"></div>
                ) : (
                  <div className="w-3 h-3 mr-1 border"></div>
                )}
              </div>

              <div>{list.data().title}</div>
            </div>
            <div className="flex">
              <Link to={`/insert?action=update&list=${list.id}`}>
                <div className="mr-1">수정</div>
              </Link>

              <div
                className="cursor-pointer "
                onClick={() => {
                  firebaseDelete(list);
                }}
              >
                삭제
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
