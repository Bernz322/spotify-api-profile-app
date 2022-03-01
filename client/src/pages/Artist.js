import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import { StyledArtist } from '../styles'
import { getArtistById, getRelatedArtists, getArtistAlbums } from '../spotify'
import { catchErrors } from '../utils';
import { ArtistsCard, PlaylistsCard, NothingHere, Loader } from '../components'

export default function Artist() {
    const { id } = useParams()
    const [artistData, setArtistData] = useState(null)
    const [relatedArtists, setRelatedArtists] = useState(null)
    const [artistAlbum, setaArtistAlbum] = useState(null)


    useEffect(() => {
        const fetchArtist = async () => {
            const artistDetails = await getArtistById(id)
            setArtistData(artistDetails.data)

            const artistsRelated = await getRelatedArtists(id)
            setRelatedArtists(artistsRelated.data)

            const albums = await getArtistAlbums(id)
            setaArtistAlbum(albums.data)
        }
        catchErrors(fetchArtist())
    }, [id])
    return (
        <>
            {artistData && relatedArtists && artistAlbum ?
                <StyledArtist>
                    <div className="artist__container">
                        <img className="artist__img" src={artistData.images[0]?.url} alt="Avatar" />
                        <div className='artist'>
                            <div className="artist__profile">Artist Profile</div>
                            <h1 className="artist__username"><a href={artistData.external_urls.spotify} target="_blank" rel="noreferrer">{artistData.name}</a></h1>
                            <div className="artist__details">
                                <span>
                                    <p className='span__num'>{artistData.popularity}%</p>
                                    <p className='span__label'>Popularity</p>
                                </span>
                                <span>
                                    <p className='span__num'>{artistData.followers.total}</p>
                                    <p className='span__label'>Follower{artistData.followers.total > 1 ? 's' : ''}</p>
                                </span>
                            </div>
                        </div>
                    </div>

                    {artistAlbum ?
                        <>
                            <h1 className="head__title">Singles and Albums</h1>
                            <div className="container">
                                {artistAlbum.items.map((album) => {
                                    return (
                                        <PlaylistsCard playlist={album} key={album.id} type="album" />
                                    )
                                })}
                            </div></> : <NothingHere />}

                    {relatedArtists ?
                        <>
                            <h1 className="head__title">Related Artists</h1>
                            <div className="container">
                                {
                                    relatedArtists.artists.slice(0, 12).map((artist) => {
                                        return <ArtistsCard artist={artist} key={artist.id} />
                                    })
                                }
                            </div>
                        </>
                        : <NothingHere />}
                </StyledArtist> : <Loader />}
        </>
    )
}
