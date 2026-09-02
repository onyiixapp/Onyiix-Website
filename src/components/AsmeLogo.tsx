import React from 'react';
import { OnyiixLogo, type OnyiixLogoProps } from './OnyiixLogo';

export type AsmeLogoProps = OnyiixLogoProps;

/**
 * Brand Logo component (ONYIIX: DESIGN • BUILD • DELIVER)
 */
export const AsmeLogo: React.FC<AsmeLogoProps> = (props) => {
  return <OnyiixLogo {...props} />;
};

export default AsmeLogo;
