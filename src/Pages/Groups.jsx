import React, { useState } from "react";
import { BiCaretRight } from "react-icons/bi";
import plus from "../images/plus.png";
import edit from "../images/edit.png";

import message from "../images/message.png";
import dlt from "../images/delete.png";
import rightArrow from "../images/rightArrow.png";
import AddNewGroups from "./AddNewGroups";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Groups = () => {
const navigate=useNavigate();
const toSetting=()=>{
  navigate('/setting')
}
const toAddnewGroups=()=>{
  navigate('/setting/group/add-new-groups')
}
  return (
    <div className="w-[100%]">
    <div className="bg-green-100  px-10 flex items-center justify-between py-12">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
               <BsChevronLeft onClick={toSetting} className="cursor-pointer text-xl"/>
                <h1 className="text-3xl font-bold">Groups</h1>
              </div>
              
            </div>
          </div>
          <div className="flex relative items-center  gap-x-8">
            <div>
              <AiOutlineExclamationCircle
                style={{ strokeWidth: "1px", transform: "scale(1.1)" }}
                className="text-3xl text-[#737475]"
              />
            </div>
            <div>
              
            </div>
           
           
            
          </div>
        </div>
   
        <div className="w-[100%] py-4 px-8 ">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={toAddnewGroups}
              className="bg-[#38bf67] !outline-none text-sm px-2 py-1 rounded-sm font-semibold text-white"
            >
              Add Root Groups
            </button>
          </div>
          <div className="mt-3 border rounded-md shadow-md">
            <div className="flex justify-between p-3 border-b">
              <h1 className="font-semibold">Organization Groups</h1>
              <h1 className="px-5 font-semibold">Action</h1>
            </div>
            <div>
              <div className="flex justify-between px-2 py-2 border-b">
                <div className="flex items-center">
                  {/* <img src={rightArrow}/> */}
                  <img src={rightArrow} />
                  <p className="px-2 text-sm text-[#737475] font-semibold">
                    WPM Services Group
                  </p>
                </div>
                <div className="flex items-center px-4 gap-x-2">
                  <img src={plus} className="object-fill w-4 h-4" />
                  <img src={edit} className="object-fill w-4 h-4" />
                  <img src={dlt} className="object-fill w-4 h-4" />
                  <img src={message} className="object-fill w-4 h-4" />
                </div>
              </div>
              <div className="flex justify-between px-2 py-2 border-b cursor-pointer hover:bg-blue-50">
                <div className="flex items-center">
                  <img src={rightArrow} />
                  <p className="px-2 text-sm text-[#737475] font-semibold">
                    APT Company
                  </p>
                </div>
                <div className="flex items-center px-4 gap-x-2">
                  <img src={plus} className="object-fill w-4 h-4" />
                  <img src={edit} className="object-fill w-4 h-4" />
                  <img src={dlt} className="object-fill w-4 h-4" />
                  <img src={message} className="object-fill w-4 h-4" />
                </div>
              </div>
              <div className="flex justify-between px-2 py-2 border-b cursor-pointer hover:bg-blue-50">
                <div className="flex items-center">
                  <img src={rightArrow} />
                  <p className="px-2 text-sm text-[#737475] font-semibold">
                    Green Wood
                  </p>
                </div>
                <div className="flex items-center px-4 gap-x-2">
                  <img src={plus} className="object-fill w-4 h-4" />
                  <img src={edit} className="object-fill w-4 h-4" />
                  <img src={dlt} className="object-fill w-4 h-4" />
                  <img src={message} className="object-fill w-4 h-4" />
                </div>
              </div>
              <div className="flex justify-between px-2 py-2 border-b cursor-pointer hover:bg-blue-50">
                <div className="flex items-center">
                  <img src={rightArrow} />
                  <p className="px-2 text-sm text-[#737475] font-semibold">
                    WPM Services Group
                  </p>
                </div>
                <div className="flex items-center px-4 gap-x-2">
                  <img src={plus} className="object-fill w-4 h-4" />
                  <img src={edit} className="object-fill w-4 h-4" />
                  <img src={dlt} className="object-fill w-4 h-4" />
                  <img src={message} className="object-fill w-4 h-4" />
                </div>
              </div>
              <div className="flex justify-between px-2 py-2 border-b cursor-pointer hover:bg-blue-50">
                <div className="flex items-center">
                  <img src={rightArrow} />
                  <p className="px-2 text-sm text-[#737475] font-semibold">
                    APT Company
                  </p>
                </div>
                <div className="flex items-center px-4 gap-x-2">
                  <img src={plus} className="object-fill w-4 h-4" />
                  <img src={edit} className="object-fill w-4 h-4" />
                  <img src={dlt} className="object-fill w-4 h-4" />
                  <img src={message} className="object-fill w-4 h-4" />
                </div>
              </div>
              <div className="flex justify-between px-2 py-2 border-b cursor-pointer hover:bg-blue-50">
                <div className="flex items-center">
                  <img src={rightArrow} />
                  <p className="px-2 text-sm text-[#737475] font-semibold">
                    Green Wood
                  </p>
                </div>
                <div className="flex items-center px-4 gap-x-2">
                  <img src={plus} className="object-fill w-4 h-4" />
                  <img src={edit} className="object-fill w-4 h-4" />
                  <img src={dlt} className="object-fill w-4 h-4" />
                  <img src={message} className="object-fill w-4 h-4" />
                </div>
              </div>
              <div className="flex justify-between px-2 py-2 border-b cursor-pointer hover:bg-blue-50">
                <div className="flex items-center">
                  <img src={rightArrow} />
                  <p className="px-2 text-sm text-[#737475] font-semibold">
                    WPM Services Group
                  </p>
                </div>
                <div className="flex items-center px-4 gap-x-2">
                  <img src={plus} className="object-fill w-4 h-4" />
                  <img src={edit} className="object-fill w-4 h-4" />
                  <img src={dlt} className="object-fill w-4 h-4" />
                  <img src={message} className="object-fill w-4 h-4" />
                </div>
              </div>
              <div className="flex justify-between px-2 py-2 border-b cursor-pointer hover:bg-blue-50">
                <div className="flex items-center">
                  <img src={rightArrow} />
                  <p className="px-2 text-sm text-[#737475] font-semibold">
                    APT Company
                  </p>
                </div>
                <div className="flex items-center px-4 gap-x-2">
                  <img src={plus} className="object-fill w-4 h-4" />
                  <img src={edit} className="object-fill w-4 h-4" />
                  <img src={dlt} className="object-fill w-4 h-4" />
                  <img src={message} className="object-fill w-4 h-4" />
                </div>
              </div>
              <div className="flex justify-between px-2 py-2 border-b cursor-pointer hover:bg-blue-50">
                <div className="flex items-center">
                  <img src={rightArrow} />
                  <p className="px-2 text-sm text-[#737475] font-semibold">
                    Green Wood
                  </p>
                </div>
                <div className="flex items-center px-4 gap-x-2">
                  <img src={plus} className="object-fill w-4 h-4" />
                  <img src={edit} className="object-fill w-4 h-4" />
                  <img src={dlt} className="object-fill w-4 h-4" />
                  <img src={message} className="object-fill w-4 h-4" />
                </div>
              </div>
              <div className="flex justify-between px-2 py-2 border-b cursor-pointer hover:bg-blue-50">
                <div className="flex items-center">
                  <img src={rightArrow} />
                  <p className="px-2 text-sm text-[#737475] font-semibold">
                    WPM Services Group
                  </p>
                </div>
                <div className="flex items-center px-4 gap-x-2">
                  <img src={plus} className="object-fill w-4 h-4" />
                  <img src={edit} className="object-fill w-4 h-4" />
                  <img src={dlt} className="object-fill w-4 h-4" />
                  <img src={message} className="object-fill w-4 h-4" />
                </div>
              </div>
              <div className="flex justify-between px-2 py-2 border-b cursor-pointer hover:bg-blue-50">
                <div className="flex items-center">
                  <img src={rightArrow} />
                  <p className="px-2 text-sm text-[#737475] font-semibold">
                    APT Company
                  </p>
                </div>
                <div className="flex items-center px-4 gap-x-2">
                  <img src={plus} className="object-fill w-4 h-4" />
                  <img src={edit} className="object-fill w-4 h-4" />
                  <img src={dlt} className="object-fill w-4 h-4" />
                  <img src={message} className="object-fill w-4 h-4" />
                </div>
              </div>
              <div className="flex justify-between px-2 py-2 border-b cursor-pointer hover:bg-blue-50">
                <div className="flex items-center">
                  <img src={rightArrow} />
                  <p className="px-2 text-sm text-[#737475] font-semibold">
                    Green Wood
                  </p>
                </div>
                <div className="flex items-center px-4 gap-x-2">
                  <img src={plus} className="object-fill w-4 h-4" />
                  <img src={edit} className="object-fill w-4 h-4" />
                  <img src={dlt} className="object-fill w-4 h-4" />
                  <img src={message} className="object-fill w-4 h-4" />
                </div>
              </div>
              <div className="flex justify-between px-2 py-2 border-b cursor-pointer hover:bg-blue-50">
                <div className="flex items-center">
                  <img src={rightArrow} />
                  <p className="px-2 text-sm text-[#737475] font-semibold">
                    APT Company
                  </p>
                </div>
                <div className="flex items-center px-4 gap-x-2">
                  <img src={plus} className="object-fill w-4 h-4" />
                  <img src={edit} className="object-fill w-4 h-4" />
                  <img src={dlt} className="object-fill w-4 h-4" />
                  <img src={message} className="object-fill w-4 h-4" />
                </div>
              </div>
              <div className="flex justify-between px-2 py-2 border-b cursor-pointer hover:bg-blue-50">
                <div className="flex items-center">
                  <img src={rightArrow} />
                  <p className="px-2 text-sm text-[#737475] font-semibold">
                    WPM Services Group
                  </p>
                </div>
                <div className="flex items-center px-4 gap-x-2">
                  <img src={plus} className="object-fill w-4 h-4" />
                  <img src={edit} className="object-fill w-4 h-4" />
                  <img src={dlt} className="object-fill w-4 h-4" />
                  <img src={message} className="object-fill w-4 h-4" />
                </div>
              </div>
              <div className="flex justify-between px-2 py-2 border-b cursor-pointer hover:bg-blue-50">
                <div className="flex items-center">
                  <img src={rightArrow} />
                  <p className="px-2 text-sm text-[#737475] font-semibold">
                    APT Company
                  </p>
                </div>
                <div className="flex items-center px-4 gap-x-2">
                  <img src={plus} className="object-fill w-4 h-4" />
                  <img src={edit} className="object-fill w-4 h-4" />
                  <img src={dlt} className="object-fill w-4 h-4" />
                  <img src={message} className="object-fill w-4 h-4" />
                </div>
              </div>
              <div className="flex justify-between px-2 py-2 border-b cursor-pointer hover:bg-blue-50">
                <div className="flex items-center">
                  <img src={rightArrow} />
                  <p className="px-2 text-sm text-[#737475] font-semibold">
                    APT Company
                  </p>
                </div>
                <div className="flex items-center px-4 gap-x-2">
                  <img src={plus} className="object-fill w-4 h-4" />
                  <img src={edit} className="object-fill w-4 h-4" />
                  <img src={dlt} className="object-fill w-4 h-4" />
                  <img src={message} className="object-fill w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
    
    
    </div>
  );
};

export default Groups;
