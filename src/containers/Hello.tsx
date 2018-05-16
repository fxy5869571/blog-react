import * as actions from "../actions/";
import { connect, Dispatch } from "react-redux";
import { IStoreState } from "../types";
import Hello from "../components/Hello";

export function mapStateToProps({
  enthusiasmLevel,
  languageName
}: IStoreState) {
  return { enthusiasmLevel, name: languageName };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
