import React, { useState } from 'react';

import { PageHeader } from '../../../../components/Header';
import { Title } from '../../../../components/Typography';
import { Input, InputContainer, Label } from '../../../../components/Input';
import { ErrorFormMessage } from '../../../../components/Message';

function TravelCreate() {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  return (
    <div>
      <PageHeader>
        <Title>Criar Viagem</Title>
      </PageHeader>
      <div>
        <InputContainer width="100%">
          <Input
            type="text"
            id="email"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Label htmlFor="email">E-mail</Label>
          {nameError && <ErrorFormMessage message={nameError} />}
        </InputContainer>
      </div>
    </div>
  );
}

export default TravelCreate;
