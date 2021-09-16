export class ResponseError {

    public error: Error
    public message: string
    public status: number

    constructor(message: string, status: number) {
        this.error = new Error(message)
        this.message = message
        this.status = status
    }

    isBancoInterOfflineError() {
        if (this.status === 401 && !this.message) {
            return true
        }
        if (this.status === 403 && this.message === 'request denied') {
            return true
        }
        return false
    }

}