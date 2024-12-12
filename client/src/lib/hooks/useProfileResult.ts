import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { generateArray } from '../utils/generateArray'

function useProfileResult() {
    const { profileLinks, profileDetails } = useSelector((state: RootState) => state.profileLinks)
    const [defaultLinks, setDefaultLinks] = useState<string[]>([])
    const maxDefaultArrayLength = 5

    useEffect(() => {
        const defaultArray = generateArray(maxDefaultArrayLength - profileLinks.length)

        setDefaultLinks(defaultArray)
    }, [profileLinks])

  return {
    profileLinks,
    profileDetails,
    defaultLinks
  }
}

export default useProfileResult