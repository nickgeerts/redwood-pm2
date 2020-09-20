export const QUERY = gql`
  query FrameworksQuery {
    frameworks {
      id
      name
      claps
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ frameworks }) => {
  return (
    <ul>
      {frameworks.map((framework) => (
        <li>
          {framework.name}: {framework.claps} 👏
        </li>
      ))}
    </ul>
  )
}
