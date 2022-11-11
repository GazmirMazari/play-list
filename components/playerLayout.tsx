import { Box } from '@chakra-ui/layout'
import React, { ReactNode, FC } from "react";


interface Props {
    children?: ReactNode
    // any props that come into the component
}

const PlayerLayout: FC<Props> =  ({ children }) => {
  return (
    <Box width="100vw" height="800vh">
        Last
      <Box position="absolute" top="0" width="350px" left="0">
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        Test
        <Box height="calc(100vh - 100px)">{children}</Box>
      </Box>
      <Box position="absolute" left="0" bottom="0">
      </Box>
    </Box>
  )
}

export default PlayerLayout