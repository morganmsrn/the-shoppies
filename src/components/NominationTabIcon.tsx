import { CaretUpSquare, CaretDownSquare } from "react-bootstrap-icons";

function NominationTabIcon(props: any) {
  if (props.isVisible) {
    return <CaretDownSquare />;
  } else {
    return <CaretUpSquare />;
  }
}

export default NominationTabIcon;
