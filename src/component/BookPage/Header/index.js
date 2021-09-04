import * as S from "./style";
import { useState } from "react";
import MenuHamburguer from "../showMenu";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ListIcon from "@material-ui/icons/List";
import TwitterIcon from '@material-ui/icons/Twitter';

const Header = () => {
  const [menu, setMenu] = useState(false);

  function showMenu() {
    setMenu(!menu);
  }

  return (
    <S.Header>
      <S.HideMenu>
        <ul>
          <select>
            <option>En</option>
            <option>Pt</option>
            <option>Es</option>
            <option>Ger</option>
          </select>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Community</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </S.HideMenu>

      <ul>
        <li>
          <a href="/">
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a href="/">
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a href="/">
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a href="/">
            <TwitterIcon />
          </a>
        </li>

        <S.Menu
          onClick={() => {
            showMenu();
          }}
        >
          <ListIcon />
        </S.Menu>
        {menu ? (
          <S.menuHamburguer>
            <MenuHamburguer />
          </S.menuHamburguer>
        ) : (
          <></>
        )}
      </ul>
    </S.Header>
  );
};
export default Header;
