import Logout from "./Logout";

export default function PageBox({ children }) {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen text-sm bg-red-50 font-neob">
      <Logout />

      <div className="w-64 overflow-hidden overflow-y-scroll bg-white shadow-md custom-scroll h-4/6">
        {children}
      </div>
    </div>
  );
}
