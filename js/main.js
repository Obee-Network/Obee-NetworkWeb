var scroll = new SmoothScroll('a[href*="#"]', {
    offset: 100
});

AOS.init({
    easing: 'ease-out-back',
    duration: 1000
});

/**
 * 时间轴内容配置
 * 存为一个 Map，以对应语言为 key，默认为 default(English 或没有对应语言时)
 */
let timelineContentMap = {
    default: [
        {
            'year': 2018,
            'events': [
                {
                    'mouths': 2,
                    'times': '2018.Q2',
                    'even': ' Departure and initial development'
                }, {
                    'mouths': 6,
                    'times': '2018.Q3~Q4',
                    'even': 'Product development'
                }]
        }, {
            'year': 2019,
            'events': [
                {
                    'mouths': 2,
                    'times': '2019.Q2',
                    'even': 'Compatibility development'
                }, {
                    'mouths': 6,
                    'times': '2019.Q3',
                    'even': 'Product internal test'
                }, {
                    'mouths': 10,
                    'times': '2019.Q4',
                    'even': 'Function module development'
                }
            ]
        }, {
            'year': 2020,
            'events': [
                {
                    'mouths': 6,
                    'times': '2020.Q2',
                    'even': 'Obee Networkv1.0 white paper released'
                }
            ]
        }
    ],	
	japan: [
        {
            'year': 2018,
            'events': [
                {
                    'mouths': 2,
                    'times': '2018.Q2',
                    'even': ' 出発と初期開発'
                }, {
                    'mouths': 6,
                    'times': '2018.Q3~Q4',
                    'even': '商品開発'
                }]
        }, {
            'year': 2019,
            'events': [
                {
                    'mouths': 2,
                    'times': '2019.Q2',
                    'even': '互換性の開発'
                }, {
                    'mouths': 6,
                    'times': '2019.Q3',
                    'even': '製品内部テスト'
                }, {
                    'mouths': 10,
                    'times': '2019.Q4',
                    'even': '汎用モジュール開発'
                }
            ]
        }, {
            'year': 2020,
            'events': [
                {
                    'mouths': 6,
                    'times': '2020.Q2',
                    'even': 'Obee Networkv1.0ホワイトペーパーをリリース'
                }
            ]
        }
    ],
	es: [
        {
            'year': 2018,
            'events': [
                {
                    'mouths': 2,
                    'times': '2018.Q2',
                    'even': ' Salida y desarrollo inicial.'
                }, {
                    'mouths': 6,
                    'times': '2018.Q3~Q4',
                    'even': 'Desarrollo de producto'
                }]
        }, {
            'year': 2019,
            'events': [
                {
                    'mouths': 2,
                    'times': '2019.Q2',
                    'even': 'Desarrollo de compatibilidad'
                }, {
                    'mouths': 6,
                    'times': '2019.Q3',
                    'even': 'Prueba interna del producto'
                }, {
                    'mouths': 10,
                    'times': '2019.Q4',
                    'even': 'Desarrollo del módulo de funciones.'
                }
            ]
        }, {
            'year': 2020,
            'events': [
                {
                    'mouths': 6,
                    'times': '2020.Q2',
                    'even': 'Se publica el informe técnico de Obee Networkv1.0'
                }
            ]
        }
    ],
	ger: [
        {
            'year': 2018,
            'events': [
                {
                    'mouths': 2,
                    'times': '2018.Q2',
                    'even': ' Abfahrt und erste Entwicklung'
                }, {
                    'mouths': 6,
                    'times': '2018.Q3~Q4',
                    'even': 'Produktentwicklung'
                }]
        }, {
            'year': 2019,
            'events': [
                {
                    'mouths': 2,
                    'times': '2019.Q2',
                    'even': 'Kompatibilitätsentwicklung'
                }, {
                    'mouths': 6,
                    'times': '2019.Q3',
                    'even': 'Produktinterner Test'
                }, {
                    'mouths': 10,
                    'times': '2019.Q4',
                    'even': 'Funktionsbausteinentwicklung'
                }
            ]
        }, {
            'year': 2020,
            'events': [
                {
                    'mouths': 6,
                    'times': '2020.Q2',
                    'even': 'Whitepaper zu Obee Networkv1.0 veröffentlicht'
                }
            ]
        }
    ],
	cn: [
        {
            'year': 2018,
            'events': [
                {
                    'mouths': 2,
                    'times': '2018.Q2',
                    'even': ' 启程与初步发展  '
                }, {
                    'mouths': 6,
                    'times': '2018.Q3~Q4',
                    'even': '产品的研发'
                }]
        }, {
            'year': 2019,
            'events': [
                {
                    'mouths': 2,
                    'times': '2019.Q2',
                    'even': '兼容性开发'
                }, {
                    'mouths': 6,
                    'times': '2019.Q3',
                    'even': '产品内测'
                }, {
                    'mouths': 10,
                    'times': '2019.Q4',
                    'even': '功能模块开发'
                }
            ]
        }, {
            'year': 2020,
            'events': [
                {
                    'mouths': 6,
                    'times': '2020.Q2',
                    'even': 'Obee Networkv1.0白皮书发布'
                }
            ]
        }
    ],
	
	Kr: [
        {
            'year': 2018,
            'events': [
                {
                    'mouths': 2,
                    'times': '2018.Q2',
                    'even': ' 출발 및 초기 개발'
                }, {
                    'mouths': 6,
                    'times': '2018.Q3~Q4',
                    'even': '제품 개발'
                }]
        }, {
            'year': 2019,
            'events': [
                {
                    'mouths': 2,
                    'times': '2019.Q2',
                    'even': '호환성 개발'
                }, {
                    'mouths': 6,
                    'times': '2019.Q3',
                    'even': '제품 내부 테스트'
                }, {
                    'mouths': 10,
                    'times': '2019.Q4',
                    'even': '기능 모듈 개발'
                }
            ]
        }, {
            'year': 2020,
            'events': [
                {
                    'mouths': 6,
                    'times': '2020.Q2',
                    'even': 'Obee Networkv1.0 백서 출시'
                }
            ]
        }
    ],
	russian: [
        {
            'year': 2018,
            'events': [
                {
                    'mouths': 2,
                    'times': '2018.Q2',
                    'even': ' Выезд и начальная разработка'
                }, {
                    'mouths': 6,
                    'times': '2018.Q3~Q4',
                    'even': 'Phát triển sản phẩm'
                }]
        }, {
            'year': 2019,
            'events': [
                {
                    'mouths': 2,
                    'times': '2019.Q2',
                    'even': 'Совместимость разработки'
                }, {
                    'mouths': 6,
                    'times': '2019.Q3',
                    'even': 'Внутренний тест продукта'
                }, {
                    'mouths': 10,
                    'times': '2019.Q4',
                    'even': 'Разработка функционального модуля'
                }
            ]
        }, {
            'year': 2020,
            'events': [
                {
                    'mouths': 6,
                    'times': '2020.Q2',
                    'even': 'Выпущен официальный документ Obee Networkv1.0'
                }
            ]
        }
    ],
	vietnam: [
        {
            'year': 2018,
            'events': [
                {
                    'mouths': 2,
                    'times': '2018.Q2',
                    'even': ' Khởi hành và phát triển ban đầu'
                }, {
                    'mouths': 6,
                    'times': '2018.Q3~Q4',
                    'even': 'Phát triển sản phẩm'
                }]
        }, {
            'year': 2019,
            'events': [
                {
                    'mouths': 2,
                    'times': '2019.Q2',
                    'even': 'Phát triển tương thích'
                }, {
                    'mouths': 6,
                    'times': '2019.Q3',
                    'even': 'Kiểm tra nội bộ sản phẩm'
                }, {
                    'mouths': 10,
                    'times': '2019.Q4',
                    'even': 'Phát triển mô đun chức năng'
                }
            ]
        }, {
            'year': 2020,
            'events': [
                {
                    'mouths': 6,
                    'times': '2020.Q2',
                    'even': 'Phát hành giấy trắng Obee Networkv1.0'
                }
            ]
        }
    ]
	
};


