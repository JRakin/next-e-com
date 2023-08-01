import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import theme from "@/theme/Theme";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Header />
          <main style={{ flex: 1 }}>
            <Component {...pageProps} />
          </main>
          <Footer />
        </Layout>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
