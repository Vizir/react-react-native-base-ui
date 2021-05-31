import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Text: React.FC<Props> = ({ children }: Props): React.ReactElement => <span>{children}</span>;
