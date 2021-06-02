import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const GridedWrapper = styled.div`
  width:100%;
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);  
  border-radius: 10px;
`;

export const GridedImageContainerFirst = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  border-radius: 10px 0px 0px 10px;
`;

export const GridedImageContainerSecond = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / 2;
`;
export const GridedImageContainerThird = styled.div`
  grid-column: 4 / 5;
  grid-row: 1 / 2;
  border-radius: 0px 10px 0px 0px;
`;
export const GridedImageContainerFourth = styled.div`
  grid-column: 3 / 4;
  grid-row: 2 / 3;
`;
export const GridedImageContainerFifth = styled.div`
  grid-column: 4 / 5;
  grid-row: 2 / 3;
  border-radius: 0px 0px 10px 0px;
`;

export const GridedImageaContainerArra = [
  GridedImageContainerFirst,
  GridedImageContainerSecond,
  GridedImageContainerThird,
  GridedImageContainerFourth,
  GridedImageContainerFifth
];