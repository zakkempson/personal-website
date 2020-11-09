import React from 'react';

interface IconInstanceI {
  size?: 'small' | 'medium';
}

interface IconI {
  name: 'research' | 'business' | 'design' | 'build' | 'play';
  size?: 'small' | 'medium';
}

export const Icon = (props: IconI) => {
  switch (props.name) {
    case 'research':
      return <Research />;
    case 'business':
      return <Business />;
    case 'design':
      return <Design />;
    case 'build':
      return <Build />;
    case 'play':
      return <Play />;
    default:
      return null;
  }
};

export const Exit = (props: IconInstanceI) => {
  const { size = 'small' } = props;

  return (
    <svg
      width='100%'
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{
        width: size === 'small' ? '34px' : '42px',
        transition: 'width 0.2s ease-out',
      }}
    >
      <rect
        x='9.24707'
        y='11.1387'
        width='2.60613'
        height='28.011'
        transform='rotate(-45 9.24707 11.1387)'
        fill='#3A3441'
      />
      <rect
        x='29.0537'
        y='9.05469'
        width='2.60613'
        height='28.011'
        transform='rotate(45 29.0537 9.05469)'
        fill='#3A3441'
      />
    </svg>
  );
};

export const Research = (props: IconInstanceI) => {
  return (
    <svg
      width='44'
      height='44'
      viewBox='0 0 44 44'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M31.9292 16.7424C33.0734 17.8866 34.1513 19.4445 34.0556 21.3527C34.0184 22.0961 33.3834 22.5616 32.7566 22.5616C32.0026 22.5616 31.4666 21.9604 31.4017 21.3093C31.1744 19.0324 29.2453 17.2475 26.91 17.2475C24.5631 17.2475 22.6264 19.0502 22.4151 21.3434C22.3566 21.9785 21.8347 22.5616 21.1039 22.5616C20.4082 22.5616 19.7734 21.9851 19.833 21.2088C19.9624 19.5208 20.6832 17.9501 21.8909 16.7424C22.3561 16.2772 22.8755 15.8841 23.4352 15.5692C22.8313 14.8112 22.4689 13.8508 22.4689 12.8064C22.4689 10.3568 24.4605 8.36523 26.91 8.36523C29.3596 8.36523 31.3512 10.3568 31.3512 12.8064C31.3512 13.8508 30.9887 14.8112 30.3849 15.5692C30.9446 15.8841 31.464 16.2772 31.9292 16.7424ZM25.053 12.8064C25.053 13.8296 25.8868 14.6634 26.91 14.6634C27.9333 14.6634 28.7671 13.8296 28.7671 12.8064C28.7671 11.7831 27.9333 10.9493 26.91 10.9493C25.8868 10.9493 25.053 11.7831 25.053 12.8064Z'
        fill='#3A3441'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.12331 42.3971C0.398855 41.6728 0 40.7097 0 39.6853C0 38.6609 0.398855 37.6977 1.12331 36.9734L12.7227 25.374C11.1504 22.8343 10.2412 19.8428 10.2412 16.6425C10.2412 7.46903 17.7044 0.00585938 26.8779 0.00585938C36.0514 0.00585938 43.5146 7.46903 43.5146 16.6425C43.5146 25.816 36.0514 33.2792 26.8779 33.2792C23.6776 33.2792 20.6862 32.37 18.1464 30.7977L6.54699 42.3971C5.79934 43.1448 4.8172 43.5186 3.83515 43.5186C2.85309 43.5186 1.87096 43.1448 1.12331 42.3971ZM38.4082 16.8526C38.4082 23.1297 33.3196 28.2183 27.0426 28.2183C20.7655 28.2183 15.6769 23.1297 15.6769 16.8526C15.6769 10.5755 20.7655 5.48692 27.0426 5.48692C33.3196 5.48692 38.4082 10.5755 38.4082 16.8526Z'
        fill='#3A3441'
      />
    </svg>
  );
};

