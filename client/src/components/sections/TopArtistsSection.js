import React from 'react'

import { ArtistsCard, NothingHere } from "../"
import { StyledTopArtistSection } from '../../styles'

export default function TopArtistsSection({ topArtists }) {

    const artists = topArtists

    return (
        <StyledTopArtistSection>
            <div className="section__top">
                <h2><a href="/top-artists">Top artists this month</a></h2>
                <a className='see-all' href="/top-artists">See all</a>
            </div>
            {artists ?
                <div className="container">
                    {artists.map((artist) => {
                        return <ArtistsCard artist={artist} key={artist.id} />
                    })}
                </div> : <NothingHere />}
        </StyledTopArtistSection>
    )
}
