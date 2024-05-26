import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/$id')({
  component: blogHelper
})

function blogHelper(){
    const { id } = Route.useParams();
    return(
        <>
            reading blog with {id}
        </>
    );
}