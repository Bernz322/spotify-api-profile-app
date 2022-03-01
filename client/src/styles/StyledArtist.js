import styled from 'styled-components/macro'

const StyledArtist = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 70px 30px 0;
    height: auto;
    width: 100vw;
    flex-direction: column;

    @media (min-width: 768px) {
            padding: 10%;
        }

    .artist__container{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;
        margin-bottom: 20px;
        
    }

    .container{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        grid-gap: var(--spacing-sm);
        justify-items:center;
        width: 100%;
        margin-bottom: 100px;


        @media (min-width: 768px) {
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            grid-gap: var(--spacing-lg);
            padding: 0;
        }
    }

    .artist{
        width: 100%;
    }

    img.artist__img{
        width: 300px;
        height: 300px;
        border-radius: var(--border-radius-circle);
    }

    .artist__profile{
        margin: 25px 0;
        font-size: var(--fz-sm);
        color: var(--light-grey);
    }

    h1.artist__username{
        font-size: clamp(2.5rem,10vw,6rem);
        font-weight: 900;
    }

    h1.head__title{
        font-size: clamp(2.5rem,10vw,1.8rem);
        font-weight: 900;
        text-align: center;
    }

    .artist__details{
        display: flex;
        justify-content: space-evenly;
        padding: 0 10px;
    }
    p.span__num{
        font-size: var(--fz-xxl);
        color: var(--green);
    }

    p.span__label{
        font-size: var(--fz-sm);
        color: var(--light-grey);
    }

    p.details{
        font-size: var(--fz-sm);
        color: var(--light-grey);
        margin: 0;
        text-align: center;
    }
    a{
        text-decoration: none;
        &:hover{
            text-decoration: none;
        }
    }
    
`

export default StyledArtist