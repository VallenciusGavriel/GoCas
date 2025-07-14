import React from 'react'
import { Box, Heading } from "@chakra-ui/react";

function SyaratKetentuan({ content }) {
  return (
    <>
        <Box
            bgImage={`url('/images/PusatBantuan/Body Background.png')`}
            bgSize="cover"
        >
            <Heading as="h2" fontSize="6xl" fontWeight="bold" mb={6} mt={6} textAlign="center">
                Syarat & Ketentuan
            </Heading>

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

export default SyaratKetentuan