$(function ($) {
    var toTop = $('#toTop');

    toTop.on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
        event.preventDefault();
    })
    $(window).on('scroll', function () {
        var self = $(window), height = self.height(), top = self.scrollTop();

        if (top > height) {
            if (!toTop.is(':visible')) {
                toTop.show();
            }
        } else {
            toTop.hide();
        }
    })

    var localstorage = window.localStorage;
    var read = localstorage.getItem("read");

    if (read) {
        $(".notice>span").css("display", "none");
    } else {
        $(".notice>span").css("display", "block");
    }

    //时间轴
    // $('.event_wrap').eventFlow({ 'events': bigEvent });
    const pageName = getPageName();
    const bigEvent = timelineContentMap[pageName] || timelineContentMap.default;
    let timelineString = '';

    for (let index = 0, len = bigEvent.length; index < len; index++) {
        const item = bigEvent[index];

        timelineString += `<li class="timeline-item">
            <div class="timeline-index-box">
                <div class="timeline-index-head">${index + 1}</div>
                <span class="timeline-index-tail"></span>
            </div>
            <span class="timeline-time">${item.year}</span>
            <div class="timeline-event">`;
        
        for (let eventItem of item.events) {
            timelineString += `<div class="timeline-event-item">
                <div class="timeline-event-head"></div>
                <div class="timeline-event-tail"></div>
                <div class="timeline-content">
                    <h3>${eventItem.times}</h3>
                    <p>${eventItem.even}</p>
                </div>
            </div>`;
        }

        timelineString += `</div></li>`;
    }
    $('.timeline ul').html(timelineString);


    // 3D 轮播图
    swiper();

    // 导航栏 - 分辨率 768px
    const navBar = $('.navbar-collapse.collapse .navbar-nav').eq(0);

    $('.navbar-collapse.collapse .anticon-menu').click(function () {
        navBar.toggle()
    })

    // 隐藏加载动画
    setTimeout(function () {
        $('.loading-box').css('display', 'none');
    }, 3);
})

// 3D 轮播图
function swiper() {
    const data = [
        { text: '', img: 'images/swiper/20120814204816.jpg',url:'https://www.obee.vip/products'},
        { text: '', img: 'images/swiper/20120814204750.jpg',url:'https://www.obee.vip/events' },
        { text: '', img: 'images/swiper/20120814204733.jpg',url:'https://www.obee.vip/movies'},
        { text: '', img: 'images/swiper/20120814204711.jpg',url:'https://www.obee.vip' },
        { text: '', img: 'images/swiper/20120814204658.jpg',url:'https://www.obee.vip/blogs' },
    ];

    let liStr = '';

    for (let item of data) {
        liStr += `
            <li>
                <div class="gla_inbox">
                    <p>${item.text}</p>
                    <img src="${item.img}" />
                    <a href="${item.url}">learn more</a>
                </div>
            </li>`;
    }

    $('.gla_inbox').corner('8px');
    $('#gla_box>ul').html(liStr).roundabout({
        minOpacity: 1,
        btnNext: ".next",
        duration: 1000,
        reflect: true,
        btnPrev: '.prev',
        autoplay: true,
        autoplayDuration: 5000,
        tilt: 0,
        shape: 'figure8'
    });
}

// 获取 HTML 页面名称 index.html -> index
function getPageName() {
    const pathname = window.location.pathname;
    const match = pathname.match(/(\w+?)\.html/);
    let name = 'default';
    
    if (match) {
        name = match[1];
    }

    return name;
}