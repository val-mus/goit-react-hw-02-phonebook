import PhoneBook from './modules/PhoneBook/PhoneBook';
import Section from 'components/shared/Section/Section';


export const App = () => {
  return (
    <>
      <Section title={'Phonebook'}>
          <PhoneBook />
      </Section>
    </>
  );
};
