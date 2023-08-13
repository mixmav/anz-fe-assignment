import { ChangeEvent, useEffect } from 'react';
import componentStyles from 'src/Assets/Styles/components.module.css';
import utilityStyles from 'src/Assets/Styles/utility.module.css';
import styles from './transactions.module.css';
import { useAccountsContext } from 'src/Context/AccountsContext';
import parseAndTransformCSV from './util/parseAndTransformCSV';

const AccountSelector = () => {
    const {
        selectedAccount,
        parsedAccountData,
        setSelectedAccount,
        setParsedAccountData,
    } = useAccountsContext();

    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(event.target.value);
        setSelectedAccount(value);
    };
    useEffect(() => {
        fetch('/api/sample_data.csv')
            .then((response) => response.text())
            .then((csvText) => {
                setParsedAccountData(parseAndTransformCSV(csvText));
                return;
            })
            .catch((error) => {
                // Would typically log to an error logging service like Sentry
                // TODO display a user friendly error message
                console.error('Error fetching or parsing CSV:', error);
            });
    }, [setParsedAccountData]);
    return (
        <label
            className={`${componentStyles.formLabel} ${styles.accountSelect}`}
        >
            <span className={`${utilityStyles.screenReaderOnly}`}>
                Select an account
            </span>
            <select
                defaultValue={selectedAccount}
                onChange={onChange}
                className={`${componentStyles.formSelect}`}
            >
                <>
                    <option value="0">All Accounts</option>
                    {parsedAccountData &&
                        parsedAccountData.map((account, key) => {
                            return (
                                <option key={key} value={key + 1}>
                                    {`Account ${key + 1}`}
                                </option>
                            );
                        })}
                </>
            </select>
        </label>
    );
};

export default AccountSelector;
