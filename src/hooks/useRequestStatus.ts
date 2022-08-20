import React from 'react';

type RequestStatus = {
  error?: string;
  status: 'initial' | 'loading' | 'error' | 'success';
};

export const useRequestStatus = () => {
  const [requestStatus, setRequestStatus] = React.useState<RequestStatus>({
    status: 'initial',
    error: '',
  });

  return {
    isLoading: requestStatus.status === 'loading',
    setRequestStatus,
    ...requestStatus,
  };
};
