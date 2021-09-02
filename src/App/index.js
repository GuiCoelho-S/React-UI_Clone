
import { GlobalStyle } from "../GlobalStyle";
import Pages from '../component/Page'

const App = () => {
  
  return (
    <>
      <GlobalStyle />
      <Pages />
    </>
  );
};

export default App;

/*
<motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{delay: 1.5, duration:1.5}}
        >
        {pages[i]}
      </motion.div>
*/