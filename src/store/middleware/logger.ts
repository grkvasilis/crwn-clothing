import { Middleware } from 'redux';
import { RootState } from '../store';


export const loggerMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action: unknown) => {
    const act = action as { type?: string; payload?: unknown };

    if (!act.type) {
      return next(action);
    }

    console.log('type: ', act.type);
    console.log('payload: ', act.payload);
    console.log('currentState: ', store.getState());

    next(action);
    console.log('next state: ', store.getState());
  };