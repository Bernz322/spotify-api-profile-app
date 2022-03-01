import styled, { keyframes } from "styled-components/macro";

const float = keyframes`
        0% {
          box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
          transform: translatey(0px);
        }
        50% {
          box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
          transform: translatey(-20px);
        }
        100% {
          box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
          transform: translatey(0px);
        }
`

const StyledMain = styled.div`
    
    padding: var(--spacing-xxl) 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    height: fit-content;
    margin: 0 auto;

    @media (min-width: 1200px) {
        width: var(--site-max-width);
        padding: var(--spacing-xxl) var(--spacing-xxl) 0;
        flex-direction: row;
        .left{
            flex: 6;
        }
        .right{
            flex: 6;
        }
        
    }

    .left{
        margin: 15px;
        position: relative;
        @media (min-width: 1200px) {
            margin: 40px 0 0;
        }
    }

    .right{
        margin: 15px;
        @media (min-width: 1200px) {
            margin: 40px 0 0;
        }
    }

    img{
        border-radius: 10px;
    }

    p{
        padding: 0;
        margin-top: 10px;
    }

    ul{
        margin: 0;
    }

    .head{
        text-align: center;
    }

    a.spotify__redirect, a.github__redirect{
        color: var(--green);
    }
    
    .features{
        position: relative;
        color: var(--light-grey);
        margin-top: 15px;
    }

    a.github__icon{
        position: absolute;
        top: 0;
        right: 0;
        z-index: 999;
    }

    a.floating-icons{
        animation:  ${float} 3s ease-in-out infinite;
        border-radius: 100%;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;

        @media (min-width: 1200px) {
            margin-top: 0;
        }
    }

    svg{
        /* width: 100px;
        height: 100px; */
        padding: 0;
        margin: 0;
    }

    h3{
        color: var(--white);
    }

    p.note{
        margin-top: 15px;
        color: var(--light-grey);
        font-size: var(--fz-xs);
        text-align: justify;
    }

    footer{
        text-align: center;
        margin-bottom: 0;
        color: #D3D3D3;
        font-size: var(--fz-xxs);
    }

    .note{
        margin-top: 20px;
    }

    .login__button{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a.login{
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

export default StyledMain