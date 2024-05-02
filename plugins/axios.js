import Cookies from 'js-cookie'

export default function ({ $axios }) {
  $axios.onRequest((config) => {
    const csrfToken = Cookies.get('CSRF-TOKEN')
    config.headers.common['X-CSRF-TOKEN'] = csrfToken
  })
}
