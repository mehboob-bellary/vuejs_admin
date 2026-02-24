<script setup>
definePageMeta({
  layout: 'dashboard',
  title: 'Products List'
})

// Fetch products
const { data, pending, error } = await useFetch(
  'https://dummyjson.com/products'
)

// products array
const products = computed(() => data.value?.products || [])
</script>

<template>
  <div>
     <h1 class="mb-4">Products list</h1>

    <!-- Loading -->
    <div v-if="pending" class="text-center py-10">
      Loading products...
    </div>

    <!-- Error -->
    <div v-else-if="error" class="text-red-500">
      Failed to load products
    </div>

    <!-- Products Table -->
    <div v-else class="bg-white rounded-xl shadow border overflow-x-auto">
      <table class="w-full text-sm">
        <thead class="bg-gray-100 text-left">
          <tr>
            <th class="p-3">Product</th>
            <th class="p-3">Category</th>
            <th class="p-3 text-right">Price</th>
            <th class="p-3 text-right">Stock</th>
            <th class="p-3 text-right">Rating</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="product in products"
            :key="product.id"
            class="border-t hover:bg-gray-50"
          >
            <!-- Product -->
            <td class="p-3 flex items-center gap-3">
              <img
                :src="product.thumbnail"
                class="w-12 h-12 rounded-lg object-cover"
              />

              <div>
                <p class="font-medium">{{ product.title }}</p>
                <p class="text-xs text-gray-500 line-clamp-1">
                  {{ product.brand }}
                </p>
              </div>
            </td>

            <td class="p-3 capitalize">
              {{ product.category }}
            </td>

            <td class="p-3 text-right font-semibold">
              ${{ product.price }}
            </td>

            <td class="p-3 text-right">
              {{ product.stock }}
            </td>

            <td class="p-3 text-right">
              ⭐ {{ product.rating }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>