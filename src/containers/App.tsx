import { REQUEST_INFO } from "../constants";
import { connect, Dispatch } from "react-redux";
import App from "../components/App/App";
interface IInfo {
  info: object;
}
const mapStateToProps = (state: IInfo): object => {
  return {
    info: state.info
  };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return { requestInfo: dispatch({ type: REQUEST_INFO }) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
