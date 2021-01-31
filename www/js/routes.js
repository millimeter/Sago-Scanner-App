var routes = [
    // Index page
    {
        path: '/',
        url: './index.html',
        name: 'home',
    },
    // About page
    {
        path: '/aboutus/',
        url: './pages/about.html',
        name: 'about',
    }, ,
    // dasboard page
    {
        path: '/dashboard/',
        url: './pages/dashboard.html',
        name: 'about',
    },
    // Right Panel pages
    {
        path: '/panel-right-1/',
        content: '\
      <div class="page">\
        <div class="navbar">\
          <div class="navbar-inner sliding">\
            <div class="left">\
              <a href="#" class="link back">\
                <i class="icon icon-back"></i>\
                <span class="ios-only">Back</span>\
              </a>\
            </div>\
            <div class="title">Panel Page 1</div>\
          </div>\
        </div>\
        <div class="page-content">\
          <div class="block">\
            <p>This is a right panel page 1</p>\
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>\
          </div>\
        </div>\
      </div>\
    ',
    },
    {
        path: '/panel-right-2/',
        content: '\
      <div class="page">\
        <div class="navbar">\
          <div class="navbar-inner sliding">\
            <div class="left">\
              <a href="#" class="link back">\
                <i class="icon icon-back"></i>\
                <span class="ios-only">Back</span>\
              </a>\
            </div>\
            <div class="title">Panel Page 2</div>\
          </div>\
        </div>\
        <div class="page-content">\
          <div class="block">\
            <p>This is a right panel page 2</p>\
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>\
          </div>\
        </div>\
      </div>\
    ',
    },

    // pages
    {
        path: '/welcome/',
        url: './pages/welcome.html',
    },
    {
        path: '/verification/',
        url: './pages/verification.html',
    },
    {
        path: '/register/',
        url: './pages/register.html',
    },
    {
        path: '/projects/',
        url: './pages/project-list.html',
    },
    {
        path: '/projectdetail/',
        url: './pages/project-detail.html',
    },
    {
        path: '/profile/',
        url: './pages/profile.html',
    },
    {
        path: '/branches/',
        url: './pages/branches.html',
    },
    {
        path: '/reciept/',
        url: './pages/reciept.html',
    },

    {
        path: '/log/',
        url: './pages/scan_log.html',
    },
    {
        path: '/exchange_rates/',
        url: './pages/exchange_rates.html',
    },
    {
        path: '/products/',
        url: './pages/products.html',
        name: 'products',
    },

    // motor_insurance page
    {
        path: '/motorinsurance/',
        url: './pages/motor_insurance.html',
        name: 'motorinsurance',
    },
    // home_insurance page
    {
        path: '/homeinsurance/',
        url: './pages/home_insurance.html',
        name: 'homeinsurance',
    },
    // business_insurance page
    {
        path: '/businessinsurance/',
        url: './pages/business_insurance.html',
        name: 'businessinsurance',
    },
    // business_insurance page
    {
        path: '/branches_near/',
        url: './pages/branches_near.html',
        name: 'branches_near',
    },
    {
        path: '/branches_green/',
        url: './pages/branches_green.html',
        name: 'branches_green',
    },
    {
        path: '/branches_all/',
        url: './pages/branches_all.html',
        name: 'branches_all',
    },
    {
        path: '/emergency_services/',
        url: './pages/emergency_services.html',
        name: 'emergency_services',
    },
    {
        path: '/my_portfolio/',
        url: './pages/my_portfolio.html',
        name: 'my_portfolio',
    },
    {
        path: '/qrcode/',
        url: './pages/qrcode.html',
        name: 'qrcode',
    },
    {
        path: '/directions/',
        url: './pages/directions.html',
        name: 'directions',
    },
    {
        path: '/policy_calculator/',
        url: './pages/policy_calculators.html',
        name: 'policy_calculator',
    },
    {
        path: '/contactus/',
        url: './pages/contact_us.html',
    },
    {
        path: '/faqs/',
        url: './pages/faqs.html',
    },

    {
        path: '/help/',
        url: './pages/help.html',
    },

    {
        path: '/tollPlazzas/',
        url: './pages/toll-plazzas.html',
        name: 'tollPlazzas',
    },
    {
        path: '/premium/',
        url: './pages/premium.html',
    },

    {
        path: '/my_shop/',
        url: './pages/my_shop.html',
    },

    {
        path: '/order/',
        url: './pages/order.html',
    },

    {
        path: '/policy_calculator_motor/',
        url: './pages/policy_calculator_motor.html',
    },
    {
        path: '/policy_calculator_home/',
        url: './pages/policy_calculator_home.html',
    },
    {
        path: '/my_profile_all_claims/',
        url: './pages/my_profile_all_claims.html',
    },
    {
        path: '/my_profile_all_policies/',
        url: './pages/my_profile_all_policies.html',
    },
    {
        path: '/my_profile_all_policy_risks/',
        url: './pages/my_profile_all_policy_risks.html',
    },
    {
        path: '/claims/',
        url: './pages/claims.html',
    },
    {
        path: '/claims_notification/',
        url: './pages/claims_notification.html',
    },
    {
        path: '/claims_enquiry/',
        url: './pages/claims_enquiry.html',
    },
    {
        path: '/claims_how_to/',
        url: './pages/claims_how_to.html',
    },
    {
        path: '/exchange_rate_stats/',
        url: './pages/exchange_rate_stats.html',
    },
    {
        path: '/quote_motor/',
        url: './pages/quote_motor.html',
    },
    {
        path: '/quote_home/',
        url: './pages/quote_home.html',
    },

    {
        path: '/home_page/',
        url: './pages/home.html',
        name: 'home',
    },


    // Components
    {
        path: '/component/',
        url: './pages/component.html',
    },
    {
        path: '/accordion/',
        url: './pages/accordion.html',
    },
    {
        path: '/action-sheet/',
        componentUrl: './pages/action-sheet.html',
    },
    {
        path: '/autocomplete/',
        componentUrl: './pages/autocomplete.html',
    },
    {
        path: '/badge/',
        componentUrl: './pages/badge.html',
    },
    {
        path: '/buttons/',
        url: './pages/buttons.html',
    },
    {
        path: '/calendar/',
        componentUrl: './pages/calendar.html',
    },
    {
        path: '/calendar-page/',
        componentUrl: './pages/calendar-page.html',
    },
    {
        path: '/cards/',
        url: './pages/cards.html',
    },
    {
        path: '/checkbox/',
        url: './pages/checkbox.html',
    },
    {
        path: '/chips/',
        componentUrl: './pages/chips.html',
    },
    {
        path: '/contacts-list/',
        url: './pages/contacts-list.html',
    },
    {
        path: '/content-block/',
        url: './pages/content-block.html',
    },
    {
        path: '/data-table/',
        componentUrl: './pages/data-table.html',
    },
    {
        path: '/dialog/',
        componentUrl: './pages/dialog.html',
    },
    {
        path: '/elevation/',
        url: './pages/elevation.html',
    },
    {
        path: '/fab/',
        url: './pages/fab.html',
    },
    {
        path: '/fab-morph/',
        url: './pages/fab-morph.html',
    },
    {
        path: '/form-storage/',
        url: './pages/form-storage.html',
    },
    {
        path: '/gauge/',
        componentUrl: './pages/gauge.html',
    },
    {
        path: '/grid/',
        url: './pages/grid.html',
    },
    {
        path: '/icons/',
        componentUrl: './pages/icons.html',
    },
    {
        path: '/infinite-scroll/',
        componentUrl: './pages/infinite-scroll.html',
    },
    {
        path: '/inputs/',
        url: './pages/inputs.html',
    },
    {
        path: '/lazy-load/',
        url: './pages/lazy-load.html',
    },
    {
        path: '/list/',
        url: './pages/list.html',
    },
    {
        path: '/list-index/',
        componentUrl: './pages/list-index.html',
    },
    {
        path: '/login-screen/',
        componentUrl: './pages/login-screen.html',
    },
    {
        path: '/login/',
        componentUrl: './pages/login-screen-page.html',
    },
    {
        path: '/messages/',
        componentUrl: './pages/messages.html',
    },
    {
        path: '/navbar/',
        url: './pages/navbar.html',
    },
    {
        path: '/navbar-hide-scroll/',
        url: './pages/navbar-hide-scroll.html',
    },
    {
        path: '/notifications/',
        componentUrl: './pages/notifications.html',
    },
    {
        path: '/panel/',
        url: './pages/panel.html',
    },
    {
        path: '/photo-browser/',
        componentUrl: './pages/photo-browser.html',
    },
    {
        path: '/picker/',
        componentUrl: './pages/picker.html',
    },
    {
        path: '/popup/',
        componentUrl: './pages/popup.html',
    },
    {
        path: '/popover/',
        url: './pages/popover.html',
    },
    {
        path: '/preloader/',
        componentUrl: './pages/preloader.html',
    },
    {
        path: '/progressbar/',
        componentUrl: './pages/progressbar.html',
    },
    {
        path: '/pull-to-refresh/',
        componentUrl: './pages/pull-to-refresh.html',
    },
    {
        path: '/radio/',
        url: './pages/radio.html',
    },
    {
        path: '/range/',
        componentUrl: './pages/range.html',
    },
    {
        path: '/searchbar/',
        url: './pages/searchbar.html',
    },
    {
        path: '/searchbar-expandable/',
        url: './pages/searchbar-expandable.html',
    },
    {
        path: '/sheet-modal/',
        componentUrl: './pages/sheet-modal.html',
    },
    {
        path: '/smart-select/',
        url: './pages/smart-select.html',
    },
    {
        path: '/sortable/',
        url: './pages/sortable.html',
    },
    {
        path: '/statusbar/',
        componentUrl: './pages/statusbar.html',
    },
    {
        path: '/stepper/',
        componentUrl: './pages/stepper.html',
    },
    {
        path: '/subnavbar/',
        url: './pages/subnavbar.html',
    },
    {
        path: '/subnavbar-title/',
        url: './pages/subnavbar-title.html',
    },
    {
        path: '/swiper/',
        url: './pages/swiper.html',
        routes: [{
                path: 'swiper-horizontal/',
                url: './pages/swiper-horizontal.html',
            },
            {
                path: 'swiper-vertical/',
                url: './pages/swiper-vertical.html',
            },
            {
                path: 'swiper-space-between/',
                url: './pages/swiper-space-between.html',
            },
            {
                path: 'swiper-multiple/',
                url: './pages/swiper-multiple.html',
            },
            {
                path: 'swiper-nested/',
                url: './pages/swiper-nested.html',
            },
            {
                path: 'swiper-loop/',
                url: './pages/swiper-loop.html',
            },
            {
                path: 'swiper-3d-cube/',
                url: './pages/swiper-3d-cube.html',
            },
            {
                path: 'swiper-3d-coverflow/',
                url: './pages/swiper-3d-coverflow.html',
            },
            {
                path: 'swiper-3d-flip/',
                url: './pages/swiper-3d-flip.html',
            },
            {
                path: 'swiper-fade/',
                url: './pages/swiper-fade.html',
            },
            {
                path: 'swiper-scrollbar/',
                url: './pages/swiper-scrollbar.html',
            },
            {
                path: 'swiper-gallery/',
                componentUrl: './pages/swiper-gallery.html',
            },
            {
                path: 'swiper-custom-controls/',
                url: './pages/swiper-custom-controls.html',
            },
            {
                path: 'swiper-parallax/',
                url: './pages/swiper-parallax.html',
            },
            {
                path: 'swiper-lazy/',
                url: './pages/swiper-lazy.html',
            },
            {
                path: 'swiper-pagination-progress/',
                url: './pages/swiper-pagination-progress.html',
            },
            {
                path: 'swiper-pagination-fraction/',
                url: './pages/swiper-pagination-fraction.html',
            },
            {
                path: 'swiper-zoom/',
                url: './pages/swiper-zoom.html',
            },
        ],
    },
    {
        path: '/swipeout/',
        componentUrl: './pages/swipeout.html',
    },
    {
        path: '/tabs/',
        url: './pages/tabs.html',
    },
    {
        path: '/tabs-static/',
        url: './pages/tabs-static.html',
    },
    {
        path: '/tabs-animated/',
        url: './pages/tabs-animated.html',
    },
    {
        path: '/tabs-swipeable/',
        url: './pages/tabs-swipeable.html',
    },
    {
        path: '/tabs-routable/',
        url: './pages/tabs-routable.html',
        tabs: [{
                path: '/',
                id: 'tab1',
                content: ' \
        <div class="block"> \
          <p>Tab 1 content</p> \
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p> \
          <p>Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.</p> \
          <p>Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.</p> \
        </div> \
        ',
            },
            {
                path: '/tab2/',
                id: 'tab2',
                content: '\
        <div class="block"> \
          <p>Tab 2 content</p> \
          <p>Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia explicabo, unde aliquid impedit! Adipisci!</p> \
          <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p> \
          <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p> \
        </div> \
        ',
            },
            {
                path: '/tab3/',
                id: 'tab3',
                content: '\
        <div class="block"> \
          <p>Tab 3 content</p> \
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p> \
          <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p> \
          <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p> \
        </div> \
        ',
            },
        ],
    },
    {
        path: '/toast/',
        componentUrl: './pages/toast.html',
    },
    {
        path: '/toggle/',
        url: './pages/toggle.html',
    },
    {
        path: '/toolbar-tabbar/',
        componentUrl: './pages/toolbar-tabbar.html',
        routes: [{
                path: 'tabbar/',
                componentUrl: './pages/tabbar.html',
            },
            {
                path: 'tabbar-labels/',
                componentUrl: './pages/tabbar-labels.html',
            },
            {
                path: 'tabbar-scrollable/',
                componentUrl: './pages/tabbar-scrollable.html',
            },
            {
                path: 'toolbar-hide-scroll/',
                url: './pages/toolbar-hide-scroll.html',
            },
        ],
    },
    {
        path: '/tooltip/',
        componentUrl: './pages/tooltip.html',
    },
    {
        path: '/timeline/',
        url: './pages/timeline.html',
    },
    {
        path: '/timeline-vertical/',
        url: './pages/timeline-vertical.html',
    },
    {
        path: '/timeline-horizontal/',
        url: './pages/timeline-horizontal.html',
    },
    {
        path: '/timeline-horizontal-calendar/',
        url: './pages/timeline-horizontal-calendar.html',
    },
    {
        path: '/virtual-list/',
        componentUrl: './pages/virtual-list.html',
    },
    {
        path: '/virtual-list-vdom/',
        componentUrl: './pages/virtual-list-vdom.html',
    },

    // Color Themes
    {
        path: '/color-themes/',
        componentUrl: './pages/color-themes.html',
    },

    // Page Loaders
    {
        path: '/page-loader-template7/:user/:userId/:posts/:postId/',
        templateUrl: './pages/page-loader-template7.html',
        // additional context
        options: {
            context: {
                foo: 'bar',
            },
        },
    },
    {
        path: '/page-loader-component/:user/:userId/:posts/:postId/',
        componentUrl: './pages/page-loader-component.html',
        // additional context
        options: {
            context: {
                foo: 'bar',
            },
        },
    },

    // Default route (404 page). MUST BE THE LAST
    {
        path: '(.*)',
        url: './pages/404.html',
    },


    // SAGA UI DESIGN // 


];