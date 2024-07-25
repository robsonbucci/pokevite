<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg text-light navbar-dark bg-primary">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img
          src="https://cdn-icons-png.flaticon.com/512/188/188987.png"
          alt="logo"
          width="30"
          height="24"
          class="d-inline-block align-text-center text-decoration-none"
        />
        PokeVite
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- CONTENT -->
  <div class="main">
    <router-view></router-view>
  </div>

  <footer class="bg-primary text-light">
    <div>
      Updated
      {{
        `${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
          new Date(),
        )} ${new Date().getFullYear()}`
      }}
    </div>
  </footer>
</template>

<style>
footer {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 50px;
}
</style>
