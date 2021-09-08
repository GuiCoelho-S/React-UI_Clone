import * as S from "./style";

import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import Facebook from "../../../assets/icons/facebook-icon.png";
import Twitter from "../../../assets/icons/twitter-icon.png";
import Gmail from "../../../assets/icons/gmail-icon.png";

const Footer = () => {
  return (
    <S.Footer>
      <div>
        <S.FlexColumn>
          <h2>Zetta Hotels</h2>
          <p>
            Our hotel an image of quality and professionalism combined with hard
            work and precision. You can expect only the best services from our
            staff.
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
  );
};

export default Footer;
