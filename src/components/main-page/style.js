import styled from "styled-components"

export const TableStyled = styled.div`
  padding: 30px;
`;

export const TitleStyled = styled.div`
  margin-bottom: 20px;
`;

export const InputStyled = styled.input`
  margin-bottom: 20px;
  padding: 5px 10px;
`;

export const ListStyled = styled.ul`
  max-width: 250px;
  span {
    &.highlight {
      background-color: #ffc709;
    }
  }
`;

export const  ItemStyled = styled.li`
  list-style: none;
  border-bottom: 1px solid #c8c8c8;
  padding : 20px 10px;
  &:first-child{
    border-top: 1px solid #c8c8c8;
  }
`;

