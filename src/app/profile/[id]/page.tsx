import { Profile } from '@/pages/Profile';

export default function Page({ params }: { params: { id: number } }) {
    return(
        <Profile params={params.id}/>
    );
}