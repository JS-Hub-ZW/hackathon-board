import Layout from "../../src/components/layouts/main";
import Fonts from "../../src/components/general/fonts";
import { AnimatePresence } from "framer-motion";
import Chakra from "../../src/components/chakra";
import "../styles/globals.css";
import { HackathonProvider } from "../../src/state/provider.state";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}





function Website({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <HackathonProvider>
            <Component {...pageProps} key={router.route} />
          </HackathonProvider>
        </AnimatePresence>
      </Layout>
     
    </Chakra>
  );
}

export default Website;
