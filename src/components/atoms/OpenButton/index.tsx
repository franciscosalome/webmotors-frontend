import { ReactNode } from "react";
import { Button } from "./style";

interface OpenButtonProps {
  color?: string;
  children: ReactNode;
  opened: boolean;
}

export function OpenButton({ color, children, opened }: OpenButtonProps) {

  return (
    <>
      <Button opened={opened} color={color}>
        <span> › </span>

        {children}
      </Button>
    </>
  )
}