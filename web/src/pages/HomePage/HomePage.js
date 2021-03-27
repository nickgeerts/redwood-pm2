import ApplicationLayout from 'src/layouts/ApplicationLayout/ApplicationLayout'
import FrameworksCell from 'src/components/FrameworksCell/FrameworksCell'

const HomePage = () => {
  return (
    <ApplicationLayout>
      <h1>Web Frameworks</h1>
      <FrameworksCell />
    </ApplicationLayout>
  )
}

export default HomePage
