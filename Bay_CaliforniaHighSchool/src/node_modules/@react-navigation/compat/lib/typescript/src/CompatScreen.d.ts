import * as React from 'react';
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
declare type Props<ParamList extends ParamListBase> = {
    navigation: NavigationProp<ParamList>;
    route: RouteProp<ParamList, string>;
    component: React.ComponentType<any>;
};
declare function ScreenComponent<ParamList extends ParamListBase>(props: Props<ParamList>): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof ScreenComponent>;
export default _default;
