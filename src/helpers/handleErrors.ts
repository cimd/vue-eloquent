function handleErrors(event: string, err: any): void
{
  console.error(event, err)
  // throw { event: event, error: err }
}

export default handleErrors
