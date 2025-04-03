"use client"; 

import { useSearchParams } from 'next/navigation';
import First from './First';
import Second from './Second';

const EmailTemplate = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type'); 

  if (!type) return <div>Invalid Type</div>;

  return (
    <div>
      {type === 'AFFILIATE_SALES_EMAIL' ? <First /> : <div></div>}
      {type === 'FOR_AFFILIATE_REQUEST' ? <Second /> :<div></div>}
    </div>
  );
};

export default EmailTemplate;
