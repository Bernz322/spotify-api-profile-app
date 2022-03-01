import styled from 'styled-components/macro'

const StyledTracksCard = styled.div`

    ul.container{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0;
        margin: 0;
    }
    li.track{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-grow: 1;
        border-radius: var(--border-radius-subtle);
        transition: background-color 0.3s ease 0s;
        padding: 5px 10px;

        &:hover{
            background: var(--dark-grey);
        }
    }

    span.track__item__num{
        color: var(--light-grey);
        width: 1vw;
        margin-right: 40px;
    }

    .track__details{
        display: flex;
        justify-content: start;
        width: 85vw;
        max-height: 50px;
        padding-top: 5px;
    }

    span.track_artists{
        margin: 0 10px 0 0;
        padding: 0;
    }
    p.track_artists, p.track__title{
        margin: 0;
        padding: 0;
        
    }

    img.track__img{
        height: 40px;
        width: 40px;
        margin-right: 10px;
    }

    span.track__artists{
        font-size: var(--fz-xs);
        color: var(--light-grey);
        display: flex;
    }

    p.track__artist{
        font-size: var(--fz-xs);
        color: var(--light-grey);
        margin: 0 3px 0 0;
    }

    p.list__date{
        text-align: end;
    }

    p.track__album, p.track__duration, p.track__date__added{
        display: none
    }

    @media (min-width: 768px) {
        p.track__album, p.track__duration, p.track__date__added{
            display: block;
            width: 20vw;
            font-size: var(--fz-sm);
            color: var(--light-grey);
            margin-bottom: 0;
        }

        p.track__duration, p.track__date__added{
            text-align: end;
        }

        .track__details{
            display: flex;
            justify-content: start;
            width: 50vw;
        }

        span.track__item__num{
            width: 1vw;
            margin-right: 15px;
        }
    }
`

export default StyledTracksCard