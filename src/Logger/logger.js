export const loggerMiddleware = (store) => (next) => (action) => {
    // Логгируем экшен
    console.log(action);

    // Логгируем состояние, которое получим с помощью getState()
    console.log(store.getState())

    // Передадим наш экшен дальше по цепочке
    return next(action)
}