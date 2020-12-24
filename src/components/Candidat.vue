<template>
<v-container >
  
     <table class="table table-dark table-striped ">
    <thead>
      <tr  > 
        
        <th>Nom</th>
        <th>Prénom</th>
        <th>Date de naissance</th>
        <th>Parti</th>
        <th>Score</th>
        <th>Twitter</th>
        <th>Facebook</th>
        <th>Action</th>


      </tr>
    </thead>
    <tbody>
      <tr v-for="can in candidat" v-bind:key="can.id">
        
        <td>{{can.nom}}</td>
        <td>{{can.prenom}}</td>
        <td>{{can.date_naiss}}</td>
        <td>{{can.parti}}</td>
        <td>{{can.score}}</td>
        <td>{{can.Twitter}}</td>
        <td>{{can.facebook}}</td>
        <div class="btn">
            <b-button class="btn btn-primary" @click="deleteData(can.id_candidat)">Modifier</b-button>
            <b-button class="btn btn-danger" @click="deleteData(can.id_candidat)">Supprimer</b-button>
          </div>
        
      </tr>
      
    </tbody>
    <router-link
  to="/addcandidat">
    <button type="button" class="btn btn-success">Ajouter un candidat</button>
    </router-link>
  </table>


</v-container>
</template>
<script>
import axios from 'axios';
export default {
    name:'Candidat',
     data() {
    return {
      candidat: [],id_candidat:""
    };
  },
  //*deleteData(Candidat.id_candidat){
   // axios.get("http://localhost:9592/candidat/removecandidat/"+can.id_candidat)
     // .then(response => this.candidat = response.data);

  //}
  
  created() {
    // Simple GET request using axios
    axios.get("http://localhost:9592/candidat/getallcandidats")
      .then(response => this.candidat = response.data);
  },
  methods:{
  deleteData(id_candidat)
  {axios.delete("http://localhost:9592/candidat/removecandidat/"+id_candidat)
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })}
}
};


</script>

<style>
body{
 background-repeat: no-repeat;
 background-attachment: fixed;
 background-size: cover;
 background-position: top;
 
 width: 100%;
 height: 100%;
 font-family: Arial, Helvetica;
 letter-spacing: 0.02em;
  font-weight: 400;
 -webkit-font-smoothing: antialiased; 
}
.blurred-box{
 
 
  top: calc(50% - 175px);
  left: calc(50% - 125px);
  background: inherit;
  border-radius: 2px;
  overflow: hidden;
}

</style>