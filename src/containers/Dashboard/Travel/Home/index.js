import React, { useContext, useEffect, useState } from 'react';
import { GlobalStateContext } from '../../../../context/globalContext';
import { getAllTravels } from '../../../../api/travel';
import { Loading, Error, Empty } from '../../../../components/ScreenCases';
import { Container, Header, Title } from './style';
import { RoundedButton } from '../../../../components/Button';

function TravelHome() {
  const state = useContext(GlobalStateContext);
  const [travels, setTravels] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTravels = async () => {
      setLoading(true);
      if (state.user) {
        const travelsUser = await getAllTravels(state.user.id);

        if (travelsUser.data) {
          setTravels(travelsUser.data);
        }

        if (travelsUser.message) {
          setError('Ocorreu um erro ao carregar viagens.');
        }
      }
      setLoading(false);
    };

    getTravels();
  }, [state.user]);

  return (
    <Container>
      <Header>
        <Title>Viagem</Title>
        <RoundedButton />
      </Header>
      {loading && <Loading />}
      {error && <Error message='Ocorreu um erro ao carregar viagens.' />}
      {travels && travels.length === 0 && (
        <Empty message='Você não possui viagens. Para adicionar, só clicar no botão acima.' />
      )}
      {travels && travels.length > 0 && (
        <div>
          {travels.map((travel) => (
            <div>{travel.title}</div>
          ))}
        </div>
      )}
    </Container>
  );
}

export default TravelHome;
