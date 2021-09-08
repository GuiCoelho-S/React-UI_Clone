import { motion } from "framer-motion";
import Header from "../../component/BookPage/Header";
import Apresentation from "../../component/BookPage/Apresentation";
import Experience from "../../component/BookPage/Experience";
import Prices from "../../component/BookPage/Prices";
import Details from "../../component/BookPage/Details";
import Rooms from "../../component/BookPage/Rooms";
import Footer from "../../component/BookPage/Footer";

import * as S from "./style";


const BookPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 1.2 }}
    >
      <S.Container>
        <S.Content>
          <Header />
          <Apresentation />
        </S.Content>
        <Details />
        <Experience />
        <Prices />
        <Rooms />
        <Footer />
       
      </S.Container>
    </motion.div>
  );
};

export default BookPage;
