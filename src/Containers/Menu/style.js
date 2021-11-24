import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 280px;
  height: 100;
  padding: 20px;
  background: var(--darktheme-grey);
  color: var(--darktheme-text);

  .menu__label {
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    padding: 16px 0;
  }

  .menu__logo {
    outline: 1px solid blue;
    margin-bottom: 40px;

    h1 {
      font-weight: 600;
      letter-spacing: 1px;
      line-height: 35px;
    }
  }

  .menu__add_note {
    margin-bottom: 25px;

    .svg {
      width: 60px;
    }
  }

  .menu__general {
    margin-bottom: 15px;
  }

  .menu__categories {

  }
`