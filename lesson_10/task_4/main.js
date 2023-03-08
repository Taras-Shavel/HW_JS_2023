const countries = [
    {name: "Україні", capital: "Київ", photo: 'https://i0.wp.com/www.terrain.org/wp-content/uploads/2022/04/kyiz-with-statue.jpg?fit=1450%2C966&ssl=1'},
    {name: "Австралія", capital: "Канберра", photo: 'https://studysmart.com.ua/assets/images/resources/23/kanberra2.jpg'},
    {name: "Австрія", capital: "Відень", photo: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/13-08-30-wien-by-RalfR-123.jpg'},
    {name: "Азербайджан", capital: "Баку", photo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/93/40/de/exterior-shot-from-the.jpg?w=500&h=300&s=1'},
    {name: "Албанія", capital: "Тирана", photo: 'https://planetofhotels.com/guide/sites/default/files/styles/big_gallery_image/public/text_gallery/tirana-2.jpg'},
    {name: "Алжир", capital: "Алжир", photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTZio39oLxB-cr-4l0atDsip87l35iMa-XYyCaNRRj0hB9BLBU1r-xLK9H4dxHdOfcUi0&usqp=CAU'},
    {name: "Ангола", capital: "Луанда", photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Marginal_Promenade_in_Luanda_-_Angola_2015.jpg/310px-Marginal_Promenade_in_Luanda_-_Angola_2015.jpg'},
    {name: "Андорра", capital: "Андорра-ла-Велья", photo: 'https://espanarusa.com/files/autoupload/72/47/25/03ezqboi379508.jpg'},
    {name: "Аргентина", capital: "Буенос-Айрес", photo: 'https://yeremenko.ua/images/banners/4a0bc10000000578-5484797-image-a-3-1520676572273.jpg'},
    {name: "Аруба", capital: "Ораньєстад", photo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Centrum_Oranjestad.jpg'},
    {name: "Афганістан", capital: "Кабул", photo: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Kabul-Pano_By_Dani.jpg'},
    {name: "Багамські Острови", capital: "Нассау", photo: 'https://triplook.me/media/resorts/photo/f/0/jn7.jpg'},
    {name: "Бангладеш", capital: "Дакка", photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlYUAchdMaxKJTH5-Z0WVrdktygZvI9OJi_lsxoEUy9oP57qSAKisc6idI-_I_EyOMzVQ&usqp=CAU'},
    {name: "Барбадос", capital: "Бріджтаун", photo: 'https://tournavigator.pro/%D1%84%D0%BE%D1%82%D0%BE/other/5675/3514625'},
    {name: "Бахрейн", capital: "Манама", photo: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Bahrain_World_trade_Center_.jpg'},
    {name: "Беларусь", capital: "Мінськ", photo: 'https://www.dobovo.com/blog/wp-content/uploads/2017/11/minsk.jpg'},
    {name: "Бельгія", capital: "Брюссель", photo: 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__text_with_image___twi_image/public/2021-12/brussel-region-2.jpg'},
    {name: "Беліз", capital: "Бельмопан", photo: 'https://zodast.ru/wp-content/uploads/2019/09/belmopan-e1568142688492.jpg'},
    {name: "Бенін", capital: "Порто-Ново", photo: 'https://estatemontegroup.com/images/products/1749/lg/b7a042639ff5cd1ac3b521fedca0b5f0e985e242.jpg'},
    {name: "Бермудські Острови", capital: "Гамільтон", photo: 'https://upload.wikimedia.org/wikipedia/commons/0/01/HamiltonOntarioSkylineC.JPG'},
    {name: "Болгарія", capital: "Софія", photo: 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/sofia-1.jpg'},
    {name: "Болівія", capital: "Ла-Пас", photo: 'https://upload.wikimedia.org/wikipedia/commons/8/86/La_Paz-center.jpg'},
    {name: "Боснія і Герцеговина", capital: "Сараєво", photo: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Sarajevo_City_Panorama.JPG'},
    {name: "Ботсвана", capital: "Габороне", photo: 'https://ermakvagus.com/Africa/Botswana/2017-05-05.jpg'},
    {name: "Бразилія", capital: "Бразиліа", photo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/National_Congress_of_Brazil.jpg'},
    {name: "Британські Віргінські Острови", capital: "Роуд-Таун", photo: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Roadtown%2C_Tortola.jpg'},
    {name: "Бруней", capital: "Бандар-Сері-Бегаван", photo: 'https://img.wallpapic.com.ua/i3690-629-043/medium/mechet-sultana-omara-ali-sajfuddina-indiya-bandar-seri-begavan-brunej-darussalam-shpalery.jpg'},
    {name: "Буркіна-Фасо", capital: "Уагадугу", photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Place_Memorial_auz_Heros_Nationaux_in_Burkina_Faso%2C_2009.jpg/290px-Place_Memorial_auz_Heros_Nationaux_in_Burkina_Faso%2C_2009.jpg'},
    {name: "Бурунді", capital: "Бужумбура", photo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/BujumburaFromCathedral.jpg'},
    {name: "Вануату", capital: "Порт-Віла", photo: 'https://triplook.me/media/resorts/photo/f/8/u64.jpg'},
    {name: "Ватикан", capital: "Ватикан", photo: 'https://smapse.ru/storage/2021/10/converted/895_0_7-faktov-o-vatikane-samom-malenkom-gosudarstve-mira5-smapse-banner.png'},
    {name: "Велика Британія", capital: "Лондон", photo: 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/London-1.jpg'},
    {name: "Венесуела", capital: "Каракас", photo: 'https://planetofhotels.com/guide/sites/default/files/styles/big_gallery_image/public/text_gallery/CARACAS-2.jpg'},
    {name: "В'єтнам", capital: "Ханой", photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Panorama_of_Hanoi.jpg/250px-Panorama_of_Hanoi.jpg'},
    {name: "Габон", capital: "Лібревіль", photo: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Libreville1.jpg'},
    {name: "Гаїті", capital: "Порт-о-Пренс", photo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/9d/b8/8f/haiti-from-above.jpg?w=700&h=-1&s=1'},
    {name: "Гамбія", capital: "Банжул", photo: 'https://ermakvagus.com/Africa/Gambia/Banjul-King-Fahad-Mosque.jpg'},
    {name: "Гана", capital: "Аккра", photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/A_drone_footage_of_Accra_central%2C_Ghana.jpg/286px-A_drone_footage_of_Accra_central%2C_Ghana.jpg'},
    {name: "Гваделупа", capital: "Бас-Тер", photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Basseterre.jpeg/290px-Basseterre.jpeg'},
    {name: "Гватемала", capital: "Гватемала", photo: 'https://34travel.me/media/upload/images/2017/december/gvatemala/5104226627001_5244664214001_5214841019001-vs.jpg'},
    {name: "Гвінея", capital: "Конакрі", photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Un_aper%C3%A7u_de_la_ville_de_conakry.jpg/275px-Un_aper%C3%A7u_de_la_ville_de_conakry.jpg'},
    {name: "Гвінея-Бісау", capital: "Бісау", photo: 'https://comments.ua/img/publications/850x478/ArZ95maU4QHeLe5qbeiUcKkCDF5xOnTN.jpg'},
    {name: "Гондурас", capital: "Тегусігальпа", photo: 'https://www.orangesmile.com/common/img_cities_w300/tegucigalpa-nobo42-30.jpg'},
    {name: "Гонконг", capital: "Гонконг", photo: 'https://bigcities.org/vacation/wp-content/uploads/sites/4/2021/03/Gonkong.jpg'},
    {name: "Гренада", capital: "Сент-Джорджес", photo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/7a/96/01/fort-george.jpg?w=500&h=300&s=1'},
    {name: "Гренландія", capital: "Нуук", photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Nuuk_city_below_Sermitsiaq.JPG/300px-Nuuk_city_below_Sermitsiaq.JPG'},
    {name: "Греція", capital: "Афіни", photo: 'https://feerie.com.ua/sites/default/files/styles/for_blog/public/2019-04/s1200%20%2851%29.jpeg?itok=XmV9flkT'},
    {name: "Грузія", capital: "Тбілісі", photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfJzx8tzZ6gJOGtPZpVhxlPbYhWm7izKdetxFvpEaiODvHXbbp_Vd4N65lwZZvv1TSEc&usqp=CAU'},
    {name: "Данія", capital: "Копенгаген", photo: 'https://tripmydream.cc/travelhub/travel/blocks/14/9872/block_149872.jpg?v1'},
    {name: "Джибуті", capital: "Джибуті", photo: 'https://tsikavi-fakty.com.ua/wp-content/uploads/2020/05/77449130e66b78625cdf45dcae390b51.jpg'},
    {name: "Домініка", capital: "Розо", photo: 'https://1.bp.blogspot.com/-nW1X9SmSgYQ/UsxuD462cbI/AAAAAAAABWw/Oz7mJ6zSoLY/s1600/8_Roseau,+Dominica.jpg'},
    {name: "росія", capital: "москва", photo: 'https://fakty.ua/photos2/article/39/96/399670w540zc0.jpg?v=232506'},
    {name: "Еквадор", capital: "Кіто", photo: 'https://www.pizzatravel.com.ua/uploads/2014/20262.jpg'},
    {name: "Екваторіальна Гвінея", capital: "Малабо", photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Malabo_a_13-oct-01.jpg/800px-Malabo_a_13-oct-01.jpg'},
    {name: "Еритрея", capital: "Асмара", photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Asmara2.jpg/640px-Asmara2.jpg'},
    {name: "Естонія", capital: "Таллін", photo: 'https://planetofhotels.com/guide/sites/default/files/styles/big_gallery_image/public/text_gallery/tallinn-6.jpg'},
]
let page = 1;

const prev = document.getElementById('prev');
const next = document.getElementById('next');

prev.addEventListener('click', () => handler(page -= 1));
next.addEventListener('click', () => handler(page += 1));
handler(page);

function handler(page, limit = 8) {
    const wrapper = document.getElementById('wrapper');

    const newArr = [];
    const startIndex = (page - 1) * limit;
    let endIndex = page * limit;

    if (endIndex < countries.length) {
        next.removeAttribute('disabled');
    } else {
        next.setAttribute('disabled', 'disabled');
        endIndex = countries.length;
    }
    if (startIndex > 0) {
        prev.removeAttribute('disabled');
    } else {
        prev.setAttribute('disabled', 'disabled');
    }

    for (let i = startIndex; i < endIndex; i++) {
        const country = countries[i];
        const item = document.createElement('div');
        const title = document.createElement('div');
        const type = document.createElement('div');
        const img = document.createElement('img');

        item.classList.add('wrapper', 'item');
        title.classList.add('titleType');
        type.classList.add('titleType')

        title.innerHTML = `Country: <i>${country.name}</i>`;
        type.innerHTML = `Capital: <i>${country.capital}</i>`;
        img.setAttribute('src', country.photo)

        item.append(title, type, img);
        newArr.push(item);
    }
    wrapper.replaceChildren(...newArr);
}
