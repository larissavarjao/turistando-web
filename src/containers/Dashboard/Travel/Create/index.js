import React, { useState } from 'react';

import { PageHeader } from '../../../../components/Header';
import { Title } from '../../../../components/Typography';
import { InputLabel } from '../../../../components/Input';
import { CreateTravelsContainer, CreateTravelsRow } from './style';

import { DateRangePicker } from 'react-dates';

function TravelCreate() {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [focusedInput, setfocusedInput] = useState(null);

  const onDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const onFocusChange = (focusedInput) => {
    setfocusedInput(onFocusChange);
  };

  return (
    <CreateTravelsContainer>
      <PageHeader>
        <Title>Criar Viagem</Title>
      </PageHeader>
      <CreateTravelsRow>
        <InputLabel
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          label="Name"
          error={nameError}
          width="100%"
        />
        <DateRangePicker
          onDatesChange={onDatesChange}
          startDateId="start-date-id"
          onFocusChange={onFocusChange}
          endDateId="end-date-id"
          focusedInput={focusedInput}
          startDate={startDate}
          endDate={endDate}
        />
      </CreateTravelsRow>
    </CreateTravelsContainer>
  );
}

export default TravelCreate;
