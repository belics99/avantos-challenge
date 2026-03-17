'use client'

import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { createTheme } from '@mui/material/styles';
import { ReactNode } from 'react'

const theme = createTheme();

export function Providers({ children }: { children: ReactNode }) {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}