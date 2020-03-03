import { CommonActions, NavigationState } from '@react-navigation/native';
export declare function navigate({ routeName, params, key, action, }: {
    routeName: string;
    params?: object;
    key?: string;
    action?: never;
}): CommonActions.Action;
export declare function back(options?: {
    key?: null | string;
}): {
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
    payload: import("@react-navigation/native").PartialState<NavigationState>;
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "SET_PARAMS";
    payload: {
        params?: object | undefined;
    };
    source?: string | undefined;
    target?: string | undefined;
} | ((state: NavigationState) => {
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
    payload: import("@react-navigation/native").PartialState<NavigationState>;
} | {
    source: string | null | undefined;
    target: string;
    type: "SET_PARAMS";
    payload: {
        params?: object | undefined;
    };
});
export declare function setParams({ params, key, }: {
    params: object;
    key?: string;
}): CommonActions.Action;
