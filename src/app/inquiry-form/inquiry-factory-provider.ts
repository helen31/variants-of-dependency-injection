import { InquiryBusinessService } from './services/inquiry-business.service';
import { InquiryGeneralService } from './services/inquiry-general.service';
import { InquiryFormType } from './services/abstract-inquiry.service';

export function inquiryServiceProviderFactory(type: InquiryFormType): () => InquiryBusinessService  {
  return () => {
    if (type === InquiryFormType.business) {
      return new InquiryBusinessService(type);
    }

    if (type === InquiryFormType.general) {
      return  new InquiryGeneralService(type);
    }

    return new InquiryBusinessService(InquiryFormType.general);
  }
}
