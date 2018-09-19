import * as React from 'react';
import styled from "../styled-components";

const RowStyled = styled.div`

`;

export const Row = (props: React.Props<any>) => <RowStyled className="row">{props.children}</RowStyled>;
