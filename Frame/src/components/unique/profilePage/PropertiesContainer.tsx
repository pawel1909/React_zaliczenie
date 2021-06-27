import React from 'react';

import {
  MainTypeDiv,
  TypeDiv,
  TypeSpan
} from '../../../helper/styled/PropertiesContainerComponents';
import InlineProperties from './InlineProperties';

interface IProps {
  expertises: string[];
  specialities: string[];
  admissions: string[];
  counties: string[];
  setExpertises: Function;
  setSpecialities: Function;
  setAdmisssions: Function;
  setCounties: Function;
  isFormVisible: boolean;
  onEditForm: Function;
}

const PropertiesContainer = (props: IProps) => {
  const {
    expertises,
    admissions,
    specialities,
    counties,
    setAdmisssions,
    setCounties,
    setExpertises,
    setSpecialities,
    isFormVisible,
    onEditForm
  } = props;

  return (
    <>
      <div>
        <MainTypeDiv>
          <TypeSpan>Expertise</TypeSpan>
          <img
            src="/media/icons/pencil.svg"
            alt=""
            style={{ width: 20, height: 20 }}
            onClick={() => onEditForm()}
          />
        </MainTypeDiv>
        <InlineProperties
          isMainElement
          data={expertises}
          setState={setExpertises}
          isFormVisible={isFormVisible}
        />
      </div>
      <TypeDiv>
        <TypeSpan>Specialities</TypeSpan>
        <InlineProperties
          data={specialities}
          setState={setSpecialities}
          isFormVisible={isFormVisible}
        />
      </TypeDiv>
      <TypeDiv>
        <TypeSpan>Admission to practice law</TypeSpan>
        <InlineProperties
          data={admissions}
          setState={setAdmisssions}
          isFormVisible={isFormVisible}
        />
      </TypeDiv>
      <TypeDiv>
        <TypeSpan>Counties</TypeSpan>
        <InlineProperties
          data={counties}
          setState={setCounties}
          isFormVisible={isFormVisible}
        />
      </TypeDiv>
    </>
  );
}

export default PropertiesContainer;
