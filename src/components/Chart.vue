<template>
    <v-container class="bg-light">
<area-chart :data="{'2017-01-01 00:00:00 -0800': 2, '2017-01-01 00:01:00 -0800': 5}"></area-chart>
<column-chart :data="[['Sun', 32], ['Mon', 46], ['Tue', 28]]"></column-chart>
<pie-chart :data="[['Nidaa', 44], ['Nahdha', 23]]"></pie-chart>

    </v-container>

</template>
<script>
import axios from 'axios';
export default {
     data() {
    return {
       candidat:[],
       
             
    };
    
},
created() {
    // Simple GET request using axios
    axios.get("http://localhost:9592/candidat/getallcandidats")
      .then(response => this.candidat = response.data);
  }}
</script>