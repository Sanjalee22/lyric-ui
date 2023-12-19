import { ButtonProps } from "@mantine/core";
import { CommonButtonProps } from "../../Types";

export type LyricTextButtonProps = {
  label: string,
} & CommonButtonProps & ButtonProps & React.ComponentPropsWithoutRef<'button'>