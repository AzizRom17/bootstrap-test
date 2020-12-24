<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Ajouter un candidat</div>
    
                    <div class="card-body table-dark">
                        <form @submit="formSubmit">
                        <strong>Nom:</strong>
                        <input type="text" class="form-control" v-model="nom">
                        <strong>Prenom:</strong>
                        <input type="text" class="form-control" v-model="prenom">
                        <strong>Date de naissance:</strong>
                        <div class="form-group row">
                        <label for="example-date-input" class="col-2 col-form-label">Date</label>
                       <div class="col-10">
                       <input class="form-control" type="date" v-model="date_naiss" value="2011-08-19" id="example-date-input">
                       </div>
                        </div>
                        <strong>Parti</strong>
                        <input type="text" class="form-control" v-model="parti">
                        <strong>Score</strong>
                        <input type="text" class="form-control" v-model="score">
                        <strong>Facebook</strong>
                        <input class="form-control" v-model="facebook">
                         <strong>Twitter</strong>
                        <input class="form-control" v-model="Twitter">
    
                        <button class="btn btn-success">Ajouter</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
     
<script>
import axios from 'axios';

    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
              nom: '',
              prenom: '',
              output: '',date_naiss:null,parti:"",score:null,facebook:"",Twitter:""
            };
        },
        methods: {
            formSubmit(e) {
                e.preventDefault();
                let currentObj = this;
                axios.post('http://localhost:9592/candidat/addcandidat', {
                    nom: this.nom,
                    prenom: this.prenom,
                    date_naiss:this.date_naiss,
                    parti:this.parti,
                    score:this.score,
                    facebook:this.facebook,
                    Twitter:this.Twitter

                })
                .then(function (response) {
                    currentObj.output = response.data;
                })
                .catch(function (error) {
                    currentObj.output = error;
                });
            }
        }
    }
</script>