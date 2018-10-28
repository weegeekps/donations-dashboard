import { DateTime } from 'luxon';
import * as React from 'react';
import styled from 'styled-components';

import { IDonation } from 'src/interfaces';
import { Breakpoints, Colors } from 'src/styles';

export interface IDonationCardProps {
  className?: string;
  donation: IDonation;
}

const HeaderRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0.5rem 0;

  @media (min-width: ${Breakpoints.TABLET_WIDTH}) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
  }
`;

const DonorName = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const DonationAmount = styled.h3`
  font-size: 1.25rem;
  margin: 0;

  @media (min-width: ${Breakpoints.TABLET_WIDTH}) {
    font-size: 1.5rem;
  }
`;

const DonationTime = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const DonationMessageBlock = styled.div`
  display: none;

  @media (min-width: ${Breakpoints.TABLET_WIDTH}) {
    display: block;
  }
`;

const StyledHorizontalRule = styled.hr`
  border: 0;
  height: 3px;
  background-color: ${Colors.PRIMARY};
`;

function DonationCard(props: IDonationCardProps) {
  const { className, donation } = props;

  // TODO: Add locale to the configuration file.
  const displayDate = DateTime.fromISO(donation.createdDateUTC).setLocale('en-GB');

  return (
    <div className={className}>
      <HeaderRow>
        <DonorName>{donation.displayName}</DonorName>
        {donation.amount && (
          <DonationAmount>
            ${donation.amount}
            .00
          </DonationAmount>
        )}
      </HeaderRow>
      <DonationTime>{displayDate.toLocaleString(DateTime.DATETIME_FULL)}</DonationTime>
      {donation.message && (
        <DonationMessageBlock>
          <StyledHorizontalRule />
          <p>{donation.message}</p>
        </DonationMessageBlock>
      )}
    </div>
  );
}

export default styled(DonationCard)`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  margin: 0.5rem;
  padding: 0 0.5rem 0.25rem 0.5rem;
`;
