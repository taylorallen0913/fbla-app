import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { CompatNavigationProp } from './types';
export default function useCompatNavigation<T extends NavigationProp<ParamListBase>>(): CompatNavigationProp<T, T extends NavigationProp<infer P, string, import("@react-navigation/native").NavigationState, {}, {}> ? P : Record<string, object | undefined>, Extract<T extends NavigationProp<any, infer R, import("@react-navigation/native").NavigationState, {}, {}> ? R : string, string>>;
