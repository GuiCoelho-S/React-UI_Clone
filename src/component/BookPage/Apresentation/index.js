import * as S from "./style";
import { CircleButton } from "../../../Pages/BookPage/style";

const Apresentation = () => {
  return (
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
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere possimus, omnis
          voluptas assumenda est, omnis dolor repellendus.
        </p>
        <S.FlexColumn>
          <article>Learn More</article>
          <CircleButton>
            <S.PlayIcon />
          </CircleButton>
        </S.FlexColumn>
      </S.Apresentation>
    </S.C_Apresentation>
  );
};
export default Apresentation;
