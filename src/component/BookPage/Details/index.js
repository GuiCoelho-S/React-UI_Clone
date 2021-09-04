import * as S from './style'

import { SquareButton } from '../../../Pages/BookPage/style';

const Details = () => {

    return(
        <S.Details>
          <h2>Loren ipsum dolor si a met</h2>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati
          </p>
          <aside>
            <SquareButton>
              <S.Left />
            </SquareButton>
            <SquareButton>
              <S.Right />
            </SquareButton>
          </aside>
        </S.Details>
    )
}
export default Details