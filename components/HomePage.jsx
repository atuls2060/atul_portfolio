import { Button, Heading, HStack, Text, VStack, Tag, Flex, Card, CardBody, Container, Grid, Image } from '@chakra-ui/react'
import React from 'react'
import Experience from './Experience'
import Link from "next/link"

const HomePage = ({ avatar_url, followers_url ,name,bio,login,html_url}) => {
  const resume_url = "https://drive.google.com/file/d/10FdVUHI3nLJzKavREff1dayztKlLoWWK/view"
  return (
    <Container mt="20px" maxW="90%">
      <Grid gap="20px">
        <Card textAlign="center">
          <CardBody>
            <VStack gap={3}>
              <Image borderRadius="50%" width={100} src={avatar_url} />
              <Heading>{name}</Heading>
              <Link target="_blank" href={html_url}><Text>@{login}</Text></Link>
              <Text>{bio}</Text>
              <HStack justifyContent={"center"}>
                <Link target="_blank" href={resume_url}> <Button>Resume</Button></Link>
                <Link target="_blank" href={followers_url}> <Button>Follow</Button></Link>
              </HStack>
            </VStack>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <Flex gap={2}>
              <Tag>HTML</Tag>
              <Tag>CSS</Tag>
              <Tag>JavaScript</Tag>
              <Tag>TypeScript</Tag>
              <Tag>Node js</Tag>
            </Flex>
          </CardBody>
        </Card>
        <Experience />
      </Grid>
    </Container>
  )
}

export default HomePage