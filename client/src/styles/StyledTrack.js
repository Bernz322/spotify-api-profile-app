import styled from 'styled-components/macro'

const StyledTrack = styled.div`
    
    display: flex;
    padding: 70px 30px 0;
    margin: 0;
    width: 100vw;
    flex-direction: column;

    @media (min-width: 768px) {
        /* margin-bottom: 25px; */
        padding: 70px 100px 0;
        height: auto;
    }

    .mobile__view__features{
        @media (min-width: 768px) {
            display: none;
        }
    }

    .desktop__view__features{
        display: none;
        @media (min-width: 768px) {
            display: block;
            margin-top: 25px;
        }
    }

    .play__track{
        border-radius: var(--border-radius-circle);
        background-color: var(--green);
        width: 50px;
        height: 50px;
        border: none;
        transition: .2s ease-in-out 0s;
        cursor: pointer;
        margin: 0 auto 25px;
        &:hover{
            transform: scale(1.25);
        }
        &:active{
            transform: scale(1);
        }
    }
    

    hr{
        border: 1px solid var(--light-grey);
        opacity: 0.5;
        width: 100%;
        background-color: var(--light-grey);
        margin: 25px 0;
        @media (min-width: 768px) {
            display: none;
        }
    }

    .track__container{
        display: flex;
        flex-direction: column;
        margin-top: 25px;

        @media (min-width: 768px) {
            flex-direction: row;
            line-height: 1;
            width: 100%;
            height: 100%;
        }
    }

    .track__album__details{
        display: flex;
        flex-direction: column;
        flex: 8;
        @media (min-width: 768px) {
            margin-right: 15px;
            flex: 6;
        }
    }

    h1.album__title{
        text-align: center;
        color: var(--light-grey);
        font-size: var(--fz-xl);

        @media (min-width: 768px) {
            font-size: var(--fz-xxl);
        }
    }

    span.span__album__details, span.span__track__details, span.span__track__features__details{
        text-transform: capitalize;
        color: var(--light-grey);
        font-size: var(--fz-xxs);
        display: block;
        margin: -5px 0 10px;

        @media (min-width: 768px) {
            font-size: var(--fz-md);
        }
    }

    .album__details{
        display: flex;
        /* flex-direction: column; */
        justify-content: space-between;
        text-align: center;
    }

    .left, .right{
        display: flex;
        flex-direction: column;
        flex: 6;
    }

    p.album__name, p.album__release__date, p.album__total__tracks, p.track__popularity, p.track__features__details{
        color: var(--green);
        font-size: var(--fz-lg);
        @media (min-width: 768px) {
            font-size: var(--fz-xxl);
        }
    }

    img.track__img{
        height: 100%;
        width: 100%;
        margin-bottom: 15px;
        @media (min-width: 768px) {
            max-width: 100%;
            max-height: 100%;
            margin: 0 auto 25px;
        }

        @media (min-width: 1200px) {
            max-width: 60%;
            max-height: 60%;
            margin: 0 auto 25px;
        }
        
    }

    .album{
        @media (min-width: 768px) {
            flex: 12;
        }
    }

    .track__details__container{
        flex: 4;
        text-align: center;
        margin-bottom: 25px 0;
        @media (min-width: 768px) {
            flex: 6;
        }
    }
    
    h1.track__title{
        font-size: 4rem;
        font-weight: 900;
        @media (min-width: 768px) {
            font-size: 5rem;
            margin-bottom: 25px;
        }
    }

    p.track__artist{
        font-size: var(--fz-lg);
        margin-right: 5px;
        @media (min-width: 768px) {
            font-size: 2rem;
        }
    }

   p.track__duration{
        font-size: var(--fz-lg);
        margin-right: 5px;
        @media (min-width: 768px) {
            font-size: 1.3rem;
        }
    }

    .artist__container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 0px 0 10px;
    }

    .track__audio__features{
        display: flex;
        margin-bottom: 20px;
        text-align: center;
    }
`

export default StyledTrack