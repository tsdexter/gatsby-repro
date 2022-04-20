import React from "react";

export default function WpPage({ pageContext }) {
  const { data } = pageContext;
  return (
    <>
      <h1>WP Page</h1>
      <h2>JSON</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h3>WP Content</h3>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </>
  );
}
