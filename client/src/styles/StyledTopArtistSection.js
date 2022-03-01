import styled from 'styled-components/macro'

const StyledTopArtistSection = styled.div`

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
    }

    .container{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        grid-gap: var(--spacing-sm);
        justify-items:center;


        @media (min-width: 768px) {
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            grid-gap: var(--spacing-lg);
            padding: 0;
        }
    }
`

export default StyledTopArtistSection