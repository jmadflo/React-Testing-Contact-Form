import React from 'react';
import * as rtl from '@testing-library/react';
import ContractForm from './ContactForm';

test("renders ComponentForm without crashing", () => {
  rtl.render(<ContractForm />);
});
