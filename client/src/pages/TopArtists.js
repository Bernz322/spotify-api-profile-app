import React, { useState, useEffect } from 'react'

import { StyledTopArtistSection } from '../styles'
import { catchErrors } from "../utils"
import { getUserTopArtists } from "../spotify"
import { ArtistsCard, NothingHere, TimeRangeButtons, Loader } from "../components/"

export default function TopArtists() {
    const [topArtists, setTopArtists] = useState(null);
    const [timeRange, setTimeRange] = useState('short_term');
    const artists = topArtists?.items

    useEffect(() => {
        const fetchArtists = async () => {
            const userTopArtists = await getUserTopArtists(timeRange)
            setTopArtists(userTopArtists.data)
        }
        catchErrors(fetchArtists())
    }, [timeRange])

    return (
        <>
            {topArtists && timeRange && artists ?
                <main>
                    <StyledTopArtistSection>
                        <div className="section__top">
                            <h2><a href="/">Profile</a>/ Top Artists</h2>
                            <TimeRangeButtons setTimeRange={setTimeRange} timeRange={timeRange} />
                        </div>
                        {artists ?
                            <div className="container">
                                {artists.map((artist) => {
                                    return <ArtistsCard artist={artist} key={artist.id} />
                                })}
                            </div> : <NothingHere />}
                    </StyledTopArtistSection>
                </main>
            : <Loader />}
        </>
    )
}
