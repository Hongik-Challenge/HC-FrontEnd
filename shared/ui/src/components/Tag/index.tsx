
import styled from '@emotion/styled';

export interface TagProps extends React.ComponentProps<'div'> {
    text: string;
  }

export const Tag = ({text}: TagProps) => {
  return (
    <Wrapper>
      {text}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: '10px';
  background-color: '#FF5461';
  color: 'white';
  display: inline-block;
`;
