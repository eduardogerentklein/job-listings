import type { NextPage } from 'next';
import Image from 'next/image';

import { styled } from 'theme';
import { Box, Card, Text } from 'components';
import data from '../data/data.json';

const Main = styled(Box, {
  mb: '$2'
});

const Index: NextPage = () => {
  return (
    <Main
      appearance='inline'
      direction='column'
      justify='center'
      align='center'
      as='main'
    >
      {data.map(job => (
        <Card
          appearance={job.featured ? 'featured' : 'shadow'}
          key={job.company + job.id}
          css={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Image
            width={60}
            height={60}
            src={job.logo}
            alt={`${job.position} at ${job.company}`}
          />
          <Box css={{ ml: '$4' }}>
            <Box css={{ mb: '$2' }}>
              <Text as='span' appearance='primary' weight='bold'>
                {job.company}
              </Text>
            </Box>
            <Box css={{ mb: '$2' }}>
              <Text as='span' weight='bold' size='large'>
                {job.position}
              </Text>
            </Box>
            <Box>
              <Text as='span' appearance='black'>
                {job.postedAt}
              </Text>
            </Box>
          </Box>
        </Card>
      ))}
    </Main>
  );
};

export default Index;
