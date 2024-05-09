import Profile from '@/pages/Profile';

export default function Page({ params }: { params: { id: string } }) {
  return <Profile params={params.id} />;
}
