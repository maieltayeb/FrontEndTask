import React from "react";
function ProfileImg() {
    return (
      <div className="flex -space-x-1 overflow-hidden">
      <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" 
      
      src={require("../../assests/images/profileImg.png")}
      alt=""/>
      </div>
    )}
  
  
  export default ProfileImg;