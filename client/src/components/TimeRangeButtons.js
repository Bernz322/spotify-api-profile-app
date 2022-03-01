import styled from 'styled-components/macro'

const StyledTimeRangeButtons = styled.div`
        button.time__range{
            color: var(--white);
            border-radius: var(--border-radius-pill);
            display: inline-block;
            margin-right: 10px;
            background-color: rgba(0,0,0,.7);
            font-size: var(--fz-sm);
            font-weight: 700;
            padding: var(--spacing-xs) var(--spacing-sm);
            border: 0;
            font-family: inherit;

            &:hover, &:focus{
                background-color: var(--dark-grey);
                outline: 0;
            }

            @media (min-width: 768px) {
                padding: 10px 20px;
                margin: 20px 15px;
            }
        }

        button.active{
                background-color: var(--dark-grey);
                outline: 0;
        }

        
`


export default function TimeRangeButtons({ timeRange, setTimeRange }) {
    return (
        <StyledTimeRangeButtons>
            <button className={`time__range ${timeRange === 'long_term' ? 'active' : ''}`} onClick={() => setTimeRange('long_term')}>All Time</button>
            <button className={`time__range ${timeRange === 'medium_term' ? 'active' : ''}`} onClick={() => setTimeRange('medium_term')}>Last 6 months</button>
            <button className={`time__range ${timeRange === 'short_term' ? 'active' : ''}`} onClick={() => setTimeRange('short_term')}>This month</button>
        </StyledTimeRangeButtons>
    )
}
