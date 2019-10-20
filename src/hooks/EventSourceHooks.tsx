import { useState, useEffect } from 'react';

/* Custom hook listens to Sever-Side Event (SSE) and fetches metadata */

function useDataListener({ eventName = 'message', srcURL = 'http://localhost:5001/status_stream' }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const eventSource = new EventSource(srcURL);
    const eventHandler = (e: any) => setData(JSON.parse(e.data));
    eventSource.addEventListener(eventName, eventHandler);
    return () => {
      eventSource.removeEventListener(eventName, eventHandler);
    };
  }, []);
  return data;
}

export { useDataListener };
