import React from "react";

export const YearsOld = () => {
  const yearsOld = new Date().getFullYear() - 1997;
  return <>{`${yearsOld}`}</>;
};
