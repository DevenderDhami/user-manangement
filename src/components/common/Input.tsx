import React from 'react';

const Input: React.FC<{ label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({
  label, value, onChange
}) => (
  <div>
    <label>{label}</label>
    <input value={value} onChange={onChange} />
  </div>
);

export default Input;
