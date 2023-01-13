import styled from "styled-components";

export const AsideBarContent = styled.div`
  position: fixed;
  top: 0;
  left: 0px;
  width: 225px;
  height: 100%;
  padding: 20px 10px;
  transition: all 0.5s ease;
  background: white;
  z-index: 9999;
  overflow-y: auto;

  ul {
    list-style: none;
    margin: 0px;
    margin-left: -22px;
    li {
      display: block;
      padding: 13px 10px;
      font-size: 16px;
      cursor: pointer;

      &:hover {
        color: white;
        background: black;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BorderBottom = styled.div`
  border-bottom: 1px solid black;
`;
