import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

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
    padding: 7px 15px;
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
    padding: 7px 15px;
    border-radius: 10px;
    &:hover {
      color: #fff;
      background-color: #8b0000;
    }
  }
`;
