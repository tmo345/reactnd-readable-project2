

import type { SortingAction, SortingState } from "../types/sorting-types";

const initialSorting: SortingState = {
  flag: "timestamp",
  direction: "descending"
};

const sorting = (
  state: SortingState = initialSorting,
  action: SortingAction
) => {
  switch (action.type) {
    case "SET_SORT_POST_FLAG":
      return {
        flag: action.flag,
        direction: action.direction
      };
    default:
      return state;
  }
};

export default sorting;
