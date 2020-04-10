import React from 'react'
import * as rtl from '@testing-library/react'
import ContractForm from './ContactForm'

test("renders ComponentForm without crashing", () => {
  rtl.render(<ContractForm />)
})

test("fills out form, submits, checks for return (expected behavior)", async() => {
    const { getByTestId, findByTestId } = rtl.render(<ContractForm/>)

    const firstName = getByTestId('firstName input')
    const lastName = getByTestId('lastName input')
    const email = getByTestId('email input')
    const message = getByTestId('message input')
    const submitButton = getByTestId('submit input')

    // Fill out form inputs
    rtl.fireEvent.change(firstName, {
        target: {name: 'firstName', value: 'Ron'}
    })

    rtl.fireEvent.change(lastName, {
        target: {name: 'lastName', value: 'Weasley'}
    })

    rtl.fireEvent.change(email, {
        target: {name: 'email', value: 'ronaldweasley@hogwarts.com'}
    })

    rtl.fireEvent.change(message, {
        target: {name: 'message', value: 'I solemnly swear that I am up to no good'}
    })

    // Press submit input
    rtl.fireEvent.click(submitButton)

    // Data was returned
    await findByTestId('return')

    // Values were input correctly
    expect(firstName).toHaveValue('Ron')
    expect(lastName).toHaveValue('Weasley')
    expect(email).toHaveValue('ronaldweasley@hogwarts.com')
    expect(message).toHaveValue('I solemnly swear that I am up to no good')
})

test("checks for required related errors", async() => {
    const { findByTestId, getByTestId } = rtl.render(<ContractForm/>)

    // click submit with empty form to yield errors
    rtl.fireEvent.click(getByTestId('submit input'))

    // assert that errors are rendered
    await findByTestId('firstName error')
    await findByTestId('lastName error')
    await findByTestId('email error')

    // This throws an error, so we know we aren't getting data back
    // await findByTestId('return')
   

})

test("checks for error of firstname being more than three chars long", async() => {
    const { findByTestId, getByTestId } = rtl.render(<ContractForm/>)

    const firstName = getByTestId('firstName input')
    const lastName = getByTestId('lastName input')
    const email = getByTestId('email input')
    const message = getByTestId('message input')
    const submitButton = getByTestId('submit input')

    // Fill out form inputs
    rtl.fireEvent.change(firstName, {
        target: {name: 'firstName', value: 'Rond'}
    })

    rtl.fireEvent.change(lastName, {
        target: {name: 'lastName', value: 'Weasley'}
    })

    rtl.fireEvent.change(email, {
        target: {name: 'email', value: 'ronaldweasley@hogwarts.com'}
    })

    rtl.fireEvent.change(message, {
        target: {name: 'message', value: 'I solemnly swear that I am up to no good'}
    })

    // Press submit input
    rtl.fireEvent.click(submitButton)

    // Checks for error
    const firstNameError = await findByTestId('firstName error')

    // This throws breaks the test, so we know we aren't getting data back
    // await findByTestId('return')

    // Change name to abide by 3 chars limit
    rtl.fireEvent.change(firstName, {
        target: {name: 'firstName', value: 'Ron'}
    })

    // Press submit input
    rtl.fireEvent.click(submitButton)

    // asserted that now data is returned
    await findByTestId('return')
})

