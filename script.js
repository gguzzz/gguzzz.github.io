
var scriptTag = document.createElement('script');
scriptTag.src = "https://code.jquery.com/jquery-3.7.1.min.js";
scriptTag.setAttribute("integrity", "sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=");
scriptTag.setAttribute("crossorigin", "anonymous");
document.head.appendChild(scriptTag);



<iframe id="my_iframe" style="display:none;"></iframe>
function Download(url) {
    document.getElementById('my_iframe').src = url;
};  


fetch('https://script.googleusercontent.com/macros/echo?user_content_key=9loyBf17ER16OZWo0jUvTuZxdNPqTWo4Oy_xsNOoOtloAefZXY2Ep-35VjfXUT7PyLNXOIHM33jEswP-kxIiDkQttvqawyUlOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa2YLMuFA_JQAzZti29HqIbZtOnvhxeeL4S1hCp1fzP7uohTPLy5S2ZM9gVOo-YYS-XIxWAzaXqZELLkmBeo4jMKr8Q_08i-ho4xRSJWZ7XSsQAuZonbe0ThRWb8u_wwGWA&libhttps://script.googleusercontent.com/macros/echo?user_content_key=c0IxbyuNRKtfCzX-QLhoxhoEbq_W-Uy7JbIno7Xzzvjsdes-y86C5rv7bKcqmf3SHt9QgQPyrfmaEcsRTcYD_GG319kRA2DrOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa8B-b80N4OF0J1kFCk4CpagiLLzpz5I1aMpMx6EvKwPWulNo7s1iWgX2pv0PQpkhax9i5SjwbgwaKv4medEH6TJ9UrE5Jxz5h4xRSJWZ7XSsQAuZonbe0ThRWb8u_wwGWA&lib=Mq1B_M6QmL0B96eMvTMIZh6ZQEEQXtQdr=Mq1B_M6QmL0B96eMvTMIZh6ZQEEQXtQdr')
.then(res => {
    return res.json();
})
.then(data => {
    data.forEach(user => {
        const markup = '<li>${user.name}</li>';

        document.querySelector('ul').insertAdjacentHTML('beforeed', markup)
    });
})
.catch(error => console.log(error));


const f = document.getElementById('form');
      const q = document.getElementById('query');
      const google = 'https://www.google.com/search?q=site%3A+';
      const site = 'pagedart.com';

      function submitted(event) {
        event.preventDefault();
        const url = google + site + '+' + q.value;
        const win = window.open(url, '_blank');
        win.focus();
      }

      f.addEventListener('submit', submitted);