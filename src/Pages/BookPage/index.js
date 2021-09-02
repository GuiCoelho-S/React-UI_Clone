import { motion } from "framer-motion";
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
          <S.Header></S.Header>
          <S.C_Apresentation>
            <S.CardMain>
              <S.CardMainItem>
                <div>
                  <h3>Item01</h3>
                  <p>OCTOBER 22,2017</p>
                </div>
              </S.CardMainItem>
              <S.CardMainItem>
                <div>
                  <h3>Item02</h3>
                  <p>January 12,2017</p>
                </div>
              </S.CardMainItem>
              <S.CardMainItem>
                <div>
                  <h3>Item03</h3>
                  <p>OCTOBER 22,2019</p>
                </div>
              </S.CardMainItem>
            </S.CardMain>
            <S.Apresentation>
              <h2>Lorem ipsum dolor si a met</h2>
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus.
              </p>
              <S.FlexColumn>
                <article>Learn More</article>
                <S.CircleButton>
                  <S.IconPlay />
                </S.CircleButton>
              </S.FlexColumn>
            </S.Apresentation>
          </S.C_Apresentation>
        </S.Content>
        <S.Details>
          <h2>Loren ipsum dolor si a met</h2>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati
          </p>
          <aside>
            <S.SquareButton>
              <S.IconLeft />
            </S.SquareButton>
            <S.SquareButton>
              <S.IconRight />
            </S.SquareButton>
          </aside>
        </S.Details>
        <S.Main>
          <S.Title>
            <h2>EXPERIENCE</h2>
          </S.Title>
          <S.CardVideo>
            <S.FlexColumn>
              <div>
                <h1>That's item 01</h1>
                <p>
                  Curabitur finibus sapien felis, non luctus odio elementum
                  pulvinar. Aliquam{" "}
                </p>
              </div>
            </S.FlexColumn>

            <S.FlexColumn>
              <article>
                <h1>That's item 02</h1>
                <p>
                  Curabitur finibus sapien felis, non luctus odio elementum
                  pulvinar. Aliquam{" "}
                </p>
              </article>
            </S.FlexColumn>

            <S.FlexColumn>
              <aside>
                <h1>That's item 03</h1>
                <p>
                  Curabitur finibus sapien felis, non luctus odio elementum
                  pulvinar. Aliquam{" "}
                </p>
              </aside>
            </S.FlexColumn>
          </S.CardVideo>
        </S.Main>

        <S.MainVideo>
          <article>
            <h1>
              <center>GREAT EXPERIENCES FOR HOTEL AND RESORT</center>
            </h1>
            <div>
              <p>CLICK THE PLAYER TO</p>
              <S.CircleButton>
                <S.IconPlay />
              </S.CircleButton>
              <p>WATCH THE OVERVIEW</p>
            </div>
          </article>
        </S.MainVideo>

        <S.Main>
          <S.Title>
            <h2>PRICES</h2>
          </S.Title>
          <S.TablePrice>
            <S.ItemDetails>
              <h3>Room1</h3>
              <p>$ 50.00/ night</p>

              <span>05 REVIEWS</span>
              <span>03 GUESTS</span>
              <p>23 km</p>

              <div>
                <p>
                  Orci sagittis eu volutpat odio facilisis mauris sit. Eget
                  gravida cum sociis natoque penatibus et magnis dis. Fringilla
                  est ullamcorper eget nulla facilisi. Tortor at auctor urna
                  nunc id cursus metus aliquam. Nunc non blandit massa enim nec
                  dui nunc mattis enim. Sit amet consectetur adipiscing elit. Id
                  cursus metus aliquam eleifend mi in nulla posuere.
                </p>
              </div>
            </S.ItemDetails>
            <S.ItemDetails>
              <h3>Room1</h3>
              <p>$ 50.00/ night</p>

              <span>05 REVIEWS</span>
              <span>03 GUESTS</span>
              <p>23 km</p>

              <div>
                <p>
                  Orci sagittis eu volutpat odio facilisis mauris sit. Eget
                  gravida cum sociis natoque penatibus et magnis dis. Fringilla
                  est ullamcorper eget nulla facilisi. Tortor at auctor urna
                  nunc id cursus metus aliquam. Nunc non blandit massa enim nec
                  dui nunc mattis enim. Sit amet consectetur adipiscing elit. Id
                  cursus metus aliquam eleifend mi in nulla posuere.
                </p>
              </div>
            </S.ItemDetails>
            <S.ItemDetails>
              <h3>Room1</h3>
              <p>$ 50.00/ night</p>

              <span>05 REVIEWS</span>
              <span>03 GUESTS</span>
              <p>23 km</p>

              <div>
                <p>
                  Orci sagittis eu volutpat odio facilisis mauris sit. Eget
                  gravida cum sociis natoque penatibus et magnis dis. Fringilla
                  est ullamcorper eget nulla facilisi. Tortor at auctor urna
                  nunc id cursus metus aliquam. Nunc non blandit massa enim nec
                  dui nunc mattis enim. Sit amet consectetur adipiscing elit. Id
                  cursus metus aliquam eleifend mi in nulla posuere.
                </p>
              </div>
            </S.ItemDetails>
            <S.ItemDetails>
              <h3>Room1</h3>
              <p>$ 50.00/ night</p>
              <p>05 REVIEWS</p>
              <p>03 GUESTS</p>
              <p>23 km</p>

              <div>
                <p>
                  Orci sagittis eu volutpat odio facilisis mauris sit. Eget
                  gravida cum sociis natoque penatibus et magnis dis. Fringilla
                  est ullamcorper eget nulla facilisi. Tortor at auctor urna
                  nunc id cursus metus aliquam. Nunc non blandit massa enim nec
                  dui nunc mattis enim. Sit amet consectetur adipiscing elit. Id
                  cursus metus aliquam eleifend mi in nulla posuere.
                </p>
              </div>
            </S.ItemDetails>
          </S.TablePrice>
        </S.Main>
        <S.Main>
          <S.Title>
            <h5>THE BEST OUR</h5>
            <h2>ROOMS</h2>
          </S.Title>
          <S.Room>
            <S.ContentRoom>
              <aside></aside>
              <section>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                <p>
                  Orci sagittis eu volutpat odio facilisis mauris sit. Eget
                  gravida cum sociis natoque penatibus et magnis dis. Fringilla
                  est ullamcorper eget nulla facilisi..
                </p>
                <S.FlexColumn>
                    <S.Images />
                    <S.Images />
                    <S.Images />
                    <S.Images />
                    
                </S.FlexColumn>
                <S.CircleButton>
                <S.IconPlay />
              </S.CircleButton>
              </section>
            </S.ContentRoom>
          </S.Room>
        </S.Main>
      </S.Container>
    </motion.div>
  );
};

export default BookPage;
