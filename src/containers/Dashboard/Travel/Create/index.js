import React, { useState } from 'react';

import { PageHeader } from '../../../../components/Header';
import { Title } from '../../../../components/Typography';
import { InputLabel } from '../../../../components/Input';
import {
  CreateTravelsForm,
  CreateTravelsRow,
  DatePickerWithStyle,
  ButtonContainer,
} from './style';
import { registerLocale } from 'react-datepicker';
import { history } from '../../../../context/history';
import ptBR from 'date-fns/locale/pt-BR';
import { PrimaryButton } from '../../../../components/Button';
import { createTravel } from '../../../../api/travel';
import { Loading } from '../../../../components/ScreenCases';
import { ErrorMessage } from '../../../../components/Message';
registerLocale('ptBR', ptBR);

function TravelCreate() {
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [error, setError] = useState(false);

  const onDatesStartChange = (date) => {
    setStartDate(date);
  };

  const onDatesEndChange = (date) => {
    setEndDate(date);
  };

  const startLoading = () => setLoading(true);
  const endLoading = () => setLoading(false);

  const areFieldsValid = () => {
    let errors = 0;
    if (title.length === 0) {
      errors++;
      setTitleError('Por favor, digite um título');
    }

    return errors === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    startLoading();
    console.log('get here');

    const validation = areFieldsValid();
    console.log({ validation });

    if (!validation) return;

    try {
      const travelObject = {
        title,
        startDate,
        endDate,
      };

      console.log({ travelObject });

      await createTravel(travelObject);

      history.push('/viagem');
    } catch (err) {
      return setError(true);
    }

    endLoading();
  };

  const isButtonDisabled = title.length === 0 || loading || titleError;

  return (
    <CreateTravelsForm onSubmit={onSubmit}>
      <PageHeader>
        <Title>Criar Viagem</Title>
      </PageHeader>
      {!loading && !error && (
        <CreateTravelsRow>
          <InputLabel
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            label="Título"
            error={titleError}
            width="100%"
            margin="32px 0 24px 0"
          />
          <CreateTravelsRow>
            <DatePickerWithStyle
              selected={startDate}
              onChange={onDatesStartChange}
              locale="ptBR"
              placeholderText="Data de Início"
            />
            <DatePickerWithStyle
              selected={endDate}
              onChange={onDatesEndChange}
              locale="ptBR"
              placeholderText="Data de Término"
            />
          </CreateTravelsRow>
        </CreateTravelsRow>
      )}
      {loading && !error && <Loading />}
      {error && <ErrorMessage />}
      <ButtonContainer>
        <PrimaryButton disabled={isButtonDisabled} type="submit">
          Criar
        </PrimaryButton>
      </ButtonContainer>
    </CreateTravelsForm>
  );
}

export default TravelCreate;
