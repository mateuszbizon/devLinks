"use client"

import protectRoute from "@/components/auth/protectedRoute";
import ProfileNav from "@/components/navs/ProfileNav";
import ProfileViews from "@/components/profile/ProfileViews";
import { PROFILE_LINKS_VIEW } from "@/constants";
import { useState } from "react";

function Home() {
  const [profileView, setProfileView] = useState(PROFILE_LINKS_VIEW)

  return (   
    <div>
      <ProfileNav profileView={profileView} setProfileView={setProfileView} />
      <div className="mt-5">
        <ProfileViews profileView={profileView} />
      </div>
    </div>
  );
}

export default protectRoute(Home);