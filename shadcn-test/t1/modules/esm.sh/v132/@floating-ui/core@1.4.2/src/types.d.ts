import type { Axis, ClientRectObject, ElementRects, Length, Placement, Rect, SideObject, Strategy } from 'https://esm.sh/v132/@floating-ui/utils@0.1.3/src/types.d.ts';
export type { AlignedPlacement, Alignment, Axis, ClientRectObject, ElementRects, Length, Padding, Placement, Rect, Side, SideObject, Strategy, VirtualElement, } from 'https://esm.sh/v132/@floating-ui/utils@0.1.3/src/types.d.ts';
type Promisable<T> = T | Promise<T>;
/**
 * Function option to derive middleware options from state.
 */
export type Derivable<T> = (state: MiddlewareState) => T;
/**
 * Platform interface methods to work with the current platform.
 * @see https://floating-ui.com/docs/platform
 */
export interface Platform {
    getElementRects: (args: {
        reference: ReferenceElement;
        floating: FloatingElement;
        strategy: Strategy;
    }) => Promisable<ElementRects>;
    getClippingRect: (args: {
        element: any;
        boundary: Boundary;
        rootBoundary: RootBoundary;
        strategy: Strategy;
    }) => Promisable<Rect>;
    getDimensions: (element: any) => Promisable<Dimensions>;
    convertOffsetParentRelativeRectToViewportRelativeRect?: (args: {
        rect: Rect;
        offsetParent: any;
        strategy: Strategy;
    }) => Promisable<Rect>;
    getOffsetParent?: (element: any) => Promisable<any>;
    isElement?: (value: any) => Promisable<boolean>;
    getDocumentElement?: (element: any) => Promisable<any>;
    getClientRects?: (element: any) => Promisable<Array<ClientRectObject>>;
    isRTL?: (element: any) => Promisable<boolean>;
    getScale?: (element: any) => Promisable<{
        x: number;
        y: number;
    }>;
}
export type Coords = {
    [key in Axis]: number;
};
export interface MiddlewareData {
    [key: string]: any;
    arrow?: Partial<Coords> & {
        centerOffset: number;
    };
    autoPlacement?: {
        index?: number;
        overflows: Array<{
            placement: Placement;
            overflows: Array<number>;
        }>;
    };
    flip?: {
        index?: number;
        overflows: Array<{
            placement: Placement;
            overflows: Array<number>;
        }>;
    };
    hide?: {
        referenceHidden?: boolean;
        escaped?: boolean;
        referenceHiddenOffsets?: SideObject;
        escapedOffsets?: SideObject;
    };
    offset?: Coords;
    shift?: Coords;
}
export interface ComputePositionConfig {
    /**
     * Object to interface with the current platform.
     */
    platform: Platform;
    /**
     * Where to place the floating element relative to the reference element.
     */
    placement?: Placement;
    /**
     * The strategy to use when positioning the floating element.
     */
    strategy?: Strategy;
    /**
     * Array of middleware objects to modify the positioning or provide data for
     * rendering.
     */
    middleware?: Array<Middleware | null | undefined | false>;
}
export interface ComputePositionReturn extends Coords {
    /**
     * The final chosen placement of the floating element.
     */
    placement: Placement;
    /**
     * The strategy used to position the floating element.
     */
    strategy: Strategy;
    /**
     * Object containing data returned from all middleware, keyed by their name.
     */
    middlewareData: MiddlewareData;
}
export type ComputePosition = (reference: unknown, floating: unknown, config: ComputePositionConfig) => Promise<ComputePositionReturn>;
export interface MiddlewareReturn extends Partial<Coords> {
    data?: {
        [key: string]: any;
    };
    reset?: boolean | {
        placement?: Placement;
        rects?: boolean | ElementRects;
    };
}
export type Middleware = {
    name: string;
    options?: any;
    fn: (state: MiddlewareState) => Promisable<MiddlewareReturn>;
};
export type Dimensions = {
    [key in Length]: number;
};
export type ReferenceElement = any;
export type FloatingElement = any;
export interface Elements {
    reference: ReferenceElement;
    floating: FloatingElement;
}
export interface MiddlewareState extends Coords {
    initialPlacement: Placement;
    placement: Placement;
    strategy: Strategy;
    middlewareData: MiddlewareData;
    elements: Elements;
    rects: ElementRects;
    platform: Platform;
}
/**
 * @deprecated use `MiddlewareState` instead.
 */
export type MiddlewareArguments = MiddlewareState;
export type Boundary = any;
export type RootBoundary = 'viewport' | 'document' | Rect;
export type ElementContext = 'reference' | 'floating';
export { computePosition } from './computePosition.d.ts';
export { detectOverflow, Options as DetectOverflowOptions, } from './detectOverflow.d.ts';
export { arrow, ArrowOptions } from './middleware/arrow.d.ts';
export { autoPlacement, AutoPlacementOptions } from './middleware/autoPlacement.d.ts';
export { flip, FlipOptions } from './middleware/flip.d.ts';
export { hide, HideOptions } from './middleware/hide.d.ts';
export { inline, InlineOptions } from './middleware/inline.d.ts';
export { offset, OffsetOptions } from './middleware/offset.d.ts';
export { limitShift, LimitShiftOptions, shift, ShiftOptions, } from './middleware/shift.d.ts';
export { size, SizeOptions } from './middleware/size.d.ts';
export { rectToClientRect } from 'https://esm.sh/v132/@floating-ui/utils@0.1.3/src/types.d.ts';
