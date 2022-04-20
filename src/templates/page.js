import React from "react";

export default function Page({ pageContext }) {
  const { title } = pageContext;
  return <div>{title}</div>;
}
