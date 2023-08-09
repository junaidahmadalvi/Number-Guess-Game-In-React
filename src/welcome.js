import React from "react";
export function Welcome(props) {
  return (
    <>
      <h2>
        Welcome to the {props.firstName} {props.lastName}
      </h2>
    </>
  );
}
