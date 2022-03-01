/**
 * Album and single page tracks
 */
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import { AlbumHeader, AlbumTracksCard, NothingHere, Loader } from '../components'
import { getAlbumById, getAlbumTracksById } from '../spotify'
import { catchErrors } from '../utils';
import { StyledTopTracksSection } from '../styles'

export default function Album() {
    const { id } = useParams()
    const [albumData, setAlbumData] = useState(null)
    const [albumTracks, setAlbumTracks] = useState(null)

    useEffect(() => {
        const fetchAlbumData = async () => {
            const album = await getAlbumById(id)
            setAlbumData(album.data)
            const tracks = await getAlbumTracksById(id)
            setAlbumTracks(tracks.data)
        }
        catchErrors(fetchAlbumData())
    }, [id])


    return (
        <>
            {albumData && albumTracks ?
                <>
                    <AlbumHeader albumData={albumData} />
                    <main>
                        <h1>Tracks</h1>
                        <StyledTopTracksSection>
                            <li className='track__header'>
                                <span className='track__item__num'>#</span>
                                <div className="track__title__head">
                                    Title
                                </div>
                                <p className="track__album" style={{ textAlign: "center" }}>Explicit</p>
                                <p className="track__date__added">Date Added</p>
                            </li>
                            <hr />
                            {albumTracks ?
                                albumTracks.items.map((track) => {
                                    return <AlbumTracksCard track={track} albumData={albumData} key={track.track_number} length={track.track_number} />
                                })
                                :
                                <NothingHere />}
                            {albumData?.copyrights.map((copyright, i) => {
                                return <p key={i} className='copyright'>{copyright.text}</p>
                            })}
                        </StyledTopTracksSection>
                    </main>
                </>
            : <Loader />}
        </>
    )
}
