import styled from 'styled-components/macro';

const StyledHeader = styled.header`
  display: flex;
  align-items: flex-end;
  position: relative;
  top: 50px;
  background: linear-gradient(transparent, rgba(0,0,0,0.5));
  background-color: var(--grey);
  height: fit-content;
  max-height: 500px;
  min-height: 250px;
  padding-top: 10px;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    min-height: 340px;
  }

  .header__inner {
    display: flex;
    align-items: flex-end;
    width: 100%;
    max-width: var(--site-max-width);
    margin: 0 auto;
    padding: var(--spacing-lg) var(--spacing-md);

    @media (min-width: 768px) {
      padding: var(--spacing-xl) var(--spacing-xxl);
    }
  }

  img.header__img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin-right: var(--spacing-lg);
    box-shadow: 0 4px 60px rgb(0 0 0 / 50%);
    background-color: var(--dark-grey);
    border-radius: ${(props) => (props.type === 'artist' ? "50%" : "0")};

    @media (min-width: 768px) {
      margin-right: var(--spacing-xl);
      width: 220px;
      height: 220px;
    }
  }

  .header__profile {
    text-transform: uppercase;
    font-size: var(--fz-xxs);
    font-weight: 700;
    margin-bottom: var(--spacing-xs);
  }

  h1.header__username {
    font-size: clamp(2.5rem, 10vw, 6rem);
    font-weight: 900;
    line-height: 1;
    margin: 0 0 var(--spacing-xs) 0;

    @media (min-width: 768px) {
      margin: 0 0 var(--spacing-xs) -5px;
    }
  }

  .artist__link{
    margin-left: 3px;
    &:hover{
      text-decoration: underline;
    }
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

      &:not(:last-of-type)::after {
        content: '•';
        display: block;
        margin: 0 var(--spacing-xs);
        color: var(--light-grey);
        font-size: 8px;
      }
    }
  }

  a{
      text-decoration: none;
      &:hover, &:focus{
        text-decoration: none;
      }
    }
`;

export default StyledHeader;
