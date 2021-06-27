import styled from 'styled-components';

import { Colors } from '../../../helper/styled/Colors';

interface IProps extends IImage {
 iconUrl: string;
 text?: string;
 onClick?: () => void;
}

interface IImage {
  appendText?: boolean;
  isMarginLeft?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin-right: 5px;
  cursor: pointer;
`;

const TextSpan = styled.span`
  color: ${Colors.subProfileTextColor};
  font-size: 0.75vw;
`;

const Image = styled.img<IImage>`
  width: 12px;
  height: 12px;
  margin-right: ${({ appendText }) => appendText ? '5px' : undefined};
  margin-left: ${({ isMarginLeft }) => isMarginLeft ? '5px' : undefined};
`;

const FilterButton = (props: IProps) => {
  const { iconUrl, text, appendText, isMarginLeft, onClick } = props;

  return (
    <Container onClick={onClick}>
      <Image
        src={iconUrl}
        alt=""
        appendText={appendText}
        isMarginLeft={isMarginLeft}
      />
      {appendText && (
        <TextSpan>{text}</TextSpan>
      )}
    </Container>
  );
}

export default FilterButton;
