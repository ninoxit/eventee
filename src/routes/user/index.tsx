import { redirect } from '@tanstack/react-router'
import { createFileRoute } from '@tanstack/react-router'
import UserLayout from '../../components/user/UserLayout'
import context from 'react-bootstrap/esm/AccordionContext'

let _auth: any;
export const Route = createFileRoute('/user/')({
    beforeLoad: ({ context }) => {
        _auth = context.auth;
        if(!_auth.auth){
            throw redirect({
                to: '/login'
            })
        }
    },
    component: (props) => <UserLayout {...props} auth={_auth} />
})