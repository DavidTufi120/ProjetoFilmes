import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 650px) {
    margin: 10px 10px;
    display: block;
  }

  @media (max-width: 450px) {
    h2 {
      font-size: 40px;
      text-align: center;
    }
    h4 {
      font-size: 1rem;
    }
  }
  @media (min-width: 450px) and (max-width: 650px) {
    h2 {
      font-size: 50px;
    }
    a {
      display: flex;
      width: 130px;
      font-size: 10px;
    }

    Button {
      width: 100px;
      font-size: 10px;
    }
    h4 {
      font-size: clamp(1.5rem, 2vw, 2rem);
    }
  }
  & h2 {
    margin: 30px;
  }

  & ul {
    width: 100%;
    max-width: 850px;
    justify-content: space-between;
  }

  & ul li {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0px;
  }

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & div a {
    text-decoration: none;
    color: white;
    background-color: #006600;
    padding: 7px 8px;
    border-radius: 10px;
    margin-right: 14px;

    &:hover {
      color: #fff;
      background-color: #006600;
    }
  }

  & Button {
    color: #fff;
    background-color: #8b0000;
    padding: 7px 8px;
    border-radius: 10px;
    &:hover {
      color: #fff;
      background-color: #8b0000;
    }
  }
`;
