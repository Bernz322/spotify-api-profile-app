import React from 'react'

import { StyledTopTracksSection } from '../../styles'
import { NothingHere, TracksCard } from '../'

export default function TopTracksSection({ topTracks }) {

    const tracks = topTracks
    return (
        <StyledTopTracksSection>
            <div className="section__top">
                <h2 className='section__top__title'><a href="/top-tracks">Top tracks this month</a></h2>
                <a className='see-all' href="/top-tracks">See all</a>
            </div>
            {tracks ? tracks.map((track, i) => {
                return (
                    <TracksCard track={track} key={i} length={i + 1} />
                )
            }) : <NothingHere />}
        </StyledTopTracksSection>
    )
}
