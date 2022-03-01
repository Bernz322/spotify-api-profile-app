import React from 'react'

import { StyledHeader } from "../styles"
import { NothingHere } from './'

export default function ProfileHeader({ profile, playlist }) {
    return (
        <>
            {profile ?
                <StyledHeader type="artist">
                    <div className="header__inner">
                        <img className="header__img" src={profile?.images[0]?.url} alt="Avatar" />
                        <div>
                            <div className="header__profile">Profile</div>
                            <h1 className="header__username"><a href={profile?.external_urls.spotify}>{profile?.display_name}</a></h1>
                            <p className="header__details">
                                <span>
                                    {playlist?.total} Playlist{playlist?.total > 1 ? 's' : ''}
                                </span>
                                <span>
                                    {profile?.followers.total} Follower{profile?.followers.total > 1 ? 's' : ''}
                                </span>
                            </p>
                        </div>
                    </div>
                </StyledHeader> : <NothingHere />}
        </>
    )
}
