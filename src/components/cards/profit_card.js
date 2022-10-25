import React from "react";

 function ProfitCard() {
   return (
  <div className="bg-[#0F2837] rounded w-[210px] h-[222px] ">
    <div className="profitTopContainer flex  mt-[26px]">
<div className="profitCardLeft w-[76px]
    ml-[24px]">
<span className="text-[#FFFFFF] font-['Effra']
not-italic
font-bold 
text-[24px]
leading-[29px]">You have earned</span>
<div> <span className="font-['Effra']
not-italic
font-bold
text-[40px] 
leading-[48px]

text-[#FF9619]">20</span></div>
<div>
  <span className="font-['Effra']
not-italic
font-bold
text-[20px] 
leading-[24px]

text-[#ffffff]">Badges! </span>
</div>
<div>
  
</div>
</div>

<div className="profitCardRight">
<img src={require("../../assests/images/trophy.png")} />
</div>
</div>
<div className="ml-[24px]">
<span className="font-['Effra']
not-italic
font-normal
text-[12px] 
leading-[14px]

text-[#FF9619]">Hooray! Way to go Mohammed!</span>
</div>
  </div>
   );
 }

 export default ProfitCard;
