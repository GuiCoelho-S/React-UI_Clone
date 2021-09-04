import * as S from "./style";
import { CircleButton } from '../../../Pages/BookPage/style';
import { FlexColumn } from '../../../Pages/BookPage/style';


const Rooms = () => {
  return (
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
              Orci sagittis eu volutpat odio facilisis mauris sit. Eget gravida
              cum sociis natoque penatibus et magnis dis. Fringilla est
              ullamcorper eget nulla facilisi..
            </p>
            <FlexColumn>
              <></>
              <></>
              <></>
              <></>
            </FlexColumn>
            <CircleButton>
              <S.Play />
            </CircleButton>
          </section>
        </S.ContentRoom>
      </S.Room>
    </S.Main>
  );
};
export default Rooms;
