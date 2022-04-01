import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';

import { styled } from 'theme';
import { Badge, Box, Card, Separator, Text, Input } from 'components';
import data from 'data/data.json';

const Main = styled(Box, {
  mb: '$2'
});

const FilterContainer = styled(Box, {
  marginTop: '-28px',
  '@small': {
    left: '20px'
  }
});

const Index: NextPage = () => {
  const [value, setValue] = useState<string>('');
  const [jobs, setJobs] = useState(data);
  const [initialJobs, setInitialJobs] = useState(data);

  const handleChange = (e: any) => setValue(e.target.value);

  const handleEnter = (e: any) => {
    if (e.key === 'Enter' && value) {
      setJobs(
        jobs.filter(job =>
          job.company.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
    if (!value) setJobs([...initialJobs]);
  };

  return (
    <>
      <FilterContainer
        appearance='inline'
        direction='column'
        justify='center'
        align='center'
      >
        <Input
          css={{
            width: '80vw',
            '@small': {
              width: '90vw'
            }
          }}
          placeHolder='Search'
          onChange={handleChange}
          onKeyPress={handleEnter}
          value={value}
        />
      </FilterContainer>
      <Main
        appearance='inline'
        direction='column'
        justify='center'
        align='center'
        as='main'
      >
        {jobs.map((job, index) => (
          <Card
            appearance={job.featured ? 'featured' : 'shadow'}
            key={job.company + job.id}
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: index === 0 ? '$6' : undefined,
              '@small': {
                flexDirection: 'column',
                alignItems: 'start',
                mt: index === 0 ? '$10' : undefined
              }
            }}
          >
            <Box
              appearance='inline'
              justify='center'
              align='center'
              css={{
                '@small': {
                  flexDirection: 'column',
                  alignItems: 'start'
                }
              }}
            >
              <Box
                css={{
                  '@small': {
                    position: 'relative',
                    top: '-45px'
                  }
                }}
              >
                <Image
                  width={60}
                  height={60}
                  src={job.logo}
                  alt={`${job.position} at ${job.company}`}
                />
              </Box>
              <Box
                css={{
                  ml: '$4',
                  '@small': {
                    marginTop: '-$9',
                    ml: '$2'
                  }
                }}
              >
                <Box appearance='inline' align='center' css={{ mb: '$2' }}>
                  <Text as='span' appearance='primary' weight='bold'>
                    {job.company}
                  </Text>
                  {job.new && (
                    <Badge
                      radius='lg'
                      color='white'
                      bgColor='primary'
                      textTransform='upper'
                    >
                      new!
                    </Badge>
                  )}
                  {job.featured && (
                    <Badge
                      radius='lg'
                      color='white'
                      bgColor='black'
                      textTransform='upper'
                    >
                      featured
                    </Badge>
                  )}
                </Box>
                <Box css={{ mb: '$2' }}>
                  <Text as='span' weight='bold' size='large'>
                    {job.position}
                  </Text>
                </Box>
                <Box>
                  <Text as='span' appearance='darkGrayCyan10'>
                    {job.postedAt}&nbsp;&nbsp;&bull;&nbsp;&nbsp;
                    {job.contract}&nbsp;&nbsp;&bull;&nbsp;&nbsp;
                    {job.location}
                  </Text>
                </Box>
              </Box>
            </Box>

            <Separator
              orientation='horizontal'
              css={{
                '@small': {
                  height: '1px',
                  width: '95%',
                  m: '$2',
                  mt: '$3'
                }
              }}
            />

            <Box
              appearance='inline'
              justify='start'
              align='center'
              css={{ flexWrap: 'wrap' }}
            >
              {job.languages.map(lang => (
                <Badge
                  key={lang}
                  color='primary'
                  bgColor='lightGrayCyan30'
                  css={{
                    '@small': {
                      mt: '$2',
                      mx: '$2'
                    }
                  }}
                >
                  {lang}
                </Badge>
              ))}
            </Box>
          </Card>
        ))}
      </Main>
    </>
  );
};

export default Index;
