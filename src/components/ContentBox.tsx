import styled from 'styled-components';

const ContainerContent = styled.p`
  width: var(--margin-content);
  margin: 0 auto;
`;

const ContentBox = ({
  background,
  children,
}: {
  children: any;
  background?: string;
}) => {
  return (
    <section className={`${background}`}>
      <ContainerContent>{children}</ContainerContent>
    </section>
  );
};

export default ContentBox;
