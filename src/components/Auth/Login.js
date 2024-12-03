import service from '@/data/service';
import operators from '@/data/operators';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/semantic-ui.css'
import { loginPageData } from '@/data/pageTitles';

export default function Login({
  msisdn,
  setMsisdn,
  login,
  loading,
  lang
}) {
  return (
    <div class="registration-area my-80">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6">
            <div class="registration-wrap holaa-form-wrapper">
              <h5 class="inner-small-title mb-0">{loginPageData.title[lang]}</h5>
              <p class="mb-4 pb-2">
                {loginPageData.description[lang]}
              </p>
                <label class="single-input-field style-border">
                  <span>{loginPageData.phoneNumber[lang]}</span>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {/* <select
                      style={{
                        width: '45%',
                        background: 'var(--body-bg-dark)',
                        color: 'var(--paragraph-color)',
                        borderImage: 'var(--gradient-color)',
                        borderImageSlice: 1,
                        borderRadius: 5,
                      }}
                      disabled={loading}
                      value={operator}
                      onChange={(e) => setOperator(e.target.value)}
                    >
                      {operators.map((operator, index) => (
                        <option key={index} value={operator.prefix} style={{color: 'var(--paragraph-color-dark)'}}>
                          {operator.display}
                        </option>
                      ))}
                    </select>
                    <input type="text" placeholder="your phone number" value={msisdn} onChange={(e) => setMsisdn(e.target.value)} disabled={loading} /> */}
                    <PhoneInput
                      country={operators[0].countryCode}
                      onlyCountries={Object.values(operators).map(operator => operator.countryCode)}
                      value={msisdn}
                      onChange={phone => setMsisdn(phone)}
                      countryCodeEditable={false}
                      containerStyle={{
                        background: 'var(--body-bg-dark)',
                        width: '100%',
                        height: '50px'
                      }}
                      inputStyle={{
                        color: 'var(--paragraph-color)',
                        borderImage: 'var(--gradient-color)',
                        borderImageSlice: 1,
                        borderRadius: 5,
                        height: '50px'
                      }}
                      buttonStyle={{
                        background: 'var(--body-bg-dark)',
                      }}
                      dropdownStyle={{
                        color: 'var(--body-bg-dark)',
                      }}
                    />
                  </div>
                </label>
                <div class="check-btn">
                  <div class="btn-wrap mt-sm-4 pt-lg-3 mt-4">
                    <button
                      disabled={loading}
                      onClick={login}
                      class="hl-btn medium-btn btn-base text-uppercase lh-1 disabled:bg-gray-400"
                    >
                      <span class="pt-0">{loginPageData.btnText[lang]}</span>
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
