import React from 'react'
import * as rtl from '@testing-library/react'
import ContractForm from './ContactForm'
import { act } from 'react-dom/test-utils'

test("renders ComponentForm without crashing", () => {
  rtl.render(<ContractForm />)
})

test("fills out form, submits, checks for return (expected behavior)", () => {
    const { getByTestId, findByTestId } = rtl.render(<ContractForm/>)

    const firstName = getByTestId('firstName input');
    const lastName = getByTestId('lastName input');
    const email = getByTestId('email input');
    const message = getByTestId('message input');

    // Fill out form inputs
        rtl.fireEvent.change(firstName, {
            target: {name: 'firstName', value: 'Ron'}
        });
    
        rtl.fireEvent.change(lastName, {
            target: {name: 'lastName', value: 'Weasley'}
        });
    
        rtl.fireEvent.change(email, {
            target: {name: 'email', value: 'ronaldweasley@hogwarts.com'}
        });
    
        rtl.fireEvent.change(message, {
            target: {name: 'message', value: 'I solemly swear that I am up to no good.'}
        });
    
        // Press submit input
        rtl.fireEvent.click(getByTestId('submit input'))

        // Got the return
        findByTestId('return')
})