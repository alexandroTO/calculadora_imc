import * as S from "./styled";
import { Container } from "../Container/styled";

const Header = () => {
  return (
    <>
      <S.Header>
        <Container>
          <div style={{display:'flex'}}>
            <S.Logo>IMC</S.Logo>
          </div>
        </Container>
      </S.Header>
    </>
  );
};
export default Header;
