import Search from "../../assets/icons/search-solid.svg";
import ShopCart from "../../assets/icons/shop-cart.svg";
import Bars from "../../assets/icons/bars.svg";
import BridgeIMG from "../../assets/images/FitnessPage/bridge.png";
import MeditationIMG from "../../assets/images/FitnessPage/meditation.png";
import Stretching from "../../assets/images/FitnessPage/stretching.png";
import Card01 from "../../assets/images/FitnessPage/card-1.png";
import Card02 from "../../assets/images/FitnessPage/card-2.png";
import Facebook from "../../assets/icons/facebook-icon.png";
import Linkedin from "../../assets/icons/linkedin-icon.png";
import Twitter from "../../assets/icons/twitter-icon.png";
import Vimeo from "../../assets/icons/vimeo-icon.png";

import React from "react";
import { motion } from "framer-motion";

import * as S from './style'

const FitnessPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 1.2 }}
    >
      <S.Container>
        <S.Header>
          <S.ContentHeader>
            <div>
              <S.Title>Prowess</S.Title>
              <p>++</p>
            </div>

            <S.Nav>
              <ul>
                <div>
                  <li>
                    <p>HOME</p>
                  </li>
                  <li>PAGES</li>
                  <li>PORTIFOLIO</li>
                  <li>BLOG</li>
                  <li>EVENT</li>
                </div>
                <div>
                  <li>SHOP</li>
                  <li>ELEMENTS</li>
                  <li>
                    <S.FitIcon src={Search} alt="search_icon"/>
                  </li>
                  <li>
                    <S.FitIcon src={ShopCart} alt="shopCart_icon"/>
                  </li>
                  <li>
                    <div>
                      <S.BarsIcon src={Bars} alt="bars_icon"/>
                    </div>
                  </li>
                </div>
              </ul>
            </S.Nav>
          </S.ContentHeader>
        </S.Header>
        <S.ContainerMain>
          <S.Main>
            <S.Bridge src={BridgeIMG} alt="bridge"/>

            <div>
              <h2>BODY</h2>
              <h2>AND SOUL</h2>
            </div>
            <S.Circle />
          </S.Main>
          <S.GridContainer>
            <S.ContentGrid>
              <S.InfoFit>
                <h3>meditation</h3>
                <h2>MEDITATION</h2>
                <p>
                  Curabitur ullamcorper ultricies nisi, Nam eget dui, Etian
                  rhoncus maecenas
                </p>
                <span>Readme More</span>
              </S.InfoFit>
              <S.ImgFit src={MeditationIMG} alt="meditation"></S.ImgFit>
            </S.ContentGrid>
            <S.ContentGrid>
              <S.InfoFit>
                <h3>meditation</h3>
                <h2>YOGA CLASSES </h2>
                <p>
                  Curabitur ullamcorper ultricies nisi, Nam eget dui, Etian
                  rhoncus maecenas
                </p>
                <span>Readme More</span>
              </S.InfoFit>
              <S.ImgFit src={Stretching} alt="stretching_position"></S.ImgFit>
            </S.ContentGrid>
            <S.ContentGrid>
              <S.GridItem>
                <S.ImgFit src={BridgeIMG} alt="bridge_position"/>
              </S.GridItem>
            </S.ContentGrid>
            <S.ContentGrid>
              <S.GridItemText>
                <h1>YOGA IDEALS IN DAILY LIFE</h1>
                <p>
                  Loren ipsum proin gravida velit auctor aliquet. Aenean
                  sollicidu din, lorem auci elit consequat sed odio sit amet a
                  sit amet.
                </p>
                <S.Readme>README</S.Readme>
              </S.GridItemText>
            </S.ContentGrid>
          </S.GridContainer>

          <S.Assessments>
            <article>
              <div>
                <h1>22</h1>
                <h2>SATISFIED CLIENTS</h2>
              </div>
              <div>
                <h1>345</h1>
                <h2>LIVES TOUCHED</h2>
              </div>
            </article>
            <article>
              <div>
                <h1>46</h1>
                <h2>TEACHERS CERTIFIED</h2>
              </div>
              <div>
                <h1>225</h1>
                <h2>PUBLICATIONS</h2>
              </div>
            </article>
          </S.Assessments>
          <S.Notices>
            <S.Aside>
              <h2>TAKE CHARGE OF YOUR LIFE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipising elit nean
                commodo ligula eget dolor. Cum sociis Theme natoque penatibus et
                magnis dis
              </p>
            </S.Aside>
            <S.NoticesArticle>
              <S.Card>
                <S.ImgFit src={Card01} alt="card-01"/>
                <div>
                  <span>MARCH 2, 2018</span>
                  <h2>YOUR ONLY LIMIT IS YOU !</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipising elit nean
                    commodo ligula eget dolor. Cum sociis Theme natoque
                    penatibus et magnis dis
                  </p>
                  <h3>READ MORE</h3>
                </div>
              </S.Card>
              <S.Card>
                <S.ImgFit src={Card02} alt="card-02"/>
                <div>
                  <span>MARCH 2, 2018</span>
                  <h2>YOUR ONLY LIMIT IS YOU !</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipising elit nean
                    commodo ligula eget dolor. Cum sociis Theme natoque
                    penatibus et magnis dis
                  </p>
                  <h3>READ MORE</h3>
                </div>
              </S.Card>
              <S.Newsletter>
                <h1>NEWLETTER</h1>
                <p>
                  Cum sociis Theme natoque penati bus et magnis dis parturient
                  montes, nascetur ridulus mus.
                </p>
                <S.Input type="text" placeholder="Your name" />
                <S.Input type="text" placeholder="Email" />
                <S.Input type="text" placeholder="Phone" />
                <S.Readme>SUBSCRIBE</S.Readme>
              </S.Newsletter>
            </S.NoticesArticle>
          </S.Notices>
          <S.Aside>
            <h2>TAKE CHARGE OF YOUR LIFE</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipising elit nean
              commodo ligula eget dolor. Cum sociis Theme natoque penatibus et
              magnis dis
            </p>
            <S.GridMessage>
              <S.InputGrid type="text" placeholder="First Name" />
              <S.InputGrid type="text" placeholder="Last Name" />
              <S.InputGrid type="text" placeholder="Your Phone Number" />
              <S.InputGrid type="text" placeholder="Your Email Adress" />
              <S.TextArea placeholder="Type anything for us !!" />
            </S.GridMessage>
            <S.Readme>Send</S.Readme>
          </S.Aside>
        </S.ContainerMain>
        <S.ContainerFooter>
          <S.Footer>
            <S.FooterContent>
              <div>
                <S.CardFooter>
                  <h2>PROWESS</h2>
                  <p>
                    Cum sociis natoque penatibuls et magnis dis partidue monter,
                    nascetur ridiculus mus. Curabitur ullamcoper.
                  </p>
                  <p>1-6777225-124-442277-84</p>
                  <p>84 Main Coliins Street</p>
                  <p>Mon - Sat 8:00 -18:00</p>
                </S.CardFooter>
                <S.CardFooter>
                  <h2>LATEST NEWS</h2>
                  <h3>FITNESS CLASS FOR YOU</h3>
                  <p>OCTOBER 22,2017</p>
                  <h3>GYM EXERCISE TO BOOST YOUR FOOTBALL</h3>
                  <p>OCTOBER 22,2017</p>
                  <h3>BOOST YOUR PERFOMACE</h3>
                  <p>NOVEMBER 22,2017</p>
                </S.CardFooter>
              </div>
              <div>
                <S.CardFooter>
                  <h2>RECENTS PROJECTS</h2>
                  <p>MARCH 2018</p>
                  <p>APRIL 2018</p>
                  <p>NOVEMBER 2017</p>
                  <p>OCTOBER 2017</p>
                  <p>JULY 2017</p>
                  <p>JUNE 2017</p>
                </S.CardFooter>
                <S.CardFooter>
                  <h2>CONTACT</h2>
                  <S.InputFooter placeholder="Name" />
                  <S.InputFooter placeholder=" E-mail" />
                  <S.TextAreaFooter placeholder="Comment" />
                  <S.ButtonF>SEND</S.ButtonF>
                </S.CardFooter>
              </div>
            </S.FooterContent>
            <div>
              <p>Copyright 2017 @ Qode Interactive</p>
              <S.FollowUs>
                <p>Follow Us</p>
                <S.FitIcon src={Twitter} alt="twitter_Icon"/>
                <S.FitIcon src={Facebook} alt="facebook_Icon"/>
                <S.FitIcon src={Linkedin} alt="linkedIn_Icon"/>
                <S.FitIcon src={Vimeo} alt="vimeo_Icon"/>
              </S.FollowUs>
            </div>
          </S.Footer>
        </S.ContainerFooter>
      </S.Container>
    </motion.div>
  );
};

export default FitnessPage;
