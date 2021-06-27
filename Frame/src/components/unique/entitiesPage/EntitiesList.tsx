import styled, {css} from 'styled-components';

import { Colors } from '../../../helper/styled/Colors';

interface IProps {
  imageList: any[];
  selectedView: string;
}

interface IViewType {
  isMosaic: boolean;
}

const Container = styled.div<IViewType>`
  ${({ isMosaic }) => isMosaic ? css`
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding-right: 20px;
  ` : css`
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr;
    padding-right: 20px;
  `}
`;

const ElementContainer = styled.div`
  background-color: white;
  border-radius: 5%;
  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  margin-left: 20px;
  margin-bottom: 20px;
  padding: 10px;
`;

const Image = styled.img<IViewType>`
  max-width: ${({ isMosaic }) => isMosaic ? '100px' : '150px'};
  max-height: ${({ isMosaic }) => isMosaic ? '100px' : '150px'};
  padding-right: ${({ isMosaic }) => isMosaic ? '5px' : '15px'};
`;

const Title = styled.h3<IViewType>`
  ${({ isMosaic }) => isMosaic ? css`
    margin: 0;
    color: ${Colors.headerCounters};
    font-size: 22px;
    font-weight: 700;
    height: 45px;
    overflow: hidden;
  ` : css`
    margin: 0;
    color: ${Colors.headerCounters};
    font-size: 28px;
    font-weight: 900;
  `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Paragraph = styled.p<IViewType>`
  font-size: ${({ isMosaic }) => isMosaic ? '16px' : '20px'};
  color: ${Colors.constantPartContainer};
  font-weight: 400;
`;

const EntitiesList = (props: IProps) => {
  const { imageList, selectedView } = props;

  const renderList = () => {
    return imageList.map((image: any) => {
      return (
        <ElementContainer>
          <Image src={image.url} isMosaic={selectedView === 'mosaic'} />
          <Content>
            <Title isMosaic={selectedView === 'mosaic'}>{image.title}</Title>
            <Paragraph isMosaic={selectedView === 'mosaic'}>Lorem Ipsum is simply dummy text of the printing</Paragraph>
          </Content>
        </ElementContainer>
      )
    })
  }

  return (
    <Container isMosaic={selectedView === 'mosaic'}>
      {renderList()}
    </Container>
  )
};

export default EntitiesList;
