export const handler = async (_event, _context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ping: 'pong',
    }),
  }
}
