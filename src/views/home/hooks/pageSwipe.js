import { computed } from 'vue'

function pageSwipe(props) {
  const pages = computed(() => {
    const pages = []
    props.list.forEach((item, index) => {
      const page = Math.floor(index / 8)
      if (!pages[page]) {
        pages[page] = []
      }
      pages[page].push(item)
    })
    return pages
  })
  return { pages }
}

export default pageSwipe