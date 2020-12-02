const app = new Vue({
    el: '#app',
    data: {
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
    }
});