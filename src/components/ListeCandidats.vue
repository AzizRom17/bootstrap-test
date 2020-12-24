
<template>

  <div class="container p-3 my-3 bg-white ">
<div class="row">
  <div class="col-sm-3 bg-transparent border border-danger" >


  <div class="card-body ">
    <img src="../assets/Trump.jpg" class="card-img-top rounded-circle" alt="Candidat">
    <h5 class="card-title">Donald Trump</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-danger">Voir le candidat</a>
  </div>
  
 </div>
 <div class="col-sm-3 bg-transparent border border-danger" >


  <div class="card-body ">
    <img src="../assets/Ghannouchi.jpg" class="card-img-top rounded-circle" alt="Candidat">
    <h5 class="card-title">Rached Ghannouchi</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-danger">Voir le candidat</a>
  </div>
  
 </div>
  <div class="col-sm-3 bg-transparent border border-danger" >


  <div class="card-body ">
    <img src="../assets/Hammami.jpg" class="card-img-top rounded-circle" alt="Candidat">
    <h5 class="card-title">Hamma Hammami</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-danger">Voir le candidat</a>
  </div>
  
 </div>
<div class="col-sm-3 bg-transparent border border-danger" >


  <div class="card-body ">
    <img src="../assets/Ayari.png" class="card-img-top rounded-circle" alt="Candidat">
    <h5 class="card-title">Yassine Ayari</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-danger">Voir le candidat</a>
  </div>
  
 </div>
 <div class="col-sm-3 bg-transparent border border-danger" >


  
  
 </div>
 
  </div>

</div>


</template>

<script>
import axios from 'axios';

export default {
    name:'ListeCandidats',
     data() {
    return {
      candidat: [],
    };
  },
  created() {
    // Simple GET request using axios
    axios.get("http://localhost:9592/candidat/getallcandidats")
      .then(response => this.candidat = response.data);
  }
};


</script>

<style>

</style>