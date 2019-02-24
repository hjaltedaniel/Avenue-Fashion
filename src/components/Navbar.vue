<template>
  <div id="nav" class="nav">
    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'product', params: { id: '1' } }">Product</router-link>
      <router-link :to="{ name: 'content', params: { id: '2' } }">Content</router-link>
      <router-link :to="{ name: 'user' }">Sign in</router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>