import PhoneBook from './modules/PhoneBook/PhoneBook';
import Section from 'components/shared/Section/Section';
import Container from 'components/shared/Container/Container';

export const App = () => {
  return (
    <>
      <Section title={'Phonebook'}>
        <Container>
          <PhoneBook />
        </Container>
      </Section>
    </>
  );
};