export const Business = (props: IconInstanceI) => {
  return (
    <svg
      width='27'
      height='48'
      viewBox='0 0 27 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14.4666 21.0667C8.41325 19.4933 6.46659 17.8667 6.46659 15.3333C6.46659 12.4267 9.15992 10.4 13.6666 10.4C17.4533 10.4 19.3466 11.84 20.0399 14.1333C20.3599 15.2 21.2399 16 22.3599 16H23.1599C24.9199 16 26.1733 14.2667 25.5599 12.6133C24.4399 9.46667 21.8266 6.85333 17.6666 5.84V4C17.6666 1.78667 15.8799 0 13.6666 0C11.4533 0 9.66658 1.78667 9.66658 4V5.76C4.49325 6.88 0.333252 10.24 0.333252 15.3867C0.333252 21.5467 5.42658 24.6133 12.8666 26.4C19.5333 28 20.8666 30.3467 20.8666 32.8267C20.8666 34.6667 19.5599 37.6 13.6666 37.6C9.26658 37.6 6.99992 36.0267 6.11992 33.7867C5.71992 32.7467 4.81325 32 3.71992 32H2.97325C1.18658 32 -0.0667483 33.8133 0.599918 35.4667C2.11992 39.1733 5.66658 41.36 9.66658 42.2133V44C9.66658 46.2133 11.4533 48 13.6666 48C15.8799 48 17.6666 46.2133 17.6666 44V42.2667C22.8666 41.28 26.9999 38.2667 26.9999 32.8C26.9999 25.2267 20.5199 22.64 14.4666 21.0667Z'
        fill='#3A3441'
      />
    </svg>
  );
};

export const Design = (props: IconInstanceI) => {
  return (
    <svg
      width='42'
      height='46'
      viewBox='0 0 42 46'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M40.0864 0H35.1664C34.4977 0 33.9565 0.596344 33.9565 1.33331V1.72806C33.9565 2.24641 33.5363 2.66661 33.018 2.66661H24.7376C24.3306 2.66661 23.9794 2.39864 23.7937 2.03645C23.172 0.823735 22.0003 0 20.6482 0C19.296 0 18.1243 0.823735 17.5026 2.03645C17.317 2.39864 16.9657 2.66661 16.5587 2.66661H8.27833C7.75998 2.66661 7.33977 2.24641 7.33977 1.72806V1.33331C7.33977 0.596344 6.79865 0 6.12992 0H1.20985C0.541127 0 0 0.596344 0 1.33331V6.66653C0 7.4035 0.541127 7.99984 1.20985 7.99984H6.12992C6.79865 7.99984 7.33977 7.4035 7.33977 6.66653V6.254C7.33977 5.73565 7.75998 5.31545 8.27833 5.31545H12.3086C8.26246 8.10105 5.54446 12.917 5.05604 18.3521C5.02241 18.7262 4.77488 19.0429 4.44955 19.2307C3.29404 19.8977 2.50036 21.2202 2.50036 22.7551C2.50036 24.9608 4.1285 26.755 6.12992 26.755C8.13134 26.755 9.75948 24.9608 9.75948 22.7551C9.75948 21.3093 9.05694 20.0476 8.0104 19.3469C7.67879 19.1249 7.44 18.7628 7.482 18.366C8.09168 12.6057 11.6842 7.77102 16.6812 6.05449C17.1128 5.90625 17.568 6.13199 17.8364 6.501C18.4988 7.41173 19.5084 7.99984 20.6482 7.99984C21.788 7.99984 22.7975 7.41173 23.4599 6.50099C23.7283 6.13199 24.1835 5.90624 24.6151 6.05447C29.6122 7.77094 33.2046 12.6056 33.8143 18.3659C33.8563 18.7627 33.6175 19.1248 33.2859 19.3468C32.2394 20.0475 31.5368 21.3093 31.5368 22.7551C31.5368 24.9608 33.165 26.755 35.1664 26.755C37.1678 26.755 38.7959 24.9608 38.7959 22.7551C38.7959 21.2202 38.0023 19.8977 36.8468 19.2307C36.5214 19.0429 36.2739 18.7262 36.2403 18.3521C35.7518 12.9182 33.0338 8.11882 28.9877 5.33323H33.018C33.5363 5.33323 33.9565 5.75343 33.9565 6.27178V6.66653C33.9565 7.4035 34.4977 7.99984 35.1664 7.99984H40.0864C40.7552 7.99984 41.2963 7.4035 41.2963 6.66653V1.33331C41.2963 0.596344 40.7552 0 40.0864 0Z'
        fill='#3A3441'
      />
      <path
        d='M28.8792 43.8582C28.2464 41.7241 26.4232 40.0898 24.2778 40.0898H17.0187C14.8732 40.0898 13.05 41.7241 12.4172 43.8582C12.1732 44.681 12.8084 45.512 13.594 45.512H27.7025C28.488 45.512 29.1232 44.681 28.8792 43.8582Z'
        fill='#3A3441'
      />
      <path
        d='M23.5997 14.5645L31.3336 27.3493C31.6538 27.8779 31.59 28.5824 31.1824 29.0316C29.2259 31.1878 27.8912 33.8912 27.2265 36.8168C27.0899 37.4178 26.44 37.7647 25.842 37.6156C25.3385 37.4899 24.8155 37.422 24.2778 37.422H17.0187C16.4809 37.422 15.958 37.49 15.4545 37.6156C14.8565 37.7648 14.2065 37.4179 14.0699 36.8169C13.4052 33.8914 12.0705 31.1877 10.114 29.0316C9.70638 28.5824 9.64258 27.8779 9.96279 27.3493L17.6968 14.5645C18.1885 13.7516 19.4384 14.1002 19.4384 15.0503V23.695C19.4384 24.0808 19.1954 24.4178 18.8678 24.6216C17.7667 25.3066 17.0187 26.5982 17.0187 28.0889C17.0187 30.2945 18.6468 32.0888 20.6482 32.0888C22.6496 32.0888 24.2778 30.2945 24.2778 28.0889C24.2778 26.5982 23.5297 25.3066 22.4286 24.6216C22.101 24.4178 21.8581 24.0808 21.8581 23.695V15.0503C21.8581 14.1002 23.1079 13.7516 23.5997 14.5645Z'
        fill='#3A3441'
      />
    </svg>
  );
};

export const Build = (props: IconInstanceI) => {
  return (
    <svg
      width='60'
      height='34'
      viewBox='0 0 60 34'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.08832 18.1165L7.08596 18.1157C6.84844 18.034 6.84585 17.699 7.08208 17.6136L18.2044 13.5913C18.6797 13.4194 18.9963 12.9682 18.9963 12.4628V9.78433C18.9963 8.92355 18.1168 8.34272 17.3252 8.6807L1.52883 15.4246C1.08679 15.6133 0.8 16.0476 0.8 16.5282V19.1401C0.8 19.6203 1.08629 20.0543 1.52776 20.2433L17.3241 27.0054C18.1159 27.3443 18.9963 26.7635 18.9963 25.9022V23.2275C18.9963 22.7208 18.6781 22.2687 18.2011 22.0978L7.08832 18.1165ZM53.0569 17.5926L53.0569 17.5927L53.0624 17.5944C53.2535 17.6549 53.2528 17.9256 53.0615 17.9852L53.0428 17.991L53.0427 17.9909L53.0355 17.9935L41.3321 22.14C40.8531 22.3097 40.5329 22.7629 40.5329 23.2711V25.9182C40.5329 26.7744 41.4039 27.3552 42.1943 27.0259L58.4822 20.2408C58.9294 20.0545 59.2208 19.6176 59.2208 19.1331V16.5148C59.2208 16.0299 58.9289 15.5926 58.4811 15.4066L42.1933 8.63975C41.403 8.31143 40.5329 8.89216 40.5329 9.74792V12.3724C40.5329 12.8828 40.8558 13.3373 41.3377 13.5054L53.0569 17.5926ZM26.9012 32.7851L37.8724 2.40762C38.1549 1.62543 37.5754 0.8 36.7438 0.8H34.3849C33.8795 0.8 33.4284 1.11656 33.2564 1.59174L22.266 31.9692C21.983 32.7515 22.5625 33.5775 23.3944 33.5775H25.7725C26.2781 33.5775 26.7294 33.2606 26.9012 32.7851Z'
        fill='#3A3441'
        stroke='#3A3441'
        strokeWidth='0.4'
      />
    </svg>
  );
};

export const Play = (props: IconInstanceI) => {
  return (
    <svg
      width='100'
      height='100'
      viewBox='0 0 152 152'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M102.638 76.0032L47.5 44.0167V107.99L102.638 76.0032ZM110.162 69.3912C111.327 70.058 112.295 71.0207 112.968 72.1817C113.641 73.3428 113.995 74.6611 113.995 76.0032C113.995 77.3453 113.641 78.6636 112.968 79.8246C112.295 80.9857 111.327 81.9484 110.162 82.6152L49.7135 117.689C44.7735 120.558 38 117.281 38 111.077V40.9292C38 34.7257 44.7735 31.4482 49.7135 34.3172L110.162 69.3912Z'
        fill='white'
      />
    </svg>
  );
};
