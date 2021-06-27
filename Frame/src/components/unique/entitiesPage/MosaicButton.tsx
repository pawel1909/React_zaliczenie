import styled from 'styled-components';

import { Colors } from '../../../helper/styled/Colors';

interface IProps extends IImage {
  iconUrl: string;
  onClick: (type: string) => () => void;
  type: string;
  selectedView: string;
  text: string;
}

interface IContainer {
  isPushed: boolean;
}

interface IImage {
  appendText?: boolean;
}

const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: 1px solid ${Colors.subProfileTextColor};
  cursor: pointer;
  background-color: ${({ isPushed }) => isPushed ? Colors.switchButtonBackgroundColor : Colors.white};
`;

const TextContainer = styled.span`
  color: ${Colors.profileTextColor};
  font-weight: 700;
  font-size: 0.75vw;
`;

const Image = styled.img<IImage>`
  width: 15px;
  height: 15px;
  margin-right: ${({ appendText }) => appendText ? '10px' : undefined};
`;

const MosaicButton = (props: IProps) => {
  const { iconUrl, onClick, type, selectedView, text } = props;

  return (
    <Container isPushed={selectedView === type} onClick={onClick(type)}>
      <Image appendText={selectedView === type} src={iconUrl} alt="" />
      {selectedView === type && (
        <TextContainer>{text}</TextContainer>
      )}
    </Container>
  );
}

export default MosaicButton;
