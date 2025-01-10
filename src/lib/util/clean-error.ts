class CleanError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "" // Custom name or leave it empty
  }
}

export default CleanError
