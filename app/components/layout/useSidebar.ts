import { ref } from "vue"

const isSidebarOpen = ref(false)   // mobile
const isCollapsed = ref(false)     // desktop collapse

export const useSidebar = () => {
  const toggleMobile = () => {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  const toggleCollapse = () => {
    isCollapsed.value = !isCollapsed.value
  }

  return {
    isSidebarOpen,
    isCollapsed,
    toggleMobile,
    toggleCollapse
  }
}