import React from "react";
import {Tbsocial} from "react-icons/tb";
const Login = () =>{
    return(
        <div className="bg-bgcolor w-full h-[100vh] flex items-center justify-center p-6">
            <div className="w-full md:w-2/3 h-fit lg:h-full 2x1:h-5/6 py-8 lg:py-0 flex bg-primary rounded-x1 overflow-hidden shadow-x1">
                {/* LEFT*/}
                <div className="w-full lg:w=1/2 h-full p-10 2x1:px-20 flex flex -col justify-center">
                   <div className="w-full flex gap-2 items-center mb-6">
                    <div className="p-2 bg-[#065ad8 rounded text-white">
                        <Tbsocial />
                        
                    </div>
                    <span className="text-2xl text-[#065ad8]" font-semibold>Gmedia</span>
                    </div> 
                    <p className="text-ascent-1 text-base font semibold">Log in to your account</p>
                </div>
                {/*RIGHT*/}
                <div></div>
            </div>
        </div>
    )
};

export default Login;
