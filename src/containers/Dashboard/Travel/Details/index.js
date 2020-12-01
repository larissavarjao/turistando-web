import React, { useEffect, useState } from 'react';

import { getTravelById } from '../../../../api/travel';
import { Loading, Error, Empty } from '../../../../components/ScreenCases';
import { Title } from '../../../../components/Typography';
import { Container } from './style';

function TravelDetails({ match }) {
  const travelId = match.params.id;
  const [travel, setTravel] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const startLoading = () => setLoading(true);
  const endLoading = () => setLoading(false);

  useEffect(() => {
    const getTravel = async () => {
      startLoading();

      try {
        const { data } = await getTravelById(travelId);
        setTravel(data);
      } catch (err) {
        setError(
          'Ocorreu um erro ao carregar a página. Tente novamente mais tarde'
        );
      }

      endLoading();
    };

    travelId && getTravel();
  }, [travelId]);

  return (
    <>
      {loading && <Loading />}
      {error && <Error message={error} />}
      {!loading && !error && !travel && (
        <Empty message="Essa Viagem não existe." />
      )}
      {!loading && !error && travel && (
        <Container>
          <Title>{travel.title}</Title>
        </Container>
      )}
    </>
  );
}

export default TravelDetails;
