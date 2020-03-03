import { NavigationState, PartialState, ParamListBase, NavigationProp, RouteProp } from '@react-navigation/native';
import { CompatNavigationProp } from './types';
export default function createCompatNavigationProp<NavigationPropType extends NavigationProp<ParamListBase>, ParamList extends ParamListBase = NavigationPropType extends NavigationProp<infer P> ? P : ParamListBase>(navigation: NavigationPropType, state: (RouteProp<ParamList, keyof ParamList> & {
    state?: NavigationState | PartialState<NavigationState>;
}) | NavigationState | PartialState<NavigationState>, context: Record<string, any>, isFirstRouteInParent?: boolean): CompatNavigationProp<NavigationPropType>;
