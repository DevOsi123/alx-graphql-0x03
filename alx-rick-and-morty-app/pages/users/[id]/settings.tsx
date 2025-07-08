import { useRouter } from 'next/router';

const UserSettings = () => {
  const router = useRouter();
  const { id } = router.query;

  return <h1>User {id} Settings</h1>;
};

export default UserSettings;