import React, { createContext, useReducer } from 'react'

const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 500 },
        { id: 3, text: 'Rent', amount: -200 }
    ]
}