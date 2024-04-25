import React from "react";

const User = ({
    data
}) => {
    return (
        <div className="flex flex-col justify-center items-center space-y-2">            
            <img src={data.avatar} className="w-32 h-32 rounded-full" />
            <div className="text-lg font-medium">{data.fullname}</div>
            <div className="text-sm font-medium bg-[#b5d8d2] px-5 py-1 rounded-lg text-[#039a7d]">Active</div>
        </div>
    );
};

export default User;