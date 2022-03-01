import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { StyledTrack } from '../styles'
import { getTrackById, getTrackFeatures } from '../spotify'
import { catchErrors, formatDuration } from '../utils'
import { Loader } from '../components'


export default function Track() {
    const { id } = useParams()
    const [trackData, setTrackData] = useState(null);
    const [trackFeatures, setTrackFeatures] = useState(null);
    const [playAudio, setPlayAudio] = useState(false);

    useEffect(() => {
        const fetchTrack = async () => {
            const trackDetails = await getTrackById(id)
            setTrackData(trackDetails.data)

            const trackFeatures = await getTrackFeatures(id)
            setTrackFeatures(trackFeatures.data)
        }
        catchErrors(fetchTrack())
    }, [id])

    return (
        <>
            {trackData && trackFeatures ?
                <StyledTrack>
                    <div className="track__container">
                        <div className="track__album__details">
                            <img className='track__img' src={trackData.album.images[0]?.url} alt="track-avatar" />
                            <div className="album">
                                <h1 className='album__title'>Album Details</h1>
                                <div className="album__details">
                                    <div className="left">
                                        <div className="details__container">
                                            <p className="album__name">
                                                <Link to={`/albums_singles/${trackData.album.id}`}>
                                                    {trackData.album.name}
                                                </Link>
                                            </p>
                                            <span className='span__album__details'>{trackData.album.album_type}</span>
                                        </div>
                                        <div className="details__container">
                                            <p className="album__release__date"> {trackData.album.release_date}</p>
                                            <span className='span__album__details'>Released on</span>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="details__container">
                                            <p className="album__total__tracks">{trackData.album.total_tracks}</p>
                                            <span className='span__album__details'>
                                                No. of Tracks </span>
                                        </div>
                                        <div className='details__container'>
                                            <p className='track__popularity'>{trackData.popularity}%</p>
                                            <span className='span__album__details'>Track Popularity</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="track__details__container">
                            <div className="track__details">
                                <h1 className='album__title'>Track Details</h1>
                                <h1 className='track__title'><a href={trackData.external_urls.spotify} target="_blank" rel="noreferrer">{trackData.name}</a></h1>
                                <span className='span__track__details'>Track Title</span>

                                <div className="track__artists">
                                    <div className="artist__container">
                                        {trackData.artists.map((artist, i) => {
                                            return (
                                                <p key={i} className='track__artist'>
                                                    <Link to={`/artists/${artist.id}`} >
                                                        {artist.name}{i !== trackData.artists.length - 1 && ', '}
                                                    </Link>
                                                </p>
                                            )
                                        })}
                                    </div>
                                    <span className='span__track__details'>Track Artist</span>
                                </div>
                                <p className='track__duration'>{formatDuration(trackFeatures.duration_ms)}</p>
                                <span className='span__track__details'>Track Duration</span>
                                <button className='play__track' onClick={() => setPlayAudio(!playAudio)}>{playAudio ? "Stop" : "Play"}</button>
                                <span className='span__track__details'>Track Preview</span>
                            </div>
                            <hr />
                            <div className="desktop__view__features">
                                <h1 className='album__title'>Track Audio Details</h1>
                                <div className="track__audio__features">
                                    <div className="left">
                                        <div className="details__container">
                                            <p className="track__features__details">{trackFeatures.acousticness}</p>
                                            <span className='span__track__features__details'>Acousticness</span>
                                        </div>
                                        <div className="details__container">
                                            <p className="track__features__details">{trackFeatures.time_signature}/4</p>
                                            <span className='span__track__features__details'>Time Signature</span>
                                        </div>
                                        <div className="details__container">
                                            <p className="track__features__details">{trackFeatures.danceability}</p>
                                            <span className='span__track__features__details'>Danceability</span>
                                        </div>
                                        <div className="details__container">
                                            <p className="track__features__details">{trackFeatures.danceability}</p>
                                            <span className='span__track__features__details'>Energy</span>
                                        </div>
                                        <div className="details__container">
                                            <p className="track__features__details">{trackFeatures.instrumentalness}</p>
                                            <span className='span__track__features__details'>Instrumentalness</span>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="details__container">
                                            <p className="track__features__details">{trackFeatures.liveness}</p>
                                            <span className='span__track__features__details'>Liveness</span>
                                        </div>
                                        <div className="details__container">
                                            <p className="track__features__details">{trackFeatures.loudness}</p>
                                            <span className='span__track__features__details'>Loudness</span>
                                        </div>
                                        <div className="details__container">
                                            <p className="track__features__details">{trackFeatures.speechiness}</p>
                                            <span className='span__track__features__details'>Speechiness</span>
                                        </div>
                                        <div className="details__container">
                                            <p className="track__features__details">{trackFeatures.tempo}</p>
                                            <span className='span__track__features__details'>Tempo</span>
                                        </div>
                                        <div className="details__container">
                                            <p className="track__features__details">{trackFeatures.valence}</p>
                                            <span className='span__track__features__details'>Valence</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile__view__features">
                        <h1 className='album__title'>Track Audio Details</h1>
                        <div className="track__audio__features">
                            <div className="left">
                                <div className="details__container">
                                    <p className="track__features__details">{trackFeatures.acousticness}</p>
                                    <span className='span__track__features__details'>Acousticness</span>
                                </div>
                                <div className="details__container">
                                    <p className="track__features__details">{trackFeatures.time_signature}/4</p>
                                    <span className='span__track__features__details'>Time Signature</span>
                                </div>
                                <div className="details__container">
                                    <p className="track__features__details">{trackFeatures.danceability}</p>
                                    <span className='span__track__features__details'>Danceability</span>
                                </div>
                                <div className="details__container">
                                    <p className="track__features__details">{trackFeatures.danceability}</p>
                                    <span className='span__track__features__details'>Energy</span>
                                </div>
                                <div className="details__container">
                                    <p className="track__features__details">{trackFeatures.instrumentalness}</p>
                                    <span className='span__track__features__details'>Instrumentalness</span>
                                </div>
                            </div>
                            <div className="right">
                                <div className="details__container">
                                    <p className="track__features__details">{trackFeatures.liveness}</p>
                                    <span className='span__track__features__details'>Liveness</span>
                                </div>
                                <div className="details__container">
                                    <p className="track__features__details">{trackFeatures.loudness}</p>
                                    <span className='span__track__features__details'>Loudness</span>
                                </div>
                                <div className="details__container">
                                    <p className="track__features__details">{trackFeatures.speechiness}</p>
                                    <span className='span__track__features__details'>Speechiness</span>
                                </div>
                                <div className="details__container">
                                    <p className="track__features__details">{trackFeatures.tempo}</p>
                                    <span className='span__track__features__details'>Tempo</span>
                                </div>
                                <div className="details__container">
                                    <p className="track__features__details">{trackFeatures.valence}</p>
                                    <span className='span__track__features__details'>Valence</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {playAudio &&
                        <video loop autoPlay name="media" hidden>
                            <source src={trackData.preview_url} type="audio/mpeg" />
                        </video>
                    }
                </StyledTrack>
                : <Loader />}
        </>
    )
}
