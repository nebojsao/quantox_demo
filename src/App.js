import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { customTheme } from './config/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalNotification from './components/GlobalNotification';
import Content from './views/Content';

export const App = () => {
    return (
        <>
            <ThemeProvider theme={customTheme}>
                <CssBaseline />
                <GlobalNotification />
                <Content />
            </ThemeProvider>
        </>
    );
};

export default App;
