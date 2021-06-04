/**
 * Dev version true/false
 * */
export const DEV_VERSION = false

export const emailMessage: string = `<div style="background-color: lime; padding: 15px">
                                        <p>Восстановления пароля.Нажмите на ссылку:</p>
                                        <a href='https://marmon179.github.io/project/#/set-new-password/$token$'>link</a>
                                    </div>`

export const sendMessageMethod =  DEV_VERSION ? '' : emailMessage