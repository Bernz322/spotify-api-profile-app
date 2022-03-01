import styled from 'styled-components/macro'

const StyledCards = styled.div`
    width: 140px;
    display: flex;
    flex-direction: column;
    background-color: var(--near-black);
    border-radius: var(--border-radius-subtle);
    transition: background-color 0.2s ease 0s;
    cursor: pointer;
    flex: 1;
    padding: 0 10px;
    

    &:hover{
        background-color: var(--dark-grey);
        img{
            background-color: var(--dark-grey);
            box-shadow: 0px 5px 50px var(--near-black);
        }
    }

    @media (min-width: 768px) {
        width: 200px;
        /* height: 270px; */
        padding: 20px 15px;
    }

    img{
        height: 120px;
        width: 120px;
        object-fit: cover;
        border-radius: ${(props) => (props.type === 'artist' ? "50%" : "0")};
        margin: 15px auto 20px;

        @media (min-width: 768px) {
            height: 180px;
            width: 180px;
        }
    }

    h4.artist__name{
        margin-bottom: 15px;
        transition: all .5s ease-in;
        text-align: center;

        &:hover{
            text-decoration: underline;
        }
    }

    p.label{
        font-size: var(--fz-xs);
        color: var(--light-grey);
    }

    .header__details {
    display: flex;
    align-items: center;
    font-size: var(--fz-sm);
    /* color: var(--light-grey); */
    color: ${(props) => (props.type === 'playlist' ? "white" : "#b3b3b3")};
    margin: 0;

    span {
      display: flex;
      align-items: center;
      text-transform: capitalize;
      margin-bottom: 10px;

      &:not(:last-of-type)::after {
        content: '•';
        display: block;
        margin: 0 var(--spacing-xs);
        color: var(--light-grey);
        font-size: 8px;
      }
    }
  }
`

export default StyledCards