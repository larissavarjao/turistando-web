import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const CreateTravelsForm = styled.form`
  background: ${(props) => props.theme.white};
  border-radius: 8px;
  padding: 24px;
`;

export const CreateTravelsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
`;

export const DatePickerWithStyle = styled(DatePicker)`
  padding: 10px;
  width: calc(100% - 2 * 10px);
  border: 1px solid ${(props) => props.theme.grayDark};
  border-radius: 4px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.grayDark};
  font-size: 12px;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;
