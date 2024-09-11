import { ComponentChildren, createContext } from 'preact';
import { type Signal, useSignal } from "@preact/signals";
import { useState, useContext, useMemo } from 'preact/hooks';

export const Context = createContext(null)<State | undefined>;

type State = {
  wo_progress: Signal<number>
  wo_sets: Signal<number>
}

export interface stateProps {
  wo_progress: Signal<number>
  wo_sets: Signal<number>
}

export function Provider(props: {children: ComponentChildren}) {
  const wo_progressSignal = useSignal(0);
  const wo_setsSignal = useSignal(16);
  return (
    <>
      <Context.Provider
        value={{
          wo_progress: wo_progressSignal,
          wo_sets: wo_setsSignal
        }}
      >
        {props.children}
      </Context.Provider>
    </>
  );
}
