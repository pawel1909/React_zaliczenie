import React, { useState } from 'react';
import { connect } from 'react-redux';

import { User, updateUser } from '../../../store/actions/userActions';
import {
  Container,
  LeftContainer,
  RightContainer
} from '../../../helper/styled/ProfileDataContainerComponents';
import { buttonStyles, inputStyles } from '../../../helper/styled/ProfileDataFormComponents';

interface IProps {
  onEditProfileDataClick: Function;
  setCity: Function;
  userMe: User;
  city: string;
  updateUser: Function;
}

const ProfileDataForm = (props: IProps) => {
  const { onEditProfileDataClick, setCity, userMe, city, updateUser } = props;
  const { name, company: { bs }, email, phone, company } = userMe;

  const [nameForm, setNameForm] = useState(name);
  const [companyName, setCompanyName] = useState(company.name);
  const [cityForm, setCityForm] = useState(city);
  const [job, setJob] = useState(bs);
  const [emailForm, setEmailForm] = useState(email);
  const [phoneForm, setPhoneForm] = useState(phone);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = event.target.value;

    switch(index) {
      case 1:
        setNameForm(newValue);
        break;
      case 2:
        setCompanyName(newValue);
        break;
      case 3:
        setCityForm(newValue);
        return;
      case 4:
        setJob(newValue);
        break;
      case 5:
        setEmailForm(newValue);
        break;
      case 6:
        setPhoneForm(newValue);
        break;
    }
  }

  const onSubmitForm = () => {
    const newUser: User = {
      name: '',
      company: {
        name: '',
        bs: ''
      },
      email: '',
      phone: ''
    };

    newUser.name = nameForm;
    newUser.company.name = companyName;
    newUser.company.bs = job;
    newUser.email = emailForm;
    newUser.phone = phoneForm;

    updateUser(newUser);
    setCity(cityForm);
    onEditProfileDataClick();
  }

  return (
    <Container>
      <LeftContainer>
        <input
          type="text"
          placeholder="Name and surname..."
          style={inputStyles}
          value={nameForm}
          onChange={(e) => onChange(e, 1)}
        />
        <input
          type="text"
          placeholder="Company name..."
          style={inputStyles}
          value={companyName}
          onChange={(e) => onChange(e, 2)}
        />
        <input
          type="text"
          placeholder="City..."
          style={inputStyles}
          value={cityForm}
          onChange={(e) => onChange(e, 3)}
        />
        <input
          type="text"
          placeholder="Job..."
          style={inputStyles}
          value={job}
          onChange={(e) => onChange(e, 4)}
        />
      </LeftContainer>
      <RightContainer>
        <input
          type="text"
          placeholder="Email..."
          style={inputStyles}
          value={emailForm}
          onChange={(e) => onChange(e, 5)}
        />
        <input
          type="text"
          placeholder="Phone..."
          style={inputStyles}
          value={phoneForm}
          onChange={(e) => onChange(e, 6)}
        />
        <button
          style={buttonStyles}
          onClick={onSubmitForm}
        >
          Save
        </button>
      </RightContainer>
    </Container>
  );
}

function mapDispatchToProps(dispatch: any) {
  return {
    updateUser: (user: User) => dispatch(updateUser(user)),
  }
}

export default connect(null, mapDispatchToProps)(ProfileDataForm);
