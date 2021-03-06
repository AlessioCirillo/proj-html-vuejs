
Vue.directive('scroll', {
    inserted: function (el, binding) {
      let f = function (evt) {
        if (binding.value(evt, el)) {
          window.removeEventListener('scroll', f)
        }
      }
      window.addEventListener('scroll', f)
    }
  })

const app = new Vue({
    el: '#app',
    data: {
        // HEADER 
        menu:[
            'home',
            'pages',
            'courses',
            'features',
            'blog',
            'shop'
        ],
        icons:[
            'fab fa-twitter',
            'fab fa-facebook-f',
            'fab fa-instagram',
            'fab fa-linkedin'
        ],
        // FOOTER
        contacts:[
            '382 NE 191st ST # 87394 Miami, FL 33179-3899',
            '+1(305) 547-9909 (9am - 5pm EST, Monday - Friday)',
            'support@mxcoach.com'
        ],
        explore:[
            'start here',
            'blog',
            'about us',
            'success story',
            'courses',
            'contact us'
        ],
        information:[
            'membership',
            'purchase guide',
            'privacy policy',
            'terms of service'
        ],
        footerIcons:[
            'fab fa-facebook-square',
            'fab fa-twitter',
            'fab fa-instagram',
            'fab fa-linkedin'
        ],
        copy:{
            copyIcon:[
                'far fa-copyright'
            ],
            copyText: '2020 Maxcoach. All Rights Reserved'
        }
    },

    methods:{
        // EVENTO SCROLL
        handleScroll: function (evt, el) {
            if (window.scrollY > 1700) {
              el.setAttribute(
                'style',
                'opacity: 1'
              )
            } else if(window.scrollY < 1700){
                el.setAttribute(
                    'style',
                    'opacity: 0'
                )
            }
        }   
    }
});