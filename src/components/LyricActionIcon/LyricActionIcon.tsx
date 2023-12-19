import React from "react"
import { ActionIcon } from '@mantine/core';
import { LyricActionIconProps } from "./types";

function LyricActionIcon(props: LyricActionIconProps) {
  return (
    <ActionIcon
      {...props}
    >
      {props.children}
    </ActionIcon>

  );
}

export default LyricActionIcon

