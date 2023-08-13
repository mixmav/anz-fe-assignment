// AccountContext.tsx

import React, { createContext, useContext, useState } from 'react';
import { ParsedAccountData } from 'src/types/customTypes';

type AccountsContextType = {
    selectedAccount: number;
    parsedAccountData: ParsedAccountData[] | null;
    setSelectedAccount: React.Dispatch<React.SetStateAction<number>>;
    setParsedAccountData: React.Dispatch<React.SetStateAction<any>>;
};
interface AccountContextProviderProps {
    children: React.ReactNode;
}
const AccountsContext = createContext<AccountsContextType | undefined>(
    undefined
);

export const useAccountsContext = () => {
    const context = useContext(AccountsContext);
    if (!context) {
        throw new Error(
            'useAccountsContext must be used within an AccountsContextProvider'
        );
    }
    return context;
};

export const AccountsContextProvider: React.FC<AccountContextProviderProps> = ({
    children,
}) => {
    const [selectedAccount, setSelectedAccount] = useState<number>(0);
    const [parsedAccountData, setParsedAccountData] = useState<any>(null);

    const contextValue: AccountsContextType = {
        selectedAccount,
        parsedAccountData,
        setSelectedAccount,
        setParsedAccountData,
    };

    return (
        <AccountsContext.Provider value={contextValue}>
            {children}
        </AccountsContext.Provider>
    );
};
