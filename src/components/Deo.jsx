import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchData = async () => {
  const response = await axios.get("http://192.168.3.121:7008/sanrakhshana/api/data");
  return console.log(response.data);
};

const DataDisplay = () => {
  const { data, error, isLoading } = useQuery(['apiData'], fetchData);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default DataDisplay;
