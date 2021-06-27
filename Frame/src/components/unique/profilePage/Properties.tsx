import React, { useState } from 'react';

import PropertiesContainer from './PropertiesContainer';

interface IProps {
  isFormVisible: boolean;
  setIsFormVisible: Function;
}

const Properties = (props: IProps) => {
  const [expertises, setExpertises] = useState(['Mergers and acquisition']);
  const [specialities, setSpecialities] = useState([
    'Cross border operation',
    'Transaction over 500ME/$'
  ]);
  const [admissions, setAdmisssions] = useState([
    'Paris bar association',
    'Tunisian bar association'
  ]);
  const [counties, setCounties] = useState([
    'Tunisia'
  ]);

  const { isFormVisible, setIsFormVisible } = props;

  const onEditForm = () => {
    setIsFormVisible(!isFormVisible);
  }

  return (
    <>
      <PropertiesContainer
        expertises={expertises}
        admissions={admissions}
        specialities={specialities}
        counties={counties}
        setExpertises={setExpertises}
        setSpecialities={setSpecialities}
        setAdmisssions={setAdmisssions}
        setCounties={setCounties}
        isFormVisible={isFormVisible}
        onEditForm={onEditForm}
      />
    </>
  );
}

export default Properties;
