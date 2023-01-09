import { Image, Card, HStack, IconButton, Spacer, useColorMode } from '@chakra-ui/react'
import Link from "next/link"
import React from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Card p={3} borderRadius="0">
      <HStack>
        <HStack gap="20px">
          <Link href="/">Atul singh</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/experience">Experience</Link>
        </HStack>
        <Spacer />
        <HStack gap={2}>
          <IconButton onClick={toggleColorMode} as={colorMode === "dark" ? BiMoon : BiSun} size={'sm'} />
          <Link href="/"> <Image borderRadius="50%" width={50} src='https://avatars.githubusercontent.com/u/34827845?v=4' /></Link>
        </HStack>
      </HStack>
    </Card>
  )
}

export default Navbar