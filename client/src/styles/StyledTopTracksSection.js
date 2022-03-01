import styled from 'styled-components/macro'

const StyledTopTracksSection = styled.div`

    padding: var(--spacing-lg) var(--spacing-md);
    width: 100%;
    margin-bottom: 50px;
    
    @media (min-width: 768px) {
        max-width: var(--site-max-width);
        padding: 0 var(--spacing-xxl);
    }

    .section__top {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin: 0 auto 15px;
        flex-direction: column;

        @media (min-width: 768px) {
            margin-top: 0;
            align-items: center;
            flex-direction: row;
        }
    }

    a.see-all{
        text-transform: uppercase;
        font-size: var(--fz-xxs);
        font-weight: 700;
        margin-bottom: var(--spacing-xs);
        color: var(--light-grey);
        margin-left: 0;
    }

    h2.section__top__title{
margin-right: 0;
    }

    /* Playlist Track List Style Header */
    li.track__header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-grow: 1;
        border-radius: var(--border-radius-subtle);
        transition: background-color 0.3s ease 0s;
        padding: 5px 10px;
        text-transform: uppercase;
    }

    hr{
        height: 0.1px;
        background-color: white;
        border: 0;
        opacity: 0.2;
    }

    span.track__item__num{
        color: var(--light-grey);
        width: 1vw;
        margin-right: 40px;
    }   

    .track__title__head{
        display: flex;
        justify-content: start;
        width: 85vw;
        max-height: 50px;
        padding-top: 5px;
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

        .track__title__head{
            display: flex;
            justify-content: start;
            width: 50vw;
            color: var(--light-grey);
        }

        span.track__item__num{
            width: 1vw;
            margin-right: 15px;
        }
    }
    p.see__more{
        margin-top: 15px;
    }

    p.copyright{
        margin-top: 15px;
        color: var(--light-grey);
        font-size: var(--fz-xxs);
    }

    ul.top__tracks__container{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0;
        margin: 0;
    }

    .top__track{
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

    img.top__track__img{
        height: 40px;
        width: 40px;
        margin-right: 10px;
    }

    .top__track__details{
        display: flex;
        justify-content: start;
        width: 85vw;
        max-height: 50px;
        padding-top: 5px;

        @media (min-width: 768px) {
            display: flex;
            justify-content: start;
            width: 50vw;
        }
    }

    span.top__track__artists{
        font-size: var(--fz-xs);
        color: var(--light-grey);
        display: flex;
    }
`

export default StyledTopTracksSection