import styled from 'styled-components/macro'

const StyledNavbar = styled.div`
    max-height: 75px;
    width: 100%;
    position: fixed;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--black);
    padding: 10px;
    
    .inner__nav{
        width: var(--site-max-width);
        display: flex;
        justify-content: space-between;

        @media (min-width: 768px) {
            padding: 0 var(--spacing-xxl);
        }
        
    }

    .right{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .center{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a.nav__links{
        margin: 0 5px;
        transition: all ease-in 0.2;
        text-decoration: none;
        color: var(--light-grey);
        font-size: var(--fz-xxs);

        &:hover{
            color: var(--white);
        }

        @media (min-width: 768px) {
            margin: 0 15px;
            font-size: var(--fz-lg);
        }
    }

    h3{
        margin: 0;
    }

    img.logo{
        width: 60px;
        height: 60px;
    }

    .logout, .login{
        padding: var(--spacing-xs) var(--spacing-md);
        background-color: var(--green);
        color:var(--white);
        font-size: var(--fz-sm);
        font-weight:700;
        border-radius: var(--border-radius-pill);
        cursor: pointer;
        border: 1px black solid;
        text-decoration: none;

        &:hover, &:focus{
            filter: brightness(1.1);
        }
    }
`

export default StyledNavbar