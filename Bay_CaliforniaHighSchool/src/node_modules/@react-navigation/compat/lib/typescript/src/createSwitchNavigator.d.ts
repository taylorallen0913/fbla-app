/// <reference types="react" />
import { DefaultNavigatorOptions, TabRouterOptions } from '@react-navigation/native';
declare type Props = DefaultNavigatorOptions<{}> & TabRouterOptions;
declare const _default: <NavigationPropType extends import("@react-navigation/native").NavigationProp<any, any, any, any, any>, ParamList extends Record<string, object | undefined> = NavigationPropType extends import("@react-navigation/native").NavigationProp<infer P, string, import("@react-navigation/native").NavigationState, {}, {}> ? P : Record<string, object | undefined>, ScreenOptions extends {} = NavigationPropType extends import("@react-navigation/native").NavigationProp<any, any, any, infer O, {}> ? O : {}, NavigationConfig extends {} = (Pick<Props, "children" | "backBehavior"> & {
    initialRouteName?: string | undefined;
    screenOptions?: {} | ((props: {
        route: import("@react-navigation/native").RouteProp<Record<string, object | undefined>, string>;
        navigation: any;
    }) => {}) | undefined;
}) | import("react").PropsWithChildren<Pick<Props, "children" | "backBehavior"> & {
    initialRouteName?: string | undefined;
    screenOptions?: {} | ((props: {
        route: import("@react-navigation/native").RouteProp<Record<string, object | undefined>, string>;
        navigation: any;
    }) => {}) | undefined;
}>>(routeConfig: import("./types").CompatRouteConfig<NavigationPropType, NavigationPropType extends import("@react-navigation/native").NavigationProp<infer P_1, string, import("@react-navigation/native").NavigationState, {}, {}> ? P_1 : Record<string, object | undefined>>, navigationConfig?: Partial<Pick<NavigationConfig, Exclude<keyof NavigationConfig, "screenOptions">>> & {
    order?: Extract<keyof ParamList, string>[] | undefined;
    defaultNavigationOptions?: ScreenOptions | undefined;
    navigationOptions?: Record<string, any> | undefined;
}) => {
    ({ screenProps }: {
        screenProps?: unknown;
    }): JSX.Element;
    navigationOtions: Record<string, any> | undefined;
};
export default _default;
