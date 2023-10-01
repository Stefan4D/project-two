import React from 'react';
import Form from '../components/AddExpense/Form';

export default function AddExpense() {
  return (
    <>
      <div className="flex w-full items-center justify-between bg-white p-2">
        <div className="flex items-center">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">Add Expenses</h2>
          </div>
        </div>
      </div>
      <Form />
    </>
  );
}
