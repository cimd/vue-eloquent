const sortingQs = (params: { field: string, order: string } []): string[] => {
  const qsArray = []
  params.forEach((param) => {
    if (param.order === 'asc') {
      qsArray.push(`${param.field}`)
    }
    else {
      qsArray.push(`-${param.field}`)
    }
  })
  return qsArray
}

export default sortingQs
