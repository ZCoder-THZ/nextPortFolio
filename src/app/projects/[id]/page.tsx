import React from 'react';
import { useRouter } from 'next/router';
function page({ params }: { params: { id: string } }) {
  return <div>product Detail {params.id}</div>;
}

export default page;
