import React, { Suspense } from "react";
import { ping } from "ldrs";

ping.register();

const Loading = () => (
  <div className="fixed top-0 left-0 width-full h-full flex justify-center items-center">
    <l-miyagi size="35" stroke="3.5" speed="0.9" color="black"></l-miyagi>
  </div>
);

export const SuspenseComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => <Suspense fallback={<Loading />}>{children}</Suspense>;
