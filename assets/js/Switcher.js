// Tab Switcher
function Switcher() {
  this.switcher = document.querySelector('.switcher');
  this.tabs = document.querySelector('.tab-title-container');
  this.contents = document.querySelector('.tab-content-container');

  this.init = function() {
    this.initActive();
    this.setIndex();
    this.addListener();
  };

  this.initActive = function() {
    this.tabs.firstElementChild.classList.add('active');
    this.contents.firstElementChild.classList.add('active');
  };

  this.addListener = function() {
    this.tabs.addEventListener('click', function(e) {
      if (e.target.classList.contains('tab-title')) {
        const target = e.target;
        const curActiveTab = document.querySelector('.tab-title.active');
        const curActiveContent = document.querySelector('.tab-content.active');
        const tabIndex = target.getAttribute('data-index');
        const targetContent = document.querySelector(
          `.tab-content[data-index="${tabIndex}"]`
        );

        curActiveTab.classList.remove('active');
        curActiveContent.classList.remove('active');

        target.classList.add('active');
        targetContent.classList.add('active');
      }
    });
  };

  this.setIndex = function() {
    const tabTitles = this.tabs.children;
    const tabContents = this.contents.children;
    const len = tabTitles.length;
    for (let i = 0; i < len; i++) {
      tabTitles[i].setAttribute('data-index', i);
      tabContents[i].setAttribute('data-index', i);
    }
  };
}
