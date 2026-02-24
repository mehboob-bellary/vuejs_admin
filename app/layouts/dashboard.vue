<script setup>
import { onMounted } from 'vue'
import { useRoute } from '#app'
import Sidebar from "@/components/layout/Sidebar"
import { useSidebar } from "@/components/layout/useSidebar"

const route = useRoute()
const router = useRouter()
const { toggleMobile } = useSidebar()

definePageMeta({
  layout: 'dashboard',
  title: 'Dashboard Overview'
})

onMounted(() => {
  if (!localStorage.getItem('userToken')) {
    router.push('/')
  }
})

</script>

<template>
  <div class="flex">
    <Sidebar />

    <!-- CONTENT WRAPPER -->
    <div class="flex-1 lg:ml-[260px]">

      <!-- ✅ FIXED HEADER -->
      <header
        class="
          fixed top-0 right-0 h-14
          bg-white border-b
          flex items-center px-4
          z-40
          left-0 lg:left-[260px]
        "
      >
        <!-- Mobile button -->
        <button
          class="lg:hidden text-xl"
          @click="toggleMobile"
        >
          ☰
        </button>

        <h1 class="ml-4 font-semibold">{{ route.meta.title || 'Vue Dashboard' }} </h1>
      </header>

      <!-- ✅ CONTENT -->
      <main class="p-6 pt-16 bg-gray-50 min-h-screen">
        <slot />
        
      </main>

    </div>
  </div>
</template>