import { useState } from 'react'
import { useMutation } from '@redwoodjs/web'

export const QUERY = gql`
  query FrameworksQuery {
    frameworks {
      id
      name
      claps
    }
  }
`

const CLAP_MUTATION = gql`
  mutation ClapFramework($id: Int!) {
    clapFramework(id: $id) {
      id
      claps
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ frameworks }) => {
  const [clapFramework] = useMutation(CLAP_MUTATION)
  const [animate, setAnimate] = useState(null)

  return (
    <table>
      <tbody>
        {frameworks.map((framework) => (
          <tr key={framework.id}>
            <td className="td-name">{framework.name}</td>
            <td className="td-button">
              <button
                className={`button ${
                  animate === framework.id ? 'animate' : ''
                }`}
                onClick={() => {
                  clapFramework({ variables: { id: framework.id } })
                  setAnimate(framework.id)
                }}
                key={framework.claps}
              >
                👏
              </button>
            </td>
            <td>{framework.claps} claps</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
