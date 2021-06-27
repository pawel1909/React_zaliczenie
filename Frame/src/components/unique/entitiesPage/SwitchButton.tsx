import styled from 'styled-components';

import MosaicButton from './MosaicButton';

interface IProps {
  onClick: (type: string) => () => void;
  selectedView: string;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const SwitchButton = (props: IProps) => {
  const { selectedView, onClick } = props;

  return (
    <Container>
      <MosaicButton
        selectedView={selectedView}
        iconUrl="/media/icons/windows.svg"
        type="mosaic"
        text="Mosaic"
        onClick={onClick}
      />
      <MosaicButton
        selectedView={selectedView}
        iconUrl="/media/icons/menu.svg"
        type="list"
        text="List"
        onClick={onClick}
      />
    </Container>
  );
}

export default SwitchButton;
