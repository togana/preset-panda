import { styled } from '../styled-system/jsx';
import { container } from '../styled-system/patterns';

const Text = ({ children }: { children: React.ReactNode }) => (
  <styled.p bg="bg" color="text">
    {children}
  </styled.p>
);

function App() {
  return (
    <div className={container()}>
      <Text>Hello 🐼!</Text>
    </div>
  );
}

export default App;
