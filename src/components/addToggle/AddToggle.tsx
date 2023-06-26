import { useRecoilState } from 'recoil';
import { selectedMethodState } from '../../atoms/selectedMethodAtom';

import {
  ActiveButton,
  ActiveText,
  InactiveButton,
  InActiveText,
  Wrapper,
} from './AddToggle.styles';

interface TableSelectedTypes {
  [key: number]: string[];
}
interface AddToggleTypes {
  isTableView: boolean;
  setTableSelected: React.Dispatch<React.SetStateAction<TableSelectedTypes>>;
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
}
const AddToggle = ({
  isTableView,
  setTableSelected,
  setSelected,
}: AddToggleTypes) => {
  const [selectedMethod, setSelectedMethod] =
    useRecoilState(selectedMethodState);

  const handleButtonToggle = () => {
    if (selectedMethod === 'possible') {
      setSelectedMethod('impossible');
      if (isTableView) {
        setTableSelected({});
      } else {
        setSelected([]);
      }
    }

    if (selectedMethod === 'impossible') {
      setSelectedMethod('possible');
      if (isTableView) {
        setTableSelected({});
      } else {
        setSelected([]);
      }
    }
  };

  return (
    <Wrapper onClick={handleButtonToggle}>
      {selectedMethod === 'possible' ? (
        <>
          <ActiveButton selectedMethod={selectedMethod}>
            <ActiveText value="possible" selectedMethod={selectedMethod}>
              되는
            </ActiveText>
          </ActiveButton>
          <InactiveButton selectedMethod={selectedMethod}>
            <InActiveText value="impossible" onClick={handleButtonToggle}>
              안되는
            </InActiveText>
          </InactiveButton>
        </>
      ) : (
        <>
          <InactiveButton selectedMethod={selectedMethod}>
            <InActiveText value="possible">되는</InActiveText>
          </InactiveButton>
          <ActiveButton selectedMethod={selectedMethod}>
            <ActiveText
              value="impossible"
              onClick={handleButtonToggle}
              selectedMethod={selectedMethod}
            >
              안되는
            </ActiveText>
          </ActiveButton>
        </>
      )}
    </Wrapper>
  );
};

export default AddToggle;
