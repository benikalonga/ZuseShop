import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
export function addListener(e) {
  navigationRef.current?.addListener(e);
}

export const user = {};
export const product = {};
