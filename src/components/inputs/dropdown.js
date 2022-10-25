import React from "react";
function Dropdown() {
    return (
      
    
        <div  className="flex
        flex-row
       
      
        px-[20px]
        gap-[23px]
        
        w-[122px]
        h-[36px]
        
        bg-[#ffffff]
        rounded-[22.5px]
        ">
           
     
 <select  className=" w-[122px] h-[36px]
 font-['Poppins']
 rounded-[22.5px]
 font-meduim
 text-[16px]
 leading-[24px]
 text-[#5F6165]
 ">
    <option value="new">New</option>
    <option value="used">Used</option>
   
  </select>  
        {/* <svg className="absolute
left-[72.28%]
top-[33.33%]
bottom-[8.89%]" width="13" height="9" viewBox="0 0 13 9" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9142 0C12.4592 0 12.7622 0.630456 12.4218 1.05605L6.84083 8.03221C6.58062 8.35748 6.08592 8.35748 5.8257 8.03221L0.244776 1.05605C-0.0957003 0.630455 0.207313 0 0.752341 0L11.9142 0Z" fill="#B4B4C6"/>
</svg>  */}
  {/* <div class="relative mt-1 rounded-md shadow-sm">
  <div class="absolute inset-y-0 right-0 flex items-center">
    
    <select id="currency" name="currency" class="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
      <option>New</option>
      <option>Used</option>
      
    </select>
  </div>
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span class="text-gray-500 sm:text-sm">New</span>
    </div>
   
    
  </div>  */}
</div>

     
         
      
  
      
    );
  }
  export default Dropdown;