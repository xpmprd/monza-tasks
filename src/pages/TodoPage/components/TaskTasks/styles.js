import styled from 'styled-components';

export const DivChild = styled.div`
color:${({ clicked }) => (clicked ? 'black' : 'grey')};;
display: inline-block;
width: 25px;
height: 25px;
`;

export const DivContainer = styled.div`
width: 100%;
height: 35px;
box-shadow: rgba(0, 0, 0, 0.21) -2px 2px 5px 0px;
margin-bottom: 5px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px 10px;
text-decoration: ${({ clicked }) => (clicked ? 'line-through' : 'none')};
  &:last-of-type {
    margin-bottom: 0px;
}
`;
