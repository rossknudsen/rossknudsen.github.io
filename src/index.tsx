import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from "./styled-components";
import { theme } from './theme';

// tslint:disable-next-line:no-unused-expression
injectGlobal`
    /* Sticky footer - see Materialize documentation */
    body {
        display: flex;
        min-height: 100vh;
        flex-direction: column;

        //background: ${theme.light};
        color: ${theme.dark};
    }

    body > .container {
        flex: 1 0 auto;
    }

    table span.table-subtitle {
        font-size: 1.1rem;
        font-weight: bold;
    }
`;

ReactDOM.render(
  <Main />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
