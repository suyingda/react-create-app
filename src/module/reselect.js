import { createSelector } from "reselect";
export const getReselect = (state, params) => {
    return {
        reselect: createSelector([(data) => data[params]], (params) => state(params))
    }

}
