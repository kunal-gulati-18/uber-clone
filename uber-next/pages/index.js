import tw from 'tailwind-styled-components';
import ActionItems from './components/ActionItems';
import Map from './components/Map';

export default function Home() {
    return (
	   <Container>
		  <Map/>
		  <ActionItems/>
	   </Container>
    )
}

const Container = tw.div `
  flex flex-col h-screen
`;
