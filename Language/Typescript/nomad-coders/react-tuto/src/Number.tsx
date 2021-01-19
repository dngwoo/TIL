import React from 'react';
import styled from 'styled-components';

interface IProps {
    count: number;
}

// interface IContainerProps { 
//     // styled-components는 굳이 이렇게 인터페이스로 만들지 않는다. 인라인 형태로 적어주자.
//     isBlue: boolean;
// }

const Container = styled.span<{isBlue : boolean}>`
    color: ${props => (props.isBlue ? props.theme.blueColor : 'dark')}
`

const Number: React.FunctionComponent<IProps> = ({ count }) => <Container isBlue={count > 10}>{count}</Container>;

export default Number;