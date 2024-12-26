import React from 'react'
import ProfileLinksView from './ProfileLinksView'
import ProfileDetailsView from './ProfileDetailsView'
import MainContainer from '../containers/MainContainer';
import ProfileResult from './ProfileResult';
import { Button } from '../ui/button';

type ProfileViewsProps = {
    profileView: string;
}

function ProfileViews({ profileView }: ProfileViewsProps) {
    const profileViews: { [key: string]: React.ReactNode } = {
        "PROFILE_LINKS_VIEW": <ProfileLinksView />,
        "PROFILE_DETAILS_VIEW": <ProfileDetailsView />
    }

  return (
    <div>
        <MainContainer>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div className='hidden lg:block relative'>
                    <ProfileResult />
                </div>
                <div className='lg:col-end-4 lg:col-span-2 bg-white rounded-md'>
                    {profileViews[profileView] || null}
                </div>
            </div>
        </MainContainer>
    </div>
  )
}

export default ProfileViews