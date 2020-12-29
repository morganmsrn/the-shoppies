import { CaretUpSquare, CaretDownSquare } from "react-bootstrap-icons";

export const NominationTabIcon: React.FC<{ isVisible: boolean }> = (
  isVisible
) => (isVisible ? <CaretDownSquare /> : <CaretUpSquare />);
