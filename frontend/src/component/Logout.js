import { auth } from "firebaseInit";
export default function Logout() {
  const logout = () => {
    console.log("logout");
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("로그아웃성공!");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div onClick={logout}>
      <p className="absolute cursor-pointer top-2 right-2">로그아웃</p>
    </div>
  );
}
