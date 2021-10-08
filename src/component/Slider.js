
import { useState ,useRef, useEffect } from "react"
import banner1 from "../assets/img/main-section1/main-banner1.png"
import banner2 from "../assets/img/main-section1/main-banner2.png"
import banner3 from "../assets/img/main-section1/main-banner3.png"
import banner4 from "../assets/img/main-section1/main-banner4.png"
import leftBtn from "../assets/img/main-section1/left.png"
import rightBtn from "../assets/img/main-section1/right.png"
import play from "../assets/img/main-section1/play.png"
import stop from "../assets/img/main-section1/stop.png"
import { useRecoilState } from "recoil";
import bannerCountState from "../atom/bannerCount";
import SliderText from "./SliderText"
function Slider(){
    const imageRef = useRef();
    const bar = useRef();
    const backbar = useRef();
    const playBtn = useRef();
    let [btnstate,setBtnstate] = useState(false);
    const banner = [banner1,banner2,banner3,banner4];
    const [bannerCount,setBannerCount] = useRecoilState(bannerCountState);             
    console.log(btnstate);

    useEffect(()=>{
        let barwidth = 0;
        if(bannerCount<0){
            setBannerCount(3)
        }
        if(bannerCount>3){
            setBannerCount(0);
        }
        imageRef.current.style.transform='scale(1.1)';
        imageRef.current.style.transition='3.8s';

        const counterBar = setInterval(()=>{ 
            barwidth = barwidth+backbar.current.clientWidth/400
            bar.current.style.width = `${barwidth}px`
        },10)
        const counter = setTimeout(()=>{ 
            imageRef.current.style.transform='none';
            imageRef.current.style.transition='none';
            setBannerCount(bannerCount + 1);
        },4000)
        return () => {
            clearTimeout(counter);
            clearTimeout(counterBar);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bannerCount]);
    

    
    return(
    <div className="relative">
    <div className="absolute">
        <div className="w-full truncate">
            <img className="" src={banner[bannerCount]} alt="" ref={imageRef}/>
        </div>
        <SliderText />
    </div>
    <div className="absolute flex items-center text-[1.2vw] font-neob text-[white] left-[10vw] top-[42vw]">
        <img onClick={()=>{setBannerCount(bannerCount-1)}} className="w-[0.8vw] mr-[0.5vw]" src={leftBtn} alt=""/>
        <p className="mt-[0.2vw] mr-[0.5vw]">0{bannerCount+1}</p>
        <div className="relative w-[10vw] h-[0.5vw]">
            <div className="absolute w-[10vw] h-[0.5vw] z-100 bg-[rgba(0,0,0,0.2)] rounded-[1vw]" ref={backbar}></div>
            <div className="absolute w-[1vw] h-[0.5vw] z-100 bg-[white] rounded-[1vw] " ref={bar}></div>
        </div>
        <p className="mt-[0.2vw] ml-[0.5vw] mr-[0.5vw]">0{bannerCount!=3?bannerCount+2:"1"}</p>
        <img onClick={()=>{setBannerCount(bannerCount+1)}} className="w-[0.8vw]" src={rightBtn} alt=""/>
        <img onClick={()=>{setBtnstate(!btnstate)}} className="w-[0.9vw] ml-[0.8vw]" src={play} alt=""  ref={playBtn}/>
    </div>
    </div>
    
    );
}
export default Slider;