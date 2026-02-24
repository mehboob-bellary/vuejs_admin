<script setup>
definePageMeta({
  layout: 'dashboard',
  title: 'Customers List'
})
// Nuxt API fetch (SSR + Client safe)
const { data, pending, error } = await useFetch(
  'https://dummyjson.com/users'
)

// users array
const users = computed(() => data.value?.users || [])

</script>

<template>
  <div> 

    <h1 class="mb-4">Customers list</h1>
    <!-- Loading -->
    <div v-if="pending" class="text-center py-10">
      Loading customers...
    </div>

    <!-- Error -->
    <div v-else-if="error" class="text-red-500">
      Failed to load customers
    </div>

    <!-- Customers Table -->
    <div v-else class="bg-white rounded-xl shadow border overflow-x-auto">
      <table class="w-full text-sm">
        <thead class="bg-gray-100 text-left">
          <tr>
            <th class="p-3">User</th>
            <th class="p-3">Email</th>
            <th class="p-3">Phone</th>
            <th class="p-3">Company</th>
            <th class="p-3 text-right">Age</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="user in users"
            :key="user.id"
            class="border-t hover:bg-gray-50"
          >
            <!-- User -->
            <td class="p-3 flex items-center gap-3">
              <img
                :src="user.image"
                class="w-10 h-10 rounded-full"
              />
              <div>
                <p class="font-medium">
                  {{ user.firstName }} {{ user.lastName }}
                </p>
                <p class="text-xs text-gray-500">
                  {{ user.username }}
                </p>
              </div>
            </td>

            <td class="p-3">{{ user.email }}</td>
            <td class="p-3">{{ user.phone }}</td>
            <td class="p-3">{{ user.company?.name }}</td>

            <td class="p-3 text-right font-semibold">
              {{ user.age }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>