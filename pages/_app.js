import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import ProgressBar from '@badrap/bar-of-progress';
import  Router  from 'next/router';

function MyApp({ Component, pageProps }) {
  const progress = new ProgressBar({
    size:2,
    color:'#FD5B61',
    className:"z-50",
    delay:100,
  });

  Router.events.on("routeChangeStart", progress.start);
  Router.events.on("routeChangeComplete", progress.finish);

  return <Component {...pageProps} />
}

export default MyApp
