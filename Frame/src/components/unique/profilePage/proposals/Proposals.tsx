import React, { ChangeEvent, ReactNode, useState } from 'react';
import { Colors } from '../../../../helper/styled/Colors';
import {
  Cell,
  Container,
  MoreContainer,
  Row,
  TableContainer,
  TableWrapper,
  ThCell,
  TitleContainer,
  buttonStyles,
  inputStyles
} from '../../../../helper/styled/ProposalsComponents';

interface IProps {
  isFormVisible: boolean;
}

interface Proposal {
  name?: string;
  entity?: string;
  location?: string;
  expertise?: string;
  date?: string;
  firm?: string;
}

const PROPOSALS_DATA: Proposal[] = [
  { name: 'Operation Tindeen', entity: 'Renault Cordova', location: 'France', expertise: '#Tax', date: '20/01/2018', firm: 'Racine' },
  { name: 'Op. Prometheus', entity: 'Renault HQ', location: 'USA', expertise: '#M&A', date: '18/02/2019', firm: 'Clifford chance'},
  { name: 'Op. Latandre', entity: 'Renault Brno', location: 'Italia', expertise: '#Social', date: '18/02/2019', firm: 'SVZ'},
]

const Proposals = (props: IProps) => {
  const [name, setName] = useState('');
  const [entity, setEntity] = useState('');
  const [location, setLocation] = useState('');
  const [expertise, setExpertise] = useState('');
  const [date, setDate] = useState('');
  const [firm, setFirm] = useState('');

  const [proposals, setProposals] = useState(PROPOSALS_DATA);
  const { isFormVisible } = props;

  const onRemoveItem = (indexToRemove: number) => {
    setProposals((data: Proposal[]) => data.filter((proposal: Proposal, index: number): boolean => index !== indexToRemove));
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = e.currentTarget.value;
    switch(index) {
      case 1:
        setName(newValue);
        break;
      case 2:
        setEntity(newValue);
        break;
      case 3:
        setLocation(newValue);
        break;
      case 4:
        setExpertise(newValue);
        break;
      case 5:
        setDate(newValue);
        break;
      case 6:
        setFirm(newValue);
        break;
    }
  }

  const renderRows = (): ReactNode=> {
    return proposals.map((proposal: Proposal, index: number): ReactNode => {
      const { date, entity, expertise, firm, location, name } = proposal;
      return (
        <Row>
          <Cell>{name}</Cell>
          <Cell>{entity}</Cell>
          <Cell>{location}</Cell>
          <Cell>{expertise}</Cell>
          <Cell>{date}</Cell>
          <Cell>{firm}</Cell>
          { isFormVisible &&
            <Cell>
              <img
                src="/media/icons/plus.svg"
                alt=""
                style={{ width: 20, height: 20, transform: `rotate(45deg)` }}
                onClick={() => onRemoveItem(index)}
              />
            </Cell>
          }
        </Row>
      );
    });
  }

  const onSubmit = () => {
    const newElement = {
      name: name,
      entity: entity,
      location: location,
      expertise: expertise,
      date: date,
      firm: firm
    }
    setProposals((oldArray: Proposal[]) => [...oldArray, newElement]);
    setName('');
    setEntity('');
    setLocation('');
    setExpertise('');
    setDate('');
    setFirm('');
  }

  return (
    <Container>
      <TitleContainer>Proposals</TitleContainer>
      <TableWrapper>
        <TableContainer>
          <Row style={{ borderBottom: `1px solid ${Colors.subProfileTextColor}`}}>
            <ThCell>Name</ThCell>
            <ThCell>Entity</ThCell>
            <ThCell>Location</ThCell>
            <ThCell>Expertise</ThCell>
            <ThCell>Date</ThCell>
            <ThCell>Firm</ThCell>
            { isFormVisible &&
              <ThCell>Delete</ThCell>
            }
          </Row>
          { renderRows() }
        </TableContainer>
        { isFormVisible &&
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'flex-start' }}>
            <input type="text" placeholder="Name..." style={inputStyles} value={name} onChange={(e) => onChange(e, 1)} />
            <input type="text" placeholder="Entity..." style={inputStyles} value={entity} onChange={(e) => onChange(e, 2)} />
            <input type="text" placeholder="Location..." style={inputStyles} value={location} onChange={(e) => onChange(e, 3)} />
            <input type="text" placeholder="Expertise..." style={inputStyles} value={expertise} onChange={(e) => onChange(e, 4)} />
            <input type="text" placeholder="Date..." style={inputStyles} value={date} onChange={(e) => onChange(e, 5)} />
            <input type="text" placeholder="Firm..." style={inputStyles} value={firm} onChange={(e) => onChange(e, 6)} />
            <button style={buttonStyles} onClick={onSubmit}>Add</button>
          </div>
        }
        <MoreContainer>
          See more proposals
        </MoreContainer>
      </TableWrapper>
    </Container>
  );
}

export default Proposals;
