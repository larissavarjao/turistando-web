import React from 'react';

function TravelDetails({ match }) {
  const travelId = match.params.id;
  return (
    <div>
      <span>TravelDetails {travelId}</span>
    </div>
  );
}

export default TravelDetails;
