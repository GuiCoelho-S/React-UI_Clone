import * as S from "./style";
import React from "react";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import BallotIcon from "@material-ui/icons/Ballot";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";

import { motion } from "framer-motion";
const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 1.2 }}
    >
      <S.Container>
        <S.FlexContainer>
          <motion.div
            initial={{ y: 0, scale: 1 }}
            animate={{ y: -20, scale: 2.4 }}
            transition={{ duration: 1 }}
          >
            <h1>Hello There </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{ delay: 1.2, duration: 1.5 }}
          >
            <S.Topics>
              <S.Description>
                This project I did to train my skills with CSS 3. Cloned two UI
                pages, to access them, click on the right arrow, hope that you
                enjoy 🙂
              </S.Description>
              <section>
                <ul>
                  <h2>Libraries used</h2>
                  <li>
                    <LibraryBooksIcon />
                    <p>Framer motion</p>
                  </li>
                  <li>
                    <LibraryBooksIcon />
                    <p>Material UI icons</p>
                  </li>
                  <li>
                    <LibraryBooksIcon />
                    <p>Styled Components</p>
                  </li>
                </ul>
                <ul>
                  <h2>Credits</h2>
                  <li>
                    <BallotIcon />
                    <S.Author>
                      <p>Oleg Afanasiev from Russia</p>
                      <a
                        href="https://www.behance.net/gallery/105394323/FITNESS/modules/605060669"
                        target="_blank"
                        rel="noreferrer"
                        alt="Oleg Afanasiev"
                      >
                        click here
                      </a>
                    </S.Author>
                  </li>
                  <li>
                    <BallotIcon />
                    <S.Author>
                      <p>Nesreen Samer from Palestina</p>
                      <a
                        href="https://www.behance.net/gallery/125492183/WebSite?tracking_source=search_projects_recommended%7Cwebsites"
                        target="_blank"
                        rel="noreferrer"
                        alt="Nesreen Samer"
                      >
                        click here
                      </a>
                    </S.Author>
                  </li>
                </ul>
                <ul>
                  <h3>My social networks</h3>
                  <S.socialNetworks>
                    <a
                      href="https://github.com/GuiCoelho-S"
                      target="_blank"
                      rel="noreferrer"
                      alt="github_icon"
                    >
                      <GitHubIcon />
                    </a>

                    <a
                      href="https://github.com/GuiCoelho-S"
                      target="_blank"
                      rel="noreferrer"
                      alt="LinkedIn_Icon"
                    >
                      <LinkedInIcon />
                    </a>
                    <a
                      href="mailto:gs.coelho_dev@outlook.com"
                      target="_blank"
                      rel="noreferrer"
                      alt="Email_icon"
                    >
                      <EmailIcon />
                    </a>
                  </S.socialNetworks>
                </ul>
              </section>
              <S.Dev>by Gui Coelho</S.Dev>
            </S.Topics>
          </motion.div>
        </S.FlexContainer>
      </S.Container>
    </motion.div>
  );
};

export default HomePage;
