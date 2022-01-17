import ReactLoading from "react-loading";
function Loading({
  isLoading = false,
  loadingUI = <div>로딩중...</div>,
  children,
}) {
  return isLoading ? loadingUI : children;
}

export default Loading;
