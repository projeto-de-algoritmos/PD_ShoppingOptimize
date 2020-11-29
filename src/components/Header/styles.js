import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 0;

  a, h1 {
    text-decoration: none;
    color: var(--white);

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: var(--white);
    }

    span {
      font-size: 12px;
      color: var(--white);
    }
  }
`;
