export class ResponseError {

    public error: Error
    public message: string
    public violations: []
    public status: number

    constructor(message: string, violations: [], status: number) {
        this.error = new Error(message)
        this.message = message
        this.violations = violations;
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