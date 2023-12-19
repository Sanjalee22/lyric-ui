import React, { ReactNode } from "react"
import { ActionIcon, Button, ButtonProps, Flex, Group, Text } from '@mantine/core';
import { LyricTextButtonProps } from "./types";



function LyricButton(props: LyricTextButtonProps) {
  return (
    <Button
      {...props}
    >
      <Text size={props.size}> 
        {props.label}
      </Text>
     
    </Button>

  );
}

export default LyricButton

