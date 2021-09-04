import { motion } from "framer-motion";
import Header from "../../component/BookPage/Header";
import Apresentation from "../../component/BookPage/Apresentation";
import Experience from "../../component/BookPage/Experience";
import Prices from "../../component/BookPage/Prices";
import Details from "../../component/BookPage/Details";
import Rooms from "../../component/BookPage/Rooms";

import * as S from "./style";

import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import Facebook from "../../assets/icons/facebook-icon.png";
import Twitter from "../../assets/icons/twitter-icon.png";
import Gmail from "../../assets/icons/gmail-icon.png";


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
        
        <S.Footer>
          <div>
            <S.FlexColumn>
              <h2>Zetta Hotels</h2>
              <p>
                Our hotel an image of quality and professionalism combined with
                hard work and precision. You can expect only the best services
                from our staff.
              </p>
              <aside>
                <S.IconNetwork src={Facebook} />
                <S.IconNetwork src={Twitter} />
                <S.IconNetwork src={Gmail} />
              </aside>
            </S.FlexColumn>
            <S.Communication>
              <ul>
                <h3>Useful links</h3>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">Rooms</a>
                </li>
                <li>
                  <a href="/">Gift Card</a>
                </li>
                <li>
                  <a href="/">Testimonials</a>
                </li>
              </ul>
              <ul>
                <h3>Privacy</h3>
                <li>
                  <a href="/">Career</a>
                </li>
                <li>
                  <a href="/">About us</a>
                </li>
                <li>
                  <a href="/">Contact us</a>
                </li>
                <li>
                  <a href="/">Services</a>
                </li>
              </ul>
              <ul>
                <h3>Contact info</h3>
                <li>
                  <EmailIcon />
                  <p>example@yahoo.com</p>
                </li>
                <li>
                  <PhoneIcon />
                  <p>+0 320 422 4254</p>
                </li>
                <li>
                  <LocationOnIcon />
                  <p>Main Str Chicago Ilinols</p>
                </li>
              </ul>
            </S.Communication>
          </div>
        </S.Footer>
      </S.Container>
    </motion.div>
  );
};

export default BookPage;

/*

{menu ? (
              <S.menuHamburguer>
                <select>
                  <option>En</option>
                  <option>Pt</option>
                  <option>Es</option>
                  <option>Ger</option>
                </select>
                <a href="/">About Us</a>
                <a href="/">Community</a>
                <a href="/">Contact</a>
              </S.menuHamburguer>
            ) : (
              <></>
            )}

*/
