import React, { useContext, useEffect, useState } from 'react';
import { GlobalStateContext } from '../../../../context/globalContext';
import { getAllTravels } from '../../../../api/travel';
import { Loading, Error, Empty } from '../../../../components/ScreenCases';
import { Container } from './style';
import { RoundedButton } from '../../../../components/Button';
import { PageHeader } from '../../../../components/Header';
import { Title } from '../../../../components/Typography';
import { history } from '../../../../context/history';

function TravelHome() {
  const state = useContext(GlobalStateContext);
  const [travels, setTravels] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const startLoading = () => setLoading(true);
  const endLoading = () => setLoading(false);

  const verifyDataAndSetUserTravels = (travelsUser) => travelsUser.data && setTravels(travelsUser.data);

  const getAllUserTravels = async () => {
    try {
      const travelsUser = await getAllTravels(state.user.id);

      verifyDataAndSetUserTravels(travelsUser);
    } catch(err) {
      setError('Ocorreu um erro ao carregar viagens.');
    }
  }

  const getTravels = async () => {
    startLoading();

    state.user && await getAllUserTravels();
    
    endLoading();
  };

  useEffect(() => {
    getTravels();

    // eslint-disable-next-line
  }, [state.user]);

  return (
    <Container>
      <PageHeader>
        <Title>Viagem</Title>
        <RoundedButton onClick={() => history.push('/viagem/criar')} />
      </PageHeader>
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
