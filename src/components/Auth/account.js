import service from '@/data/service';
import operators from '@/data/operators';
import { myAccount } from '@/data/pageTitles';

export default function Login({
  msisdn,
  cancelSubscription,
  loading,
  lang
}) {
  return (
    <div class="registration-area my-80">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6">
            <div class="registration-wrap holaa-form-wrapper">
              <h5 class="inner-small-title mb-0">{myAccount.title[lang]}</h5>
              <p class="mb-4 pb-2">
                {myAccount.description[lang]}
              </p>
                <div class="check-btn">
                <h4 style={{color: 'var(--heading-color)'}}>{myAccount.phoneNumber[lang]} : {msisdn.c}</h4>
                  <div class="btn-wrap mt-sm-4 pt-lg-3 mt-4">
                    <button
                      onClick={cancelSubscription}
                      disabled={loading}
                      class="hl-btn medium-btn btn-base text-uppercase lh-1 disabled:bg-gray-400"
                    >
                      <span class="pt-0">{myAccount.cancel[lang]}</span>
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
