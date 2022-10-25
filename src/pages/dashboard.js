import React from "react";
import RatedCard from "../components/cards/rate_card";
import DashbordCard from "../components/cards/dashbord_car_card";
import LoanCarCard from "../components/cards/loanCar_card";
import ProfitCard from "../components/cards/profit_card";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
export default function DashbordPage() {
    return (
       <div className="flex">
      
       <Sidebar></Sidebar>
       
       <div className="lg:container  lg:mx-auto bg-[#F5F5F5] ">
       <Header></Header>
       
       
     
        <div className=" ml-[30px]">
       <div className=" flex flex-row mt-[29px] gap-2.5 justify-around"
       >
<RatedCard></RatedCard>
<RatedCard></RatedCard>
<RatedCard></RatedCard>
<RatedCard></RatedCard>
       </div>
       <div className=" flex flex-row mt-[29px] gap-2 justify-around"
       >
<LoanCarCard></LoanCarCard>
<ProfitCard></ProfitCard>
<ProfitCard></ProfitCard>
       </div>
       <div className=" flex flex-row mt-[29px] gap-2.5 pb-[119px] justify-around"
       >
<DashbordCard></DashbordCard>
<DashbordCard></DashbordCard>
<DashbordCard></DashbordCard>

       </div>
        {/* <div className="grid grid-cols-2 mt-[30px] gap-5"
       >

<LoanCarCard></LoanCarCard>
<div className="grid grid-cols-2 gap-5">
<ProfitCard></ProfitCard>
<ProfitCard></ProfitCard>
</div>
</div>
<div className="grid grid-cols-3 mt-[30px] "
       >
<DashbordCard></DashbordCard>
<DashbordCard></DashbordCard>

    </div> */}
       </div> 
       
       </div>
       </div>
        
    );
}

