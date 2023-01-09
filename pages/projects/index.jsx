import { Box, Grid, Heading } from '@chakra-ui/react'
import Link from "next/link"
import axios from 'axios'
import React from 'react'
import ProjectCard from '../../components/ProjectCard'

const Projects = ({ projects }) => {
    return (
        <Box>
            <Heading textAlign='center'>Projects</Heading>
            <Grid gridTemplateColumns='repeat(2,1fr)' gap={2} margin={4}>
                {
                    projects.items.map((item) => {
                        return <Link target="_blank" href={item.html_url} key={item.id}><ProjectCard {...item} /></Link>
                    })
                }
            </Grid>
        </Box>
    )
}

export async function getStaticProps() {
    const uName = 'atuls2060'
    const url = `https://api.github.com/search/repositories?q=user:${uName}+fork:true&sort=updated&per_page=10&type=Repositories`
    const res = await axios.get(url)
    const data = await res.data

    return {
        props: {
            projects: data
        }
    }
}

export default Projects