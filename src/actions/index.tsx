import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from "../constants";

export interface IncrementEnthusiasm {
  type: INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: INCREMENT_ENTHUSIASM
  };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: DECREMENT_ENTHUSIASM
  };
}
