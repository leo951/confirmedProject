import styled from 'styled-components';

const ViewContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Image = styled.Image`
  height: ${250}px;
  width: ${props => props.width}px;
`;

export {ViewContainer, Image};
