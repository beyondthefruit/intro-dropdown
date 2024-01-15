// MySelect.jsx
import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'helene', label: 'Helene' },
  { value: 'berline', label: 'Berline' },
  { value: 'selene', label: 'Selene' },
];

const MySelect = () => {
  return <Select options={options} placeholder='Favourite artists' />;
};

export default MySelect;
