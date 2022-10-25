import React from "react";
function Logo() {
    return (
      
      <div className="flex  relative items-center">
    <div className=" flex  bg-[#A162F7] flex-col items-start rounded-[6px] pt-1.5 pb-1.5 pr-1.5 pl-1.5  top-0.5 gap-10 order-[0] grow-0">
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
<path d="M4.1273 13.7072L5.84924 11.9853C1.48698 9.34499 2.21403 5.33669 3.12284 3.66258L8.50391 8.90015L13.885 3.66258C15.9513 8.13963 12.8805 11.0287 11.0868 11.9136L12.9523 13.7072C19.6248 8.68491 16.3961 1.94063 13.885 0.0751953L8.50391 5.45627L2.97934 0.0751953C-2.90398 5.81501 1.25741 12.2723 4.1273 13.7072Z" fill="white"/>
</svg>
    </div>
    <div className=" flex-none absolute  left-9 order-[1] grow-1 ">
        <span className="font-['DM Sans'] font-bold text-[24px] leading-[31px] text-[#1F2128] not-italic">Motiv.</span>
    </div>
      </div>
    );
  }
  
  export default Logo;