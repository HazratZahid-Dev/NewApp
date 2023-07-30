import React, { useState } from "react";
// import img from '../src/images/WMP-logo.png'
import image from "../src/images/logo.png";
import DashBoard from "../src/images/dashbaord.png";
import properties from "../src/images/properties.png";

import contracter from "../src/images/contracter.png";

import setting from "../src/images/setting.png";
import reports from "../src/images/reports.png";
import finance from "../src/images/finance.svg";
import finance_green from "../src/images/finance_green.svg";
import finance_sub from "../src/images/finance_sub.png";
import suitcase from "../src/images/suitcase.png";
import calander from "../src/images/calander.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const location = useLocation();
  console.log(location.pathname);

  const handleReports = () => {
    setShow(!show);
    console.log("report is clicked!!!!!!!!!!!!!!!!!!!!");
  };

  const navigation=useNavigate()
  const toDashboard=()=>{
    navigation('/')
  }

  return (
    <div
      className="pl-0 border-r col-md-3 col-lg-2 sidebar-offcanvas"
      id="sidebar"
      role="navigation"
    >
      <ul className="px-3 pl-0 nav flex-column sticky-top ">
        <img onClick={toDashboard} src={image} className="object-cover cursor-pointer w-full h-24 m-auto "></img>
        <div className="mt-5 relative   h-[100%]">
          <li className="mb-2 nav-item">
            <Link
              className="nav-link text-secondary text-[#b1b1b1] flex gap-x-3 items-center text-secondary font-semibold"
              to="/login"
            >
              <img
                src={contracter}
                className="object-contain w-6 h-6"
                alt="dashboard"
              />
              <span className="ml-2">Login</span>
            </Link>
          </li>
          <li className="mb-2 nav-item hover:bg-green-100 rounded-sm hover:text-[#38bf67] ">
            <Link
              className="nav-link text-[#b1b1b1] hover:text-[#38bf67] flex gap-x-3 items-center text-secondary font-semibold  "
              // href="#"
              to={`${location.pathname === "/"?"/dashboard":"/"}` }
            >
              <img
                src={DashBoard}
                className="object-contain hover:bg-[#38bf67] hover:text-[#38bf67] w-6 h-6 "
                alt="dashboard"
              />{" "}
              <span className="hover:text-[#] ml-2"> DashBoard</span>
            </Link>
          </li>

          <li className="mb-2 nav-item hover:bg-green-100 rounded-sm hover:text-[#38bf67]">
            <Link
              className="nav-link text-secondary text-[#b1b1b1] flex gap-x-3 items-center text-secondary font-semibold"
              to="/properties"
            >
              <img
                src={properties}
                className="object-contain hover:text-[#]
                 w-6 h-6 "
                alt="dashboard"
              />{" "}
              <span className="hover:text-[#] ml-2">Properties</span>
            </Link>
          </li>
          <li className="mb-2 nav-item hover:bg-green-100 rounded-sm hover:text-[#38bf67]">
            <Link
              className="nav-link text-secondary text-[#b1b1b1] flex gap-x-3 items-center text-secondary font-semibold"
              to="/job"
            >
              <img
                src={suitcase}
                className="h-6 w-6 text-[#b1b1b1] "
                alt="dashboard"
              />
              <span className="ml-2 hover:text-[#]">Jobs</span>
            </Link>
          </li>
          <li className="mb-2 nav-item hover:bg-green-100 rounded-sm hover:text-[#38bf67]">
            <Link
              className="nav-link text-secondary text-[#b1b1b1] flex gap-x-3 items-center text-secondary font-semibold"
              to="/contractor"
            >
              <img
                src={contracter}
                className="object-contain w-6 h-6"
                alt="dashboard"
              />
              <span className="ml-2 hover:text-[#]">Contractor</span>
            </Link>
          </li>
          <li className="mb-2 nav-item hover:bg-green-100 rounded-sm hover:text-[#38bf67]">
            <Link
              className="nav-link text-secondary text-[#b1b1b1] flex gap-x-3 items-center text-secondary font-semibold"
              to="/setting"
            >
              <img
                src={setting}
                className="object-contain w-6 h-6"
                alt="dashboard"
              />
              <span className="ml-2 hover:text-[#38bf67]">Settings</span>
            </Link>
          </li>
          <li className="mb-2 nav-item hover:bg-green-100 rounded-sm hover:text-[#38bf67]">
            <Link
              className="nav-link text-secondary text-[#b1b1b1] flex gap-x-3 items-center text-secondary font-semibold"
              to="/report"
              onClick={handleReports}
            >
              <img
                src={reports}
                className="object-contain w-6 h-6 "
                alt="dashboard"
              />
              <span className="ml-2 hover:text-[#]">Reports</span>
            </Link>
          </li>
          {(location.pathname === "/report" ||
            location.pathname === "/report/events" ||
            location.pathname === "/report/subscription"||
            location.pathname === "/report/events/subscription") && (
            <div className="flex flex-col gap-y-1">
              <li className="flex items-center px-5 cursor-pointer gap-x-2 ">
                <Link
                  to="/report/events"
                  className="nav-link text-secondary text-[13px] text-[#b1b1b1] flex gap-x-3 items-center text-secondary font-semibold"
                >
                  <img
                    src={properties}
                    className="object-contain w-5 h-5 "
                    alt="dashboard"
                  />
                  <span className="text-sm text-[#737475] hover:text-[#38bf67] font-semibold">
                    Events
                  </span>
                </Link>
              </li>
              <li className="flex items-center px-5 cursor-pointer gap-x-2">
                <Link
                  to="/report/subscription"
                  className="nav-link text-secondary text-[13px] text-[#b1b1b1] flex gap-x-3 items-center text-secondary font-semibold"
                >
                  <img
                    src={properties}
                    className="object-contain w-5 h-5 "
                    alt="/dashboard"
                  />

                  <span className="text-sm hover:text-[#38bf67] text-[#737475] font-semibold">
                    Subscription
                  </span>
                </Link>
              </li>
            </div>
          )}
          <li className="mb-2 nav-item hover:bg-green-100 rounded-sm hover:text-[#38bf67]">
            <Link
              className={`nav-link ${
                location.pathname === "/finance"
                  ? "text-[#38BF67] hover:text-[#38BF67] "
                  : "text-secondary hover:text-secondary"
              } flex gap-x-3 items-center font-semibold`}
              to="/finance/contractor-invoice"
            >
              <img
                src={location.pathname == "/finance" ? finance_green : finance}
                className={`object-contain w-6 h-6`}
                alt="dashboard"
              />
              <span className="ml-2 hover:text-[#38BF67] ">
              Finance

              </span>
            </Link>
          </li>
          {(location.pathname === "/finance" ||
            location.pathname === "/finance/contractor-invoice" ||
            location.pathname === "/finance/landlord-invoice" ||
            location.pathname === "/finance/contractor-invoice/close") && (
            <ul className="flex flex-col items-start ps-7">
              <li className=" nav-item">
                <Link
                  to={"/finance/contractor-invoice"}
                  className="nav-link text-secondary text-[13px] text-[#b1b1b1] flex gap-x-3 items-center text-secondary font-semibold"
                >
                  <img
                    src={finance_sub}
                    className="object-contain w-6 h-6 hover:text-[#38bf67]"
                    alt="dashboard"
                  />
                  <span className="hover:text-[#38bf67]">
                  Contractor Invoice

                  </span>
                </Link>
              </li>
              <li className="py-0 mb-1 nav-item">
                <Link
                  to={"/finance/landlord-invoice"}
                  className="nav-link text-secondary  text-[13px] text-[#b1b1b1] flex gap-x-3 items-center text-secondary font-semibold"
                >
                  <img
                    src={finance_sub}
                    className="object-contain w-6 h-6 hover:text-[#38bf67]"
                    alt="dashboard"
                  />
                  <span className="hover:text-[#38bf67]">
                  Landlord Invoice
                  </span>
                
                </Link>
              </li>
            </ul>
          )}

          <li className="nav-item mb-2  absolute bottom-0 top-[110%] ">
            <Link
              className="nav-link hover:text-[#38bf67] text-secondary text-[#b1b1b1] flex gap-x-3 mt-10 items-center text-secondary font-semibold hover:bg-green-100 rounded-sm hover:text-[#38bf67]"
              to="calender"
            >
              <img
                src={calander}
                className="object-contain w-6 h-6 hover:text-[#] "
                alt="dashboard"
              />
              <span className="hover:text-[#] ml-2">
              Calender

              </span>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
