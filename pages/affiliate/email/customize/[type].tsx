import { useSearchParams } from 'next/navigation';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';
import Sixth from './Sixth';

const EmailTemplate = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type'); 

  if (!type) return <div>Loading...</div>;

  return (
    <div>
      {type === 'AFFILIATE_SALES_EMAIL' ? <First /> : <div></div>}
      {type === 'FOR_AFFILIATE_REQUEST' ? <Second /> :<div></div>}
      {type === 'FOR_AFFILIATE_REQUEST_APPROVAL' ? <Third /> :<div></div>}
      {type === 'FOR_AFFILIATE_REWARD' ? <Fourth /> :<div></div>}
      {type === 'FOR_AFFILIATE_PAYMENT' ? <Fifth /> :<div></div>} 
      {type === 'FOR_AFFILIATE_COUPON_COMMISSION' ? <Sixth /> :<div></div>}
    </div>
  );
};

export default EmailTemplate;
