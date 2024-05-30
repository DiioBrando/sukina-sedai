import Video from '@/pages/Video';

export default function Page({ params }: { params: { id: number } }) {
  return <Video id={params.id} />;
}
