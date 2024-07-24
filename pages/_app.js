import "@fontsource/righteous"; 
import '../styles/globals.css'
import Layout from '../components/layout'
import { motion, AnimatePresence  } from "framer-motion"
import ContextWrapper from '../components/context'



function MyApp({ Component, pageProps, router }) {

  

  return (
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial={{ opacity: 0  }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ContextWrapper>
            <Layout>
              <Component {...pageProps} />
          </Layout>
          </ContextWrapper>
        </motion.div>
    </AnimatePresence>
    
  )
}

export default MyApp

