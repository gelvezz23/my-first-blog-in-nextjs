import styled from "styled-components";

export const Card = styled.a`
  margin: 1rem;
  padding: 1.5rem;
  width: 17rem;
  height: auto;
  max-height: 15rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;

export const DateContent = styled.div`
  font-size: 0.7rem;
`;

export const CategorieTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const Title = styled.h2`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
`;

export const Description = styled.p`
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 1024px;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;
