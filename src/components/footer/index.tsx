import * as React from 'react';
import styled from 'styled-components';

export interface IFooterProps {
  className?: string;
}

function Footer(props: IFooterProps) {
  const { className } = props;

  return (
    <footer className={className}>
      Some content, such as the Extra Life™ logo are copyright Children's Miracle Network Hospitals® • Code available on{' '}
      <a href="https://github.com/weegeekps/donations-dashboard">GitHub</a> and licensed under the GPL v3.0
    </footer>
  );
}

export default styled(Footer)`
  font-size: 0.8rem;
  text-align: center;
  margin: 1rem;
`;
