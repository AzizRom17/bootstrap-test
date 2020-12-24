<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
   <a href="#" class="navbar-brand">
      <!-- Logo Image -->
      <img src="../assets/logoelection.png" width="45" alt="" class="d-inline-block align-middle mr-2">
      <!-- Logo Text -->
      <span class="text-uppercase font-weight-bold">Elections 2020</span>
    </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to='/login'>
        <a class="nav-link" href="#">Inscription <span class="sr-only">(current)</span></a>
        </router-link>
      </li>
      <li class="nav-item active">
        <router-link to='/candidat'>
        <a class="nav-link" href="#">Candidats <span class="sr-only">(current)</span></a>
        </router-link>
      </li>
       <li class="nav-item active">
        <router-link to='/chart'>
        <a class="nav-link" href="#">Chart <span class="sr-only">(current)</span></a>
        </router-link>
      </li>
      
     
    </ul>
    <!-- <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>-->
  </div>
</nav>
</template>

<script>

export default {
    
}
</script>

<style>

</style>