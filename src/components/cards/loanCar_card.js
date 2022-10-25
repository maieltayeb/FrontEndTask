import React from "react";

function LoanCarCard() {
  return (
    <div className=" w-[554px] h-[222px]  bg-[#FFE0BA] shadow-[0_0_32px_rgba(255, 150, 25, 0.1)] rounded-[4px]  ">
   <div className=" flex flex-row justify-around">
   <div className="loanCarCardLeft pt-[55px]">
    <div className="loanCarCardLeft_top ">
<div className="loanCarCardLeft_top_applyText">
  <span className="font-['Effra']
not-italic
font-bold 
text-[24px]
leading-[29px]

text-[#0F2837]">Apply for a car loan !</span>
</div>
<div className="loanCarCardLeft_top_text">
  <span className="font-['Effra']
not-italic
font-normal
text-[16px]
leading-[19px]

text-[#0F2837]">This is a sample of a generated text </span>
</div>
    </div>
    <div className="loanCarCardLeft_bottom
     flex
    flex-col
    items-center
     flex-end
    mt-[28px]
    gap-[10px]
    py-3 px-6 
    bg-[#0F2837]
    shadow-[0_0_40px_rgba(235, 90, 60, 0.1)]
    rounded
    w-[125px]
    ">
<div className=" flex
flex-row
w-[77px]
justify-center
items-center
p-0
gap-2">
  <span className="
  font-['Effra']
  not-italic
  font-bold
  text-[12px]
  leading-[14px]
  text-align: right;
  
  
  
  text-[#FFFFFF]
  ">Discover More</span>
</div>
    </div>
   </div>
   <div className="loanCarCardRight  pt-[20px] ">
   <img src={require("../../assests/images/group.png")} />
   </div>
   </div>
    </div>
   
  );
}

export default LoanCarCard;
//border-[1px] border-[#a8aa21]