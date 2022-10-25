import React, { useState } from "react";
function RatedCard(props) {
console.log(props)
    return (
      
      <div className="  flex flex-row w-[232px]  pt-[20px] pr-[60px] pb-[20px] pl-[60px]  justify-center  gab-2.5  bg-[#A162F7]  rounded-[14px] ">
     {/* icon and title container  */}
      <div>
      <div className=" flex  justify-center ">
       <div className=" w-[38px] h-[38px]  flex justify-center items-center rounded-full bg-[#A66FF0]  " >
       <svg  width="14" height="21" viewBox="0 0 14 21" fill="none">
<path d="M0.454168 11.6784L8.25105 0.882735C8.76678 0.168648 9.89342 0.638777 9.74861 1.50764L8.6666 7.99965H12.8701C13.55 7.99965 13.9437 8.76979 13.5457 9.32089L5.74883 20.1166C5.2331 20.8307 4.10646 20.3605 4.25127 19.4917L5.33327 12.9997H1.12974C0.449928 12.9997 0.0561475 12.2295 0.454168 11.6784Z" fill="white"/>
</svg>

</div>

        </div>
        <div className="mt-[23px] ml-[23px] flex-none order-1 flex-grow-0">
<span className=" font-['DM_Sans'] font-bold not-italic  leading-[31px] text-[24px] text-[#FFFFFF]">Energy</span>
        </div>
      
        <div className="mt-[30px] flex-none order-1 flex-grow-0">

        <div className="progress relative m-1 float-left text-center">
     
  <div className="barOverflow relative overflow-hidden w-[112px] h-[85px] mt-[-14px] ">
 
    <div className="bar absolute w-[112px] h-[112px] rounded-full box-border border-[10px] border-[#B37EFC] top-0 left-0  border-b-[#B37EFC]
    border-l-[#FFFFFF]"></div>
   
 
  
   
  </div>
  <div className=" absolute top-[33px] left-[23px]"><span className="font-['DM_Sans']  not-italic
  text-[24px]
  font-bold
    leading-[31px]
    text-[#ffffff]
   ">56.5 %</span></div>
  
</div>
{/* <span className=" font-['DM_Sans'] font-bold not-italic  leading-[31px] text-[24px] text-[#FFFFFF]">Energy</span> */}
        </div>
        </div>
        

        </div>    
  
    
    );
  }
  
  export default RatedCard;