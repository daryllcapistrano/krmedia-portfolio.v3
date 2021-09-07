import * as React from "react"
import { Link } from 'gatsby'
import { Box, Flex, Spacer } from "@chakra-ui/react"

//todo: style

const Header = () => {
  return (
      <Flex p="4">
        <Box>insert logo here</Box>
        <Spacer/>
        <Box>
          <ul>
            <li>
              <Link to="/videography">videography</Link>
            </li>
            
            <li>
              <Link to="/photography">photography</Link>
            </li>
            
            <li>
              <Link to="/clients">clients</Link>
            </li>

            <li>
              <Link to="/contact">contact</Link>
            </li>
            
          </ul>
        </Box>
      </Flex>
  )
}

export default Header