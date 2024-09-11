// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../../../../esm.sh/preact@10.19.6/compat.js'
import { Primitive } from '../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js';

type Scope<C = any> = {
    [scopeName: string]: React.Context<C>[];
} | undefined;
type ScopeHook = (scope: Scope) => {
    [__scopeProp: string]: Scope;
};
interface CreateScope {
    scopeName: string;
    (): ScopeHook;
}

declare const createProgressScope: CreateScope;
type PrimitiveDivProps = React.ComponentPropsWithoutRef<typeof Primitive.div>;
interface ProgressProps extends PrimitiveDivProps {
    value?: number | null | undefined;
    max?: number;
    getValueLabel?(value: number, max: number): string;
}
declare const Progress: React.ForwardRefExoticComponent<ProgressProps & React.RefAttributes<HTMLDivElement>>;
interface ProgressIndicatorProps extends PrimitiveDivProps {
}
declare const ProgressIndicator: React.ForwardRefExoticComponent<ProgressIndicatorProps & React.RefAttributes<HTMLDivElement>>;
declare const Root: React.ForwardRefExoticComponent<ProgressProps & React.RefAttributes<HTMLDivElement>>;
declare const Indicator: React.ForwardRefExoticComponent<ProgressIndicatorProps & React.RefAttributes<HTMLDivElement>>;

export { Indicator, Progress, ProgressIndicator, type ProgressIndicatorProps, type ProgressProps, Root, createProgressScope };
