
import * as S from './style';
import { CircleButton } from '../../../Pages/BookPage/style';

const Experience = () => {
  return (
    <>
    <S.Experience>
      <S.Title>
        <h2>EXPERIENCE</h2>
      </S.Title>
      <S.CardVideo>
        <S.FlexColumn>
          <div>
            <h2>That's item 01</h2>
            <p>
              Curabitur finibus sapien felis, non luctus odio elementum
              pulvinar. Aliquam
            </p>
          </div>
        </S.FlexColumn>

        <S.FlexColumn>
          <article>
            <h2>That's item 02</h2>
            <p>
              Curabitur finibus sapien felis, non luctus odio elementum
              pulvinar. Aliquam{" "}
            </p>
          </article>
        </S.FlexColumn>

        <S.FlexColumn>
          <aside>
            <h2>That's item 03</h2>
            <p>
              Curabitur finibus sapien felis, non luctus odio elementum
              pulvinar. Aliquam
            </p>
          </aside>
        </S.FlexColumn>
      </S.CardVideo>
    </S.Experience>
    <S.MainVideo>
    <article>
      <h2>
        <center>GREAT EXPERIENCES FOR HOTEL AND RESORT</center>
      </h2>
      <div>
        <p>CLICK THE PLAYER TO</p>
        <CircleButton>
          <S.IconPlay />
        </CircleButton>
        <p>WATCH THE OVERVIEW</p>
      </div>
    </article>
  </S.MainVideo>
  </>
  );
};

export default Experience;
