import React from "react";
import BookingCard from "../components/cards/booking_car_card";
import Dropdown from "../components/inputs/dropdown";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
export default function BookingPage() {
    return (
       <div className="flex">
      
       <Sidebar></Sidebar>
       
       <div className="lg:container  lg:mx-auto bg-[#F5F5F5] ">
       <Header></Header>
        <div className=" ml-[30px]">
       <div className=" mt-[29px] "
       >
<div>
    <span className="font-['DM_Sans']
    not-italic
font-bold
text-[30px]
leading-[39px]
text-[#242731]
">Booking</span>

</div>
<div className="flex gap-[23px] mt-8">
<Dropdown></Dropdown>
<Dropdown></Dropdown>
</div>
<div>

</div>
       </div>
       <div className=" flex flex-row mt-[29px] gap-6 "
       >
<BookingCard></BookingCard>
<BookingCard></BookingCard>
<BookingCard></BookingCard>
       </div>
       <div className=" flex flex-row mt-[29px] gap-6"
       >
<BookingCard></BookingCard>
<BookingCard></BookingCard>
<BookingCard></BookingCard>

       </div>
       <div className=" flex flex-row mt-[29px] gap-6 pb-[119px] "
       >
<BookingCard></BookingCard>
<BookingCard></BookingCard>
<BookingCard></BookingCard>

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

