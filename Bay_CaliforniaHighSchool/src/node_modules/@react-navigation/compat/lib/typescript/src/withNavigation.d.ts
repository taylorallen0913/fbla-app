import * as React from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { CompatNavigationProp } from './types';
declare type InjectedProps<T extends NavigationProp<ParamListBase>> = {
    navigation: CompatNavigationProp<T>;
};
export default function withNavigation<T extends NavigationProp<ParamListBase>, P extends InjectedProps<T>, C extends React.ComponentType<P>>(Comp: C): {
    ({ onRef, ...rest }: Exclude<P, InjectedProps<T>> & {
        onRef?: (C extends React.ComponentClass<any, any> ? React.Ref<InstanceType<C>> : never) | undefined;
    }): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    displayName: string;
};
export {};
