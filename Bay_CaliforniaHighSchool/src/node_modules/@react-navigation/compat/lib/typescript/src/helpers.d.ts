import * as NavigationActions from './NavigationActions';
declare type NavigateActionPayload = Parameters<typeof NavigationActions.navigate>['0'];
declare type NavigateActionType = ReturnType<typeof NavigationActions.navigate>;
export declare function navigate(routeName: string, params?: object, action?: never): NavigateActionType;
export declare function navigate(options: NavigateActionPayload): NavigateActionType;
export declare function goBack(fromKey?: null | string): {
    type: "GO_BACK";
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "NAVIGATE";
    payload: {
        key: string;
        name?: undefined;
        params?: object | undefined;
    } | {
        name: string;
        key?: string | undefined;
        params?: object | undefined;
    };
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "RESET";
    payload: import("@react-navigation/routers").PartialState<import("@react-navigation/routers").NavigationState>;
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "SET_PARAMS";
    payload: {
        params?: object | undefined;
    };
    source?: string | undefined;
    target?: string | undefined;
} | ((state: import("@react-navigation/routers").NavigationState) => {
    source: string | null | undefined;
    target: string;
    type: "GO_BACK";
} | {
    source: string | null | undefined;
    target: string;
    type: "NAVIGATE";
    payload: {
        key: string;
        name?: undefined;
        params?: object | undefined;
    } | {
        name: string;
        key?: string | undefined;
        params?: object | undefined;
    };
} | {
    source: string | null | undefined;
    target: string;
    type: "RESET";
    payload: import("@react-navigation/routers").PartialState<import("@react-navigation/routers").NavigationState>;
} | {
    source: string | null | undefined;
    target: string;
    type: "SET_PARAMS";
    payload: {
        params?: object | undefined;
    };
});
export declare function setParams(params: object): import("@react-navigation/routers/lib/typescript/src/CommonActions").Action;
export declare function reset(): import("@react-navigation/routers/lib/typescript/src/CommonActions").Action;
export declare function replace(routeName: string, params?: object, action?: never): import("@react-navigation/routers").StackActionType;
export declare function push(routeName: string, params?: object, action?: never): import("@react-navigation/routers").StackActionType;
export declare function pop(n: number): import("@react-navigation/routers").StackActionType;
export declare function popToTop(): import("@react-navigation/routers").StackActionType;
export declare function dismiss(): import("@react-navigation/routers/lib/typescript/src/CommonActions").Action;
export declare function jumpTo(routeName: string): import("@react-navigation/routers").TabActionType;
export declare function openDrawer(): import("@react-navigation/routers").DrawerActionType;
export declare function closeDrawer(): import("@react-navigation/routers").DrawerActionType;
export declare function toggleDrawer(): import("@react-navigation/routers").DrawerActionType;
export {};
