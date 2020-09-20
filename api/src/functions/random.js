export const handler = async (_event, _context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      value: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    }),
  }
}
