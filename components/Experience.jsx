import React from 'react'
import { Card, CardBody, VStack } from '@chakra-ui/react'
import ExperienceCard from './ExperienceCard'
const Experience = () => {
    return (
        <Card>
            <CardBody>
                <VStack gap={2}>
                    <ExperienceCard title="Full Stack Developer" duration="july 2022 - present" />
                    <ExperienceCard title="BTech Mech" duration="july 2020" />
                </VStack>
            </CardBody>
        </Card>
    )
}

export default Experience