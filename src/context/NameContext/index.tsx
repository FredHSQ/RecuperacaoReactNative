import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ContextProps {
	children: React.ReactNode
}

export interface NameContextProvider {
	name: string,
	addName: (name:string) => void
}


export const NameContext = createContext<NameContextProvider>({
	name: '',
	addName: ()=> {}
});

export const NameProvider = ({ children }: ContextProps) => {
	const [name, setName] = useState<string>('');

	useEffect(()=>{
		getData()
			.then(res => {
				setName(res ? res : '');
			})
	}, []);

	const storeData = async (value: string) => {
		try {
			await AsyncStorage.setItem('name', value);
		} catch (e) {
			// saving error
		}
	};

	const getData = async () => {
		try {
			const value = await AsyncStorage.getItem('name');
			return value != null ? value : '';
		} catch (e) {
			// error reading value
		}
	};

	function addName(name: string) {
		setName(name);
		storeData(name);
	}

	return (
		<NameContext.Provider
			value={{
				name,
				addName
			}}
		>
			{children}
		</NameContext.Provider>
	)
}