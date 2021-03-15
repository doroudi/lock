// This file was automatically translated.
// Feel free to submit a PR if you find a more accurate translation.

export default {
  error: {
    forgotPassword: {
      too_many_requests:
        'بیش از دفعات مجاز تغییر رمز عبور تلاش نموده اید ، لطفا کمی صبر کنید و دوباره تلاش کنید',
      'lock.fallback': 'متاسفیم ، مشکلی در تغییر رمز عبور رخ داده است.',
      enterprise_email:
        'دامنه ایمیل شما بخشی از ارائهدهنده هویت سازمانی است. برای بازنشانی گذرواژه خود، لطفا به مدیر امنیتی خود مراجعه کنید.'
    },
    login: {
      blocked_user: 'کاربر مسدود شده است.',
      invalid_user_password: 'اطلاعات وارد شده صحیح نیست.',
      'lock.fallback': 'متاسفیم ، خطایی در ورود به سیستم رخ داده است.',
      'lock.invalid_code': 'کد اشتباه است.',
      'lock.invalid_email_password': 'ایمیل یا رمز عبور اشتباه است.',
      'lock.invalid_username_password': 'نام کاربری یا رمز عبور اشتباه است.',
      'lock.network': 'خطا در اتصال به سرور ، لطفا اتصال اینترنت تان را بررسی کنید.',
      'lock.popup_closed': 'پنجره بسته شده است ، لطفا دوباره تلاش کنید.',
      'lock.unauthorized': 'مجوزی اعطا نشده است ، دوباره تلاش کنید.',
      'lock.mfa_registration_required':
        'احراز هویت چند فاکتوری لازم است ، اما دستگاه شما ثبت نشده است، لطفا دستگاه خود را ثبت کنید.',
      'lock.mfa_invalid_code': 'کد اشتباه است ، دوباره تلاش کنید',
      password_change_required:
        'لازم است تا رمزعبور خود را تغییر دهید ، احتملا برای اولین بار است که وارد سیستم میشوید یا رمز عبور شما منقضی شده است',
      password_leaked:
        'اکانت شما به دلیل لو رفتن در وبسایت دیگری مسدود شده است ، ما مراحل رفع بلاک را برایتان ایمیل خواهیم کرد.',
      too_many_attempts: 'اکانت شما به دلیل تلاش های نا موفق متعدد متوالی مسدود شده است',
      session_missing:
        'می تواند درخواست احراز هویت خود را کامل کند. لطفا پس از بستن همه پنجره باز دوباره امتحان کنید',
      'hrd.not_matching_email': 'لطفا، استفاده از ایمیل شرکت خود را برای ورود.',
      too_many_requests:
        'ما متاسفیم. در حال حاضر درخواست های زیادی وجود دارد لطفا صفحه را مجددا بارگذاری کنید و دوباره تلاش کنید. اگر این کار ادامه دارد، لطفا بعدا دوباره امتحان کنید.',
      invalid_captcha: 'حل مسئله چالش برای تأیید اینکه ربات نیستید.',
      invalid_recaptcha: 'کادر تأیید را انتخاب کنید تا تأیید کنید که روبات نیستید.'
    },
    passwordless: {
      'bad.email': 'ایمیل نا معتبر است.',
      'bad.phone_number': 'شماره تلفن نامعتبر است.',
      'lock.fallback': 'متاسفیم ، خطایی رخ داده است.'
    },
    signUp: {
      invalid_password: 'رمز نامعتبر است.',
      'lock.fallback': 'متاسفیم ، خطایی در ثبت نام رخ داده است.',
      password_dictionary_error: 'رمز عبور انتخابی بسیار رایج است',
      password_no_user_info_error: 'رمز عبور با اطلاعات کاربر مشابه است',
      password_strength_error: 'رمز عبور بسیار ضعیف است.',
      user_exists: 'کاربر قبلا ثبت شده است.',
      username_exists: 'نام کاربری قبلا ثبت شده است.',
      social_signup_needs_terms_acception: 'لطفاً برای ادامه با شرایط خدمات زیر موافقت کنید.'
    }
  },
  success: {
    logIn: 'با تشکر از ورود شما.',
    forgotPassword: 'ما ایمیلی برای تغییر رمز عبور برایتان ارسال کردیم.',
    magicLink: 'ما لینک ورود را برایتان ایمیل کردیم<br />به %s.',
    signUp: 'تشکر از ثبت نام شما.'
  },
  blankErrorHint: '',
  blankPasswordErrorHint: 'نباید خالی باشد',
  blankEmailErrorHint: 'نباید خالی باشد',
  blankUsernameErrorHint: 'نباید خالی باشد',
  blankCaptchaErrorHint: 'نباید خالی باشد',
  codeInputPlaceholder: 'کد شما',
  databaseEnterpriseLoginInstructions: '',
  databaseEnterpriseAlternativeLoginInstructions: 'یا',
  databaseSignUpInstructions: '',
  databaseAlternativeSignUpInstructions: 'یا',
  emailInputPlaceholder: 'yours@example.com',
  enterpriseLoginIntructions: 'ورد با استفاده از اطلاعات سازمانی.',
  enterpriseActiveLoginInstructions: 'اطلاعات سازمانی تان را در %s وارد کنید.',
  failedLabel: 'ناموفق!',
  forgotPasswordAction: 'رمز عبورتان را فراموش کردید?',
  forgotPasswordInstructions:
    'ایمیل خود را وارد کنید ، ما ایمیلی برای ریست کردن رمز عبور برایتان ارسال خواهیم کرد.',
  forgotPasswordSubmitLabel: 'ارسال ایمیل',
  invalidErrorHint: '',
  invalidPasswordErrorHint: 'نا معتبر',
  invalidEmailErrorHint: 'نا معتبر',
  invalidUsernameErrorHint: 'نا معتبر',
  lastLoginInstructions: 'آخرین باری که وارد شده اید با',
  loginAtLabel: 'ورود در %s',
  loginLabel: 'ورود',
  loginSubmitLabel: 'ورود',
  loginWithLabel: 'ورود با %s',
  notYourAccountAction: 'حساب شما نیست؟',
  passwordInputPlaceholder: 'رمز عبور',
  passwordStrength: {
    containsAtLeast: 'باید حداقل شامل %d حرف از %d حروف های زیر باشد:',
    identicalChars: 'بیش از  %d حرف یکسان پشت سر هم مجاز نیست (برای مثال, "%s" مجاز نیست)',
    nonEmpty: 'رمز عبور باید خالی نباشد.',
    numbers: 'اعداد (0-9)',
    lengthAtLeast: 'حداقل %d حرف باید باشد',
    lowerCase: 'حروف کوچک (a-z)',
    shouldContain: 'باید شامل :',
    specialCharacters: 'کاراکتر های اختصاصی (مثل !@#$%^&*)',
    upperCase: 'حروف بزرگ (A-Z)'
  },
  passwordlessEmailAlternativeInstructions:
    'در غیر اینصورت ایمیل خود را وارد کنید<br/>یا حسابی ایجاد کنید',
  passwordlessEmailCodeInstructions: 'ایمیلی شامل کد به %s ارسال شد.',
  passwordlessEmailInstructions: 'برای ورود ایمیلتان را وارد کنید<br/>یا حسابی ایجاد کنید',
  passwordlessSMSAlternativeInstructions:
    'در غیر اینصورت شماره موبایل خود را وارد کنید<br/>یا حسابی ایجاد کنید',
  passwordlessSMSCodeInstructions: 'پیامکی شامل کد برایتان به شماره %s ارسال شد.',
  passwordlessSMSInstructions: 'شماره موبایل خود را وارد کنید<br/>یا حسابی ایجاد کنید',
  phoneNumberInputPlaceholder: 'شماره موبایل',
  resendCodeAction: 'آیا کد را دریافت نموده اید?',
  resendLabel: 'ارسال مجدد',
  resendingLabel: 'در حال ارسال مجدد...',
  retryLabel: 'تلاش مجدد',
  sentLabel: 'ارسال شد!',
  signUpLabel: 'ثبت نام',
  signUpSubmitLabel: 'ثبت نام',
  signUpWithLabel: 'ورود با %s',
  socialLoginInstructions: '',
  socialSignUpInstructions: '',
  ssoEnabled: 'ورود منفرد فعال است',
  submitLabel: 'ثبت',
  unrecoverableError: 'خطایی رخ داده است.<br />با پشتیبانی تماس بگیرید.',
  usernameFormatErrorHint: '%d-%d حروف، اعداد و کاراکترهای زیر را استفاده کنید: "_"، "."، "+"، "-"',
  usernameInputPlaceholder: 'نام کاربری شما',
  usernameOrEmailInputPlaceholder: 'نام کاربری/ایمیل',
  title: 'Auth0',
  welcome: '%s خوش آمدید!',
  windowsAuthInstructions: 'شما از شبکه شرکتتان متصل شده اید&hellip;',
  windowsAuthLabel: 'احراز هویت ویندوز',
  mfaInputPlaceholder: 'کد',
  mfaLoginTitle: 'احراز هویت دو مرحله ای',
  mfaLoginInstructions: 'کد تاییدی که توسط اپلیکیشن موبایل تولید شده است را وارد کنید.',
  mfaSubmitLabel: 'ورود',
  mfaCodeErrorHint: 'از %d عدد استفاده کنید',
  forgotPasswordTitle: 'تنظیم مجدد کلمه ورود',
  signUpTitle: 'ثبت نام',
  showPassword: 'نمایش رمز ورود',
  signUpTerms: 'با ثبت نام، با شرایط خدمات و سیاست حفظ حریم خصوصی ما موافقت می کنید.',
  captchaCodeInputPlaceholder: 'کد نشان داده شده در بالا را وارد کنید',
  captchaMathInputPlaceholder: 'فرمول نشان داده شده در بالا را حل کنید'
};
