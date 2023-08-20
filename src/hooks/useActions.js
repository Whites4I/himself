import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

//Necesse add actions with other clices...
import { actions } from "../store/auth/auth.slice";

const rootActions = {
  ...actions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
