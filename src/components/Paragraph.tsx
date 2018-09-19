import * as React from 'react';
import styled from '../styled-components';

const P = styled.p.attrs({ className: "col s12 m12"})`

`;

export default (props: React.Props<any>) => <P>{props.children}</P>;

