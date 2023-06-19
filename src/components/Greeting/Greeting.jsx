import { Container, Title, HeroImage } from './Greeting.styled.jsx';
import phonesImage from './phones.jpg';


export const Greeting = () => {
    return (
        <Container>
          <Title>
            Welcome on your ContactsBook!
          </Title>
          <HeroImage src={phonesImage} width='360' alt='phone' />
        </Container>
      );

}
