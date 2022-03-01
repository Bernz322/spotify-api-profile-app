import React from 'react';

import styled from 'styled-components/macro';

const StyledNothingHere = styled.div`
    h1{
        font-size: clamp(2rem, 10vw, 6rem);
        font-weight: 900;
        text-align: center;
    }
`

const Nothinghere = () => {
    return (
        <StyledNothingHere>
            <h1>There is nothing here......</h1>
        </StyledNothingHere>
    );
}

export default Nothinghere;
