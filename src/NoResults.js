import * as React from "react";
import Illustration from "@kiwicom/orbit-components/lib/Illustration";
import Heading from "@kiwicom/orbit-components/lib/Heading";

const NoResults = () => (
  <div>
    <Illustration size="medium" name="Offline" spaceAfter="large" />
    <Heading>Unfortunatelly no flights have been found</Heading>
  </div>
);

export default NoResults;
