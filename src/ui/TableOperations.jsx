import styled from "styled-components";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media only screen and (max-width: 936px) {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
`;

export default TableOperations;
