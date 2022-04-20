import * as React from "react";
const DSGPage = () => (
  <main>
    <h1>DSG From file ssystem route</h1>
  </main>
);
export default DSGPage;
export async function config() {
  // Optionally use GraphQL here
  return ({ params }) => {
    return {
      defer: true,
    };
  };
}
