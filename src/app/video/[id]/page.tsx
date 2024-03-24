import {Video} from "@/features/sedai-services/components/Video";

export default function Page({ params }: { params: {id: number}}) {
    return(
      <>
      <Video params={params.id}/>
      </>
    );
}