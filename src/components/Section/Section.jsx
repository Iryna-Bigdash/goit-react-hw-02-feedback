import { SectionWraper, SectionTitle } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <>
      <SectionWraper>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </SectionWraper>
    </>
  );
}
