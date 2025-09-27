<script setup>

</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <NuxtLink class="navbar-brand" to="/">Home</NuxtLink>
        <NuxtLink class="navbar-brand" to="/about">About</NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NuxtLink class="nav-link active" to="/about">About</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link active" to="/products">Products</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link active" to="/about">About</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link active" to="/cart">Cart</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link active" to="/users">Users</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link active" to="/login">Login</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>

</style>