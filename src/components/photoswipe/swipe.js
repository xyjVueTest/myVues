import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import PhotoSwipe from 'photoswipe/dist/photoswipe.js'
import PhotoSwipeUI from 'photoswipe/dist/photoswipe-ui-default.js'
export default{
  name: 'photoswipe',
  methods: {
    open (index, list) {
      let pswpElement = document.querySelectorAll('.pswp')[index]
      let options = {
        history: false,
        captionEl: false,
        focus: false,
        shareEl: false, // 分享隐藏
        tapToClose: true, // 放大后，点击图片自动缩小还原
        showAnimationDuration: 0,
        hideAnimationDuration: 0

      }
      this.photoswipe = new PhotoSwipe(pswpElement, PhotoSwipeUI, list, options)
      this.photoswipe.init()
    },
    close () {
      this.photoswipe.close()
    }
  }
}

