"use client"

import ProfileNav from "@/components/navs/ProfileNav";
import ProfileViews from "@/components/profile/ProfileViews";
import { PROFILE_LINKS_VIEW } from "@/constants";
import { useState } from "react";

export default function Home() {
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
