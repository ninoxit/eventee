import { createFileRoute, redirect } from '@tanstack/react-router';
import AdminLayout from '../../components/admin/AdminLayout';
let _auth: any;
export const Route = createFileRoute('/admin/')({
  beforeLoad:({context}) => {
    _auth = context.auth;
    if(!_auth.auth){
      throw redirect({
        to: '/user',
      })
    }
  },
  component: (props) => <AdminLayout {...props} auth={_auth} />
});

