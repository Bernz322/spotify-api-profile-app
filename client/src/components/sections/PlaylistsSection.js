import React from 'react'

import { StyledPlaylistsSection } from '../../styles'
import { NothingHere, PlaylistsCard } from '../'

export default function PlaylistsSection({ playlist }) {

    const playlists = playlist

    return (
        <StyledPlaylistsSection>
            <div className="section__top">
                <h2><a href="/playlists">Your playlists</a></h2>
                <a className='see-all' href="/playlists">See all</a>
            </div>
            {playlists ?
                <div className="container">
                    {playlists.map((playlist) => {
                        return (
                            <PlaylistsCard playlist={playlist} key={playlist.id} />
                        )
                    })}
                </div> : <NothingHere />}
        </StyledPlaylistsSection>
    )
}
