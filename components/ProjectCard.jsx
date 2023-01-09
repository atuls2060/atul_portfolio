import { Card, CardBody, Heading, HStack, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { BiFolder,BiStar ,BiGitRepoForked} from "react-icons/bi"
import {BsCircleFill} from "react-icons/bs"

const ProjectCard = ({name,full_name,language,stargazers_count,forks_count}) => {
    return (
        <Card>
          <CardBody>
          <HStack>
                <BiFolder />
                <Heading size={'md'}>{name}</Heading>
            </HStack>
            <Text>{full_name}</Text>
            <HStack>
                <HStack>
                    <BiStar />
                    <Text>{stargazers_count}</Text>
                </HStack>
                <HStack>
                    <BiGitRepoForked />
                    <Text>{forks_count}</Text>
                </HStack>
                <Spacer />
                <HStack>
                    <BsCircleFill/>
                    <Text>{language}</Text>
                </HStack>
            </HStack>
          </CardBody>
        </Card>
    )
}

export default ProjectCard