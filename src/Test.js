import { useRecoilState } from "recoil";
import testState from "./atom/bannerCount";

function Test(){
    const [test, setTest] =useRecoilState(testState);

    return (
        <button onClick={()=>{setTest(test+1)}}>클릭</button>
    );
}
export default Test 
