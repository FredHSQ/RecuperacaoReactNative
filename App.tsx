import { Routes } from './src/Routes';
import { NameProvider } from './src/context/NameContext';

export default function App() {
  return (
    <NameProvider>
      <Routes />
    </NameProvider>
  );
}

