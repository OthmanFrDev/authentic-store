import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name: "order",
    initialState: {
        value: {
            orders: [{
                service: null,
                serviceType: null,
                username: null,
                quantity: 0
            }],
            customer: {
                email: null,
                cardNumber: null,
                securityNumber: 123,
                expireDate: null,
            },
            total: 0
        }

    },
    reducers: {
        fillService: (state, action) => {
            state.value.orders[0] = {
                ...state.value.orders[0],
                service: action.payload.service
            }
        },
        fillServiceType: (state, action) => {
            state.value.orders[0] = {
                ...state.value.orders[0],
                serviceType: action.payload.serviceType
            }
        },
        fillUsername: (state, action) => {
            state.value.orders[0] = {
                ...state.value.orders[0],
                username: action.payload.username
            }
        },
        fillSecondStep: (state, action) => {
            state.value.orders[0] = {
                ...state.value.orders[0],
                quantity: action.payload.quantity
            }
        },
        fillThirdStep: (state, action) => {
            state.customer = {
                email: action.payload.email,
                cardNumber: action.payload.cardNumber,
                securityNumber: action.payload.securityNumber,
                expireDate: action.payload.expireDate,
            }
        }
    }
})
export const { fillService, fillServiceType, fillUsername, fillSecondStep, fillThirdStep } = orderSlice.actions
export default orderSlice.reducer;