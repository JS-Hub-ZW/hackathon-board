

import React from 'react'

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Text,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

import { Badge, Flex, Box, Avatar, Heading } from '@chakra-ui/react'


function UserAvatar() {
    return (<Flex>
        <Avatar src='https://i.pravatar.cc/300' />
        <Box ml='3'>
            <Text fontWeight='bold'>
                Segun Adebayo
                <Badge ml='1' colorScheme='green'>
                    New
                </Badge>
            </Text>
            <Text fontSize='sm'>UI Engineer</Text>
        </Box>
    </Flex>);
}


export default function LeaderBoard() {
    return (
        <div>
            <Heading
            mt="10"
            mb="10"
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          The best hackers{' '}
        </Heading>
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>The best hackers</TableCaption>
                <Thead>
                    <Tr>
                        <Th>No.</Th>
                        <Th>Name</Th>
                        <Th isNumeric>Reputation</Th>
                        <Th isNumeric>Hackathons</Th>
                        <Th isNumeric>Signal</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td className='bold'><Text fontWeight="bold">1.</Text></Td>
                        <Td><UserAvatar></UserAvatar></Td>
                        <Td isNumeric>20</Td>
                        <Td isNumeric>3</Td>
                        <Td isNumeric>5.0</Td>
                    </Tr>
                    <Tr>
                        <Td className='bold'><Text fontWeight="bold">2.</Text></Td>
                        <Td><UserAvatar></UserAvatar></Td>
                        <Td isNumeric>20</Td>
                        <Td isNumeric>3</Td>
                        <Td isNumeric>5.0</Td>
                    </Tr>
                    <Tr>
                        <Td className='bold'><Text fontWeight="bold">3.</Text></Td>
                        <Td><UserAvatar></UserAvatar></Td>
                        <Td isNumeric>20</Td>
                        <Td isNumeric>3</Td>
                        <Td isNumeric>5.0</Td>
                    </Tr>
                    <Tr>
                        <Td className='bold'><Text fontWeight="bold">4.</Text></Td>
                        <Td><UserAvatar></UserAvatar></Td>
                        <Td isNumeric>20</Td>
                        <Td isNumeric>3</Td>
                        <Td isNumeric>5.0</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
        </div>
    )
}
