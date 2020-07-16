import React from 'react';
import { StudentsStore } from '../store/StudentsStore';

type RootStateContextValue = {
    studentsStore: StudentsStore
};

const RootStateContext = React.createContext<RootStateContextValue>({} as RootStateContextValue);

const studentsStore = new StudentsStore();

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <RootStateContext.Provider value={{ studentsStore }}>
            {children}
        </RootStateContext.Provider>
    );
};

export const useRootStore = () => React.useContext(RootStateContext);