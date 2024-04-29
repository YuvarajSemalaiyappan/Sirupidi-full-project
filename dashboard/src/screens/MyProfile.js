import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import ProfileTabs from "../components/users/ProfileTabs";


const MyProfile = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <ProfileTabs/>
      </main>
    </>
  );
};

export default MyProfile;
