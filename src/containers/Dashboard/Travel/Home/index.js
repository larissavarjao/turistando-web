import React, { useContext, useEffect, useState } from 'react';

import { GlobalStateContext } from '../../../../context/globalContext';
import { getAllTravels } from '../../../../api/travel';
import { Loading, Error, Empty } from '../../../../components/ScreenCases';
import { Container, TravelsContainer, Travel, TravelDate } from './style';
import { RoundedButton } from '../../../../components/Button';
import { PageHeader } from '../../../../components/Header';
import { Title, SubSubTitle } from '../../../../components/Typography';
import { history } from '../../../../context/history';
import { formatDate } from '../../../../utils/date';

function TravelHome() {
  const state = useContext(GlobalStateContext);
  const [travels, setTravels] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const startLoading = () => setLoading(true);
  const endLoading = () => setLoading(false);

  const verifyDataAndSetUserTravels = (travelsUser) =>
    travelsUser.data && setTravels(travelsUser.data);

  useEffect(() => {
    const getAllUserTravels = async () => {
      try {
        const travelsUser = await getAllTravels(state.user.id);

        verifyDataAndSetUserTravels(travelsUser);
      } catch (err) {
        setError('Ocorreu um erro ao carregar viagens.');
      }
    };

    const getTravels = async () => {
      startLoading();

      state.user && (await getAllUserTravels());

      endLoading();
    };

    getTravels();
  }, [state.user]);

  const goToTravelDetail = (id) => history.push(`/viagem/${id}`);

  return (
    <Container>
      <PageHeader>
        <Title>Viagem</Title>
        <RoundedButton onClick={() => history.push('/viagem/criar')} />
      </PageHeader>
      {loading && <Loading />}
      {error && <Error message={error} />}
      {travels && travels.length === 0 && (
        <Empty message="Você não possui viagens. Para adicionar, só clicar no botão acima." />
      )}
      {travels && travels.length > 0 && (
        <TravelsContainer>
          {travels.map((travel) => (
            <Travel key={travel.id} onClick={() => goToTravelDetail(travel.id)}>
              <SubSubTitle>{travel.title}</SubSubTitle>
              {travel.startDate && travel.endDate && (
                <TravelDate>{`${formatDate(travel.startDate)} - ${formatDate(
                  travel.endDate
                )}`}</TravelDate>
              )}
            </Travel>
          ))}
        </TravelsContainer>
      )}
    </Container>
  );
}

export default TravelHome;
