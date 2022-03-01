import React from 'react'
import { useEffect, useState } from 'react'

import { catchErrors } from "../utils"
import { getCurrentUserProfile, getCurrentUserPlaylists, getUserTopArtists, getUserTopTracks } from "../spotify"
import { ProfileHeader, TopArtistsSection, TopTracksSection, PlaylistsSection, Loader } from '../components'

export default function Profile() {
    const [profile, setProfile] = useState(null);
    const [playlist, setPlaylist] = useState(null);
    const [topArtists, setTopArtists] = useState();
    const [topTracks, setTopTracks] = useState();

    useEffect(() => {
        const fetchData = async () => {

            const userProfile = await getCurrentUserProfile();
            setProfile(userProfile.data)

            const userPlaylist = await getCurrentUserPlaylists();
            setPlaylist(userPlaylist.data)

            const userTopArtists = await getUserTopArtists('short_term');
            setTopArtists(userTopArtists.data)

            const userTopTracks = await getUserTopTracks('short_term');
            setTopTracks(userTopTracks.data)
        }
        catchErrors(fetchData());
    }, []);
    return (
        <>
            {profile && playlist && topArtists && topTracks ?
                <>
                    <ProfileHeader profile={profile} playlist={playlist} />
                    <main>
                        {topArtists &&
                            <TopArtistsSection topArtists={topArtists.items.slice(0, 5)} />}
                        {topTracks &&
                            <TopTracksSection topTracks={topTracks.items.slice(0, 10)} />}
                        {playlist &&
                            <PlaylistsSection playlist={playlist.items.slice(0, 5)} />}
                    </main>
                </>
                : <Loader />}
        </>
    )
}
