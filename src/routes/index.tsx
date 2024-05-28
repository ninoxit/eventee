import { createFileRoute } from '@tanstack/react-router'
import HomeLayout from '../components/home/HomeLayout'

var auth: any;
export const Route = createFileRoute('/')({
  beforeLoad: ({context}) => {
    auth = context.auth;
  },
  component: (props) => <HomeLayout {...props} props={auth} />
})