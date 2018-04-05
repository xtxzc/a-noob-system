const movieList = document.querySelector('.movie-list');
const pointer = document.querySelector('.pointer');
const container = document.querySelector('.container');
const scrollBtns = document.querySelector('.scroll-btn.scroll-prev');

const fakeData = [
  {
    img:
      'http://p0.meituan.net/165.220/movie/d2fe1f431a605054370a51cde7d62e3a327120.jpg',
    isShowing: true,
    nm: '环太平洋：雷霆再起',
    sc: 7.7,
    preferential: 0,
    ver: '2D/3D/IMAX 3D/中国巨幕/全景声',
    id: 78460
  },
  {
    img:
      'http://p1.meituan.net/165.220/movie/a08e257b4d2d4aaed7ddb96fe2fc64211676721.jpg',
    isShowing: true,
    nm: '古墓丽影：源起之战',
    sc: 8.0,
    preferential: 0,
    ver: '2D/3D/IMAX 3D/中国巨幕/全景声',
    id: 257739
  },
  {
    img:
      'http://p0.meituan.net/165.220/movie/9d51aaabb1f7a434fadb99330d5d2d05263193.jpg',
    isShowing: true,
    nm: '水形物语',
    sc: 7.9,
    preferential: 0,
    ver: '2D',
    id: 1204622
  },
  {
    img:
      'http://p1.meituan.net/165.220/movie/92b3426ac9a67fdcf503d02549e1aa7c3532120.jpg',
    isShowing: true,
    nm: '厉害了，我的国',
    sc: 9.6,
    preferential: 0,
    ver: '2D/中国巨幕',
    id: 1217637
  },
  {
    img:
      'http://p0.meituan.net/165.220/movie/8d79c5f5c57131a17139a4f652d69818607278.jpg',
    isShowing: false,
    nm: '萌犬好声音',
    sc: 7.0,
    preferential: 0,
    ver: '2D',
    id: 1182417
  },
  {
    img:
      'http://p1.meituan.net/165.220/movie/65ee71e7b58be81f612f2d28907d5ef01223359.jpg',
    isShowing: true,
    nm: '黑豹',
    sc: 8.0,
    preferential: 0,
    ver: '3D/IMAX 3D/中国巨幕/全景声',
    id: 341138
  },
  {
    img:
      'http://p1.meituan.net/165.220/movie/82a01e8f773c273ba10b96b5acb06196381700.jpg',
    isShowing: true,
    nm: '红海行动',
    sc: 9.5,
    preferential: 0,
    ver: '2D/3D/IMAX 3D/中国巨幕/全景声',
    id: 1182552
  },
  {
    img:
      'http://p0.meituan.net/165.220/movie/77d2bc0232adf8c8a27073e648e5227b119776.jpg',
    isShowing: true,
    nm: '比得兔',
    sc: 9.0,
    preferential: 0,
    ver: '2D/中国巨幕',
    id: 343762
  },
  {
    img:
      'http://p0.meituan.net/165.220/movie/679e1de839ceb7e9db28c4d92bf2c797870129.png',
    isShowing: true,
    nm: '脱皮爸爸',
    sc: 7.2,
    preferential: 0,
    ver: '2D',
    id: 344164
  },
  {
    img:
      'http://p1.meituan.net/165.220/movie/f042762fa4a975501b69d4f6af6520341035964.jpg',
    isShowing: true,
    nm: '小萝莉的猴神大叔',
    sc: 9.6,
    preferential: 0,
    ver: '2D',
    id: 343136
  },
  {
    img:
      'http://p0.meituan.net/165.220/movie/83caad0436199b20c13002730edd0acc3053429.jpg',
    isShowing: true,
    nm: '大坏狐狸的故事',
    sc: 8.2,
    preferential: 0,
    ver: '2D',
    id: 1212413
  },
  {
    img:
      'http://p1.meituan.net/165.220/movie/20e79043b6c5c11992e033bd182fae8b1032014.jpg',
    isShowing: true,
    nm: '三块广告牌',
    sc: 8.7,
    preferential: 0,
    ver: '2D',
    id: 342754
  },
  {
    img:
      'http://p1.meituan.net/165.220/movie/efb0a5e3989f45c4f3e22108bcc27ed71037307.jpg',
    isShowing: true,
    nm: '唐人街探案2',
    sc: 9.2,
    preferential: 0,
    ver: '2D/IMAX 2D/中国巨幕/全景声',
    id: 344990
  },
  {
    img:
      'http://p0.meituan.net/165.220/movie/367a27ab116b2ccb588734acf69e05205864298.jpg',
    isShowing: true,
    nm: '虎皮萌企鹅',
    sc: 8.0,
    preferential: 0,
    ver: '2D/3D',
    id: 328844
  }
];

// Load data from fake database to render movie details
window.addEventListener('load', function() {
  let movies = fakeData;
  console.log(typeof movies);
  movies.map(function(item, index) {
    const movieEl = document.createElement('div');
    const showList = document.createElement('div');
    const img = document.createElement('img');
    movieEl.setAttribute('data-index', index);
    movieEl.className = 'movie';
    if (index === 0) {
      movieEl.classList.add('active');
      showList.classList.add('active');
    }
    img.src = item.img;
    showList.classList.add('show-list');
    showList.setAttribute('data-index', index);
    showList.innerHTML = `
        <div class="movie-info">
          <div>
           <h3 class="movie-name">${item.nm}</h3>
          <span class="score sc">${item.sc}</span>
          </div>
          <div class="movie-desc">
            <div>
              <span class="key">时长 :</span>
              <span class="value">${110 + Math.floor(Math.random() * 10)}</span>
            </div>
            <div>
              <span class="key">类型 :</span>
              <span class="value"> 动作 </span>
            </div>
            <div>
              <span class="key">主演 :</span>
              <span class="value"> 约翰·波耶加</span>
            </div>
        </div>
    </div>`;
    movieEl.appendChild(img);
    movieList.appendChild(movieEl);
    container.appendChild(showList);
  });
});

// handle movie change
movieList.addEventListener('click', function(e) {
  e.preventDefault();
  if (e.target.tagName === 'IMG') {
    const parent = e.target.parentElement;
    const curActiveMv = document.querySelector('.active');
    const index = parent.getAttribute('data-index');
    const curActiveList = document.querySelector('.show-list.active');
    curActiveList.classList.remove('active');
    const showList = document.querySelector(
      `.show-list[data-index="${index}"]`
    );
    showList.classList.add('active');
    curActiveMv.classList.remove('active');
    parent.classList.add('active');
    pointer.style.left =
      71 + (parent.getAttribute('data-index') % 7) * 170 + 'px';
  }
});
