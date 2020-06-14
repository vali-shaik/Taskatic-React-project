import React from "react";
import "./Dashboard.css";
import IntroductionDashboard from "./IntroductionDashboard";
import TasksDashboard from "./TasksDashboard";
import ProejectsDashboard from "./ProjectsDashboard";
import ActivityDashboard from "./ActivityDashboard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Dashboard = () => {
  return (
    <div className="contianer">
      <Header />
      <h3 className="DashboardTitle">Taskatic Dashboard!!</h3>
      <div className="Dashboard row">
        <div className="DashboardPicture"></div>
        <div>
          <div>
            <IntroductionDashboard />
          </div>
          <div>
            <ProejectsDashboard />
          </div>
        </div>
      </div>
      <div className="DashboardBottom row">
        <div>
          <TasksDashboard />
        </div>
        <div>
          <ActivityDashboard />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Dashboard;
