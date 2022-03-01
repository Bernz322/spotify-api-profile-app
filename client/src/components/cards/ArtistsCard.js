import React from 'react'
import { Link } from "react-router-dom";

import { StyledCards } from '../../styles'

export default function ArtistsCard({ artist }) {

    return (
        <Link style={{textDecoration: 'none'}} to={`/artists/${artist.id}`}>
            <StyledCards type="artist">
                <img src={artist.images[0]?.url} alt="artist" />
                <h4 className='artist__name'>{artist.name.substring(0, 15)}{artist.name.length > 15 ? "..." : ""}</h4>
            </StyledCards>
        </Link>
    )
}
