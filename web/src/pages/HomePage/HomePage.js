import { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import { useQuery, useMutation } from '@redwoodjs/web'
import ApplicationLayout from 'src/layouts/ApplicationLayout'

export const FRAMEWORKS_QUERY = gql`
  query FrameworksQuery {
    frameworks {
      id
      name
      claps
    }
  }
`

const CLAP_FRAMEWORK_MUTATION = gql`
  mutation ClapFramework($id: Int!) {
    clapFramework(id: $id) {
      id
      claps
    }
  }
`

const HomePage = () => {
  const { loading, data } = useQuery(FRAMEWORKS_QUERY)
  const [clapFramework] = useMutation(CLAP_FRAMEWORK_MUTATION)
  const [animate, setAnimate] = useState(null)

  if (loading) return <ApplicationLayout>Loading...</ApplicationLayout>

  return (
    <ApplicationLayout>
      <h1>Web Frameworks</h1>

      <table>
        <tbody>
          {data.frameworks.map((framework) => (
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
    </ApplicationLayout>
  )
}

export default HomePage
