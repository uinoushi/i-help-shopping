import createDataContext from './createDataContext'

const userReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const getUser = dispatch => () => {}

export const { Provider, Context } = createDataContext(
    userReducer,
    { getUser },
    {}
)