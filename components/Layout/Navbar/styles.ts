import styled from "styled-components";

export const BorderBottom = styled.div`
  border-bottom: 1px solid black;
`;

export const NavbarContainer = styled.nav`
  align-items: center;
  justify-content: ${(props) =>
    props.alingContent ? "space-between" : "flex-end"};
  display: flex;
  padding: 0.5rem;
  width: 100%;
  transition: all 0.5s ease;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonBurger = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.div`
  height: 6px;
  width: 48px;
  border-radius: 3px;
  background-color: black;

  .active &:nth-child(1) {
    transform: translateY(12px) rotate(135deg);
  }

  .active &:nth-child(2) {
    transform: scale(0);
  }

  .active &:nth-child(3) {
    transform: translateY(-16px) rotate(-135deg);
  }
`;
