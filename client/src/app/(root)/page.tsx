"use client"

import protectRoute from "@/components/auth/protectedRoute";
import CircleLoading from "@/components/loading/CircleLoading";
import ErrorMessage from "@/components/messages/ErrorMessge";
import ProfileNav from "@/components/navs/ProfileNav";
import ProfileViews from "@/components/profile/ProfileViews";
import { PROFILE_LINKS_VIEW } from "@/constants";
import { useAuthContext } from "@/context/AuthContext";
import useGetUserDetails from "@/lib/hooks/services/userServices/useGetUserDetails";
import { useState } from "react";

function Home() {
  const { userData } = useAuthContext()
  const { userDetailsData, isLoading, isError, error } = useGetUserDetails({ userEmail: userData?.email! })
  const [profileView, setProfileView] = useState(PROFILE_LINKS_VIEW)

  return (   
    <div>
      {userDetailsData && (
        <div>
          <ProfileNav profileView={profileView} setProfileView={setProfileView} />
          <ProfileViews profileView={profileView} />
        </div>
      )}
      {isLoading && <CircleLoading />}
      {isError && <ErrorMessage statusCode={error?.response?.status} />}
    </div>
  );
}

export default protectRoute(Home);