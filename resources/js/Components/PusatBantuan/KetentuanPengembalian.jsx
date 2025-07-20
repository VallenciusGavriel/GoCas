import React from 'react'
import { Box, Heading } from '@chakra-ui/react';

function KetentuanPengembalian({ content }) {
  return (
    <>
    <Box
                bgImage={`url('/images/PusatBantuan/Body Background.png')`}
                bgSize="cover"
            >
            <div className='flex justify-center'>
                <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb={6} pt={10} maxW="75%" fontFamily="Dela Gothic One" textAlign="center">
                    KETENTUAN PENGEMBALIAN POWER BANK & PENGEMBALIAN DANA (REFUND)
                </Heading>
            </div>

                <Box
                    className="syarat-ketentuan"
                    maxW="4xl"
                    mx="auto"
                    px={4}
                    py={6}
                    textAlign="left"
                    color="gray.700"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </Box>
    </>
  )
}

export default KetentuanPengembalian
