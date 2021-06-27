import styled from 'styled-components';
import { Colors } from './Colors';

interface IStyledProps {
  showHamburgerMenu: boolean;
}

export const Container = styled.div<IStyledProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: ${({ showHamburgerMenu }) => showHamburgerMenu ? '90%' : '300px'};
  margin-top: ${({ showHamburgerMenu }) => showHamburgerMenu ? 0 : '55px'};
`;

export const ProfileContainer = styled.div<IStyledProps>`
  background-color: white;
  margin-top: 25px;
  border: 1px solid #EBEDF0;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: ${({ showHamburgerMenu }) => showHamburgerMenu ? '100%' : '240px'};
  height: ${({ showHamburgerMenu }) => showHamburgerMenu ? undefined : '250px'};
`;

export const TopContainer = styled.div<IStyledProps>`
  width: 100%;
  border-bottom: 1px solid #EBEDF0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: ${({ showHamburgerMenu }) => showHamburgerMenu ? undefined : '150px'};
  padding-top: ${({ showHamburgerMenu }) => showHamburgerMenu ? '30px' : undefined};
  padding-bottom: ${({ showHamburgerMenu }) => showHamburgerMenu ? '30px' : undefined};
  cursor: pointer;
`;

export const BottomContainer = styled.div`
  flex: 1;
  padding-right: 15px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 15px;
  padding-top: 15px;
`;

export const NameContainer = styled.div`
  color: ${Colors.profileTextColor};
  font-weight: 600;
  margin-top: 10px;
`;

export const JobTitleContainer = styled.div`
  color: ${Colors.subProfileTextColor};
`;

export const ItemsContainer = styled.div`
  width: 240px;
  display: flex;
  justify-content: flex-start;
  padding-left: 30px;
  flex-direction: column;
`;
