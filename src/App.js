import "./styles/index.css";
import logo from "./assets/img/header/logo.png";

import Slider from "../src/component/Slider";
// 2
import phone from "./assets/img/main-section2/phone.png"
import check from "./assets/img/main-section2/check.png"
//import { useRecoilState } from "recoil";
//import testState from "./atom/testState";
// 3
import backgroud from "./assets/img/main-section3/background.png"
import phone3 from "./assets/img/main-section3/phone.png";
import text1 from "./assets/img/main-section3/text1.png"
import text2 from "./assets/img/main-section3/text2.png"
import text3 from "./assets/img/main-section3/text3.png"
import text4 from "./assets/img/main-section3/text4.png"
//
import iconGroup from "./assets/img/main-section4/icongroup.png"
import { useEffect } from "react";
const App = () => {



    return (
    <div className="App">
        <div className="absolute z-10 flex justify-center w-screen ">
            <div className="flex w-[80vw] items-center justify-between  mt-[2.8vw]">
            <img className="w-[10vw]" src={logo} alt=""/>
            <ul className="flex text-[1.25vw] ">
                <li className="font-neoh mr-[0.9vw]">우아하게 소개</li>
                <li className="font-neob">회사소개</li>
            </ul>
            </div> 
        </div>
        <div className="absolute">
        <div className="w-screen  h-[49.4vw]">
            <Slider/>
        </div>

        <div className="flex w-screen h-[49vw]  justify-center ">
            <div className="flex w-[80vw] mt-[1.7vw] justify-between">
                <ul className="mt-[18vw]">
                    <li className="flex text-[1.4vw] items-center font-neob mb-[0.5vw]"><img className="w-[1.8vw] mr-[0.9vw]" src={check} alt=""/>엄마 아빠가 편하게 나갈 수는 없을까요?</li>
                    <li className="font-neob text-[2.6vw] mb-[0.5vw] ml-[2.6vw] leading-[2.9vw] ">유아를 동반한 부모가 외식할 때<br/>
                        <p className="text-[#f93873]">각종 편의시설이 부족해요</p></li>
                        <li className="font-neosb ml-[2.6vw] text-[1.4vw] leading-[1.9vw]">몇 번의 터치로 맞춤형 편의시설을 검색할 수 있어요<br/>필터를 통해 목적지와 가까운<br/>주변 정보도 한눈에 확인 할 수
                            있어요 </li>
                </ul>
                <img className="w-[41vw] h-[43.1vw]" src={phone}  alt=""/>
            </div>
        </div>

        <div className="flex w-screen h-[72.6vw] relative justify-center">
            <img className="h-[66vw] absolute" src={backgroud} alt=""/>
            <div className="absolute text-[white] mt-[7.7vw] ">
                <p className="font-neob text-[2.6vw] mb-[3vw]">지금까지 이런 고민하지 않으셨나요?</p>
                <p className="font-neosb text-[1.4vw] mb-[5vw] text-center">검색만 수십 번...<br/> 
                우리아이와 마음 편하게 외출할 수 있는 서비스가 필요해!<br/>
                '아이와 가족을 배려하는 공간을 파악하는 다리를 만들자'라고 떠올렸죠!<br/>
                그래서 우아하게가 탄생했습니다.</p>
            </div>
            <div className="w-screen relative z-10 mt-[28vw] ">
                <img className="absolute z-10 ml-[39.5vw] w-[22vw]" src={phone3} alt=""/>
                <img className="absolute ml-[13.5vw] mt-[8vw] w-[23.3vw]" src={text1} alt=""/>
                <img className="absolute ml-[18vw] mt-[22vw] w-[18.7vw]" src={text2} alt=""/>
                <img className="absolute ml-[61vw] mt-[10vw] w-[25.7vw]" src={text3} alt=""/>
                <img className="absolute ml-[61vw] mt-[22vw] w-[18.8vw]" src={text4} alt=""/>
            </div>
        </div>

        <div className="flex flex-col w-screen h-[29.5vw] items-center">
            <p className="font-neoeb text-[2.6vw] mb-[0.7vw]">부모가 되어도 특별한 날은 우아하게</p>
            <p className="font-neob text-[1.4vw] mb-[2.3vw]">필요한 진짜 정보를 일상에서 더 쉽게, 더 자주 만나보세요</p>
            <img className="w-[46.5vw]" src={iconGroup} alt=""></img>
        </div>
        <div className="w-screen h-[49.5vw]"></div>
        <div className="w-screen h-[49vw]"></div>
        <div className="w-screen h-[49vw]"></div>
        <div className="w-screen h-[49vw]"></div>
        </div>
        
    </div>
    );
};

export default App;
