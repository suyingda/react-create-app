

// Object.defineProperty(ModuleReduxThunk, "b", {
//     get: function () {
//         return this.moduleComp;
//     },
//     set: function (newValue) {
//         console.log('')
//         this.ModuleComp = newValue;
//     },
//     enumerable: true,
//     configurable: true
// });
import { combineReducers } from "redux";
import { ArrayModule } from './index';
export let ModuleReduxThunk = {
    ModuleComp: [],  //收集所有module
    ModuleReducers: {},  //收集所有reducers
    ModuleActions: [],  //收集所有actions
    ModuleCount: []  //收集所有key Module
};
ModuleReduxThunk.ModuleComp = ArrayModule;
const { ModuleComp, ModuleReducers, ModuleActions, ModuleCount } = ModuleReduxThunk;
for (let i in ModuleComp) {
    Object.assign(ModuleReducers, ModuleComp[i].reducers)
    ModuleCount[ModuleComp[i].name] = ModuleComp[i].reselect;
    ModuleActions[[ModuleComp[i].name]] = (ModuleComp[i].actions);
}
export const mapDispatchToProps = (params) => {
    let callDate = {};
    for (var i = 0; i < params.length; i++) {
        Object.assign(callDate, ModuleActions[params[i]])
    }
    return callDate;
};
window.mapDispatchToProps = mapDispatchToProps;
// const { first1, first2 } = Pub.reducers
let reducers = combineReducers(ModuleReducers);
export default reducers;
