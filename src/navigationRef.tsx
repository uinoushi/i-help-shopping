import * as React from 'react';

interface Navigate {
    navigate: any
}

export const navigationRef = React.createRef<Navigate | null>();

export function navigate(name, params) {
  navigationRef.current && navigationRef.current?.navigate(name, params);
}