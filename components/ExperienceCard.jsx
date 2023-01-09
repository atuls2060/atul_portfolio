import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const ExperienceCard = ({ title, duration }) => {
    return (
        <Box>
            <Heading size={'md'}>
                {title}
            </Heading>
            <Text>
                {
                    duration
                }
            </Text>
        </Box>
    )
}

export default ExperienceCard