import { Fragment } from 'react'
import Navbar from '../components/Navbar'
import store from '../redux/store';
import {Provider} from 'react-redux';
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <Fragment>
      <Navbar/>
      <Component {...pageProps} />
    </Fragment>    
    </Provider>
  )
}

export default MyApp
