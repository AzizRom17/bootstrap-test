<template>
   <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Login Administrateur</h5>
            <form class="form-signin" >
              <div class="form-label-group">
                <input type="text" id="inputEmail" class="form-control" placeholder="Email address" v-model="login" required autofocus>
                <label for="inputEmail">Login</label>
              </div>

              <div class="form-label-group">
                <input type="password" id="inputPassword" v-model="mdp" class="form-control" placeholder="Mot de passe" required>
                <label for="inputPassword">Mot de passe</label>
              </div>

              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">Remember password</label>
              </div>
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit" @click="login()">Sign in</button>
               <div v-if="error">
              {{error}}
               </div>
             <div v-if="success" id="success">
               Logged in Successfully
              </div>
              <hr class="my-4">
             </form>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import axios from 'axios';
 /* */ export default {
    name:'signin',
    data: () => {
      return {
        login:'',mdp:'',error:null,success:false
      }
    },
    methods:{
      
     /* handleSubmit(){
        axios.post('http://localhost:9592/candidat/addcandidat',{
         login:this.login,
         mdp:this.mdp
       }); */
      login: async function() {
        const auth = { login: this.login, mdp: this.mdp };
        // Correct username is 'foo' and password is 'bar'
        const url = 'http://localhost:9592/candidat/addcandidat';
        this.success = false;
        this.error = null;

        try {
           await axios.get(url, { auth }).then(res => res.data);
          this.success = true;
        } catch (err) {
          this.error = err.message;
        }
      }
    }}
    </script>

<style scoped>
:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: .75rem;
}

body {
  background: #007bff;
  background: linear-gradient(to right, #0062E6, #33AEFF);
}

.card-signin {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.card-signin .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.card-signin .card-body {
  padding: 2rem;
}

.form-signin {
  width: 100%;
}

.form-signin .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: .1rem;
  font-weight: bold;
  padding: 1rem;
  transition: all 0.2s;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group input {
  height: auto;
  border-radius: 2rem;
}

.form-label-group>input,
.form-label-group>label {
  padding: var(--input-padding-y) var(--input-padding-x);
}

.form-label-group>label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown)~label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}

.btn-google {
  color: white;
  background-color: #ea4335;
}

.btn-facebook {
  color: white;
  background-color: #3b5998;
}

/* Fallback for Edge
-------------------------------------------------- */

@supports (-ms-ime-align: auto) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for IE
-------------------------------------------------- */

@media all and (-ms-high-contrast: none),
(-ms-high-contrast: active) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}

</style>