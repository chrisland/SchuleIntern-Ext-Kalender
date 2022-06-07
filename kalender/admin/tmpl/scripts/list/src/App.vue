<template>
  <div>

    <Error v-bind:error="error"></Error>
    <Spinner v-bind:loading="loading"></Spinner>

    <button class="si-btn" v-on:click="handlerAdd"><i class="fa fa-plus"></i> Neuer Kalender</button>
    <form class="list"  v-if="list.length > 0" v-on:change="handlerChange">

      <table class="si-table">
        <thead>
        <tr>
          <td>Title</td>
          <td>Farbe</td>
          <td>Sortierung</td>
          <td>Vorausgewählt</td>
          <td>Ferien</td>
          <td>Veröffentlichen (ICS)</td>
          <td>Status</td>
          <td>Status</td>
        </tr>
        </thead>
        <tbody>
        <tr v-bind:key="index" v-for="(item, index) in  list"
            class="">
          <td><input type="text" v-model="item.title"></td>
          <td><input type="text" v-model="item.color"></td>
          <td><input type="text" v-model="item.sort"></td>
          <td>
            <button class="si-btn si-btn-off"><i class="fas "></i> Aus </button>
            {{item.preSelect}}</td>
          <td>{{item.ferien}}</td>
          <td>{{item.public}}</td>
          <td>{{item.state}}</td>
          <td>
            <button class="si-btn si-btn-light" v-on:click="handlerDelete"><i class="fa"></i> Löschen</button>
            <button class="si-btn si-btn-red hidden"><i class="fa"></i> Wirklich Löschen</button>
          </td>
        </tr>
        </tbody>
      </table>

    </form>


  </div>
</template>

<script>

const axios = require('axios').default;

import Error from './mixins/Error.vue'
import Spinner from './mixins/Spinner.vue'


export default {
  components: {
    Error, Spinner
  },
  data() {
    return {
      apiURL: globals.apiURL,
      error: false,
      loading: false,

      list: []

    };
  },
  created: function () {
    this.loadData();
  },
  mounted() {

  },
  methods: {

    handlerAdd: function () {

      this.list.push( {'title': ''} );

    },
    handlerDelete: function () {

    },
    handlerDeleteSubmit: function () {

    },

    handlerChange: function () {

      console.log('change!');
    },
    loadData: function () {

      this.loading = true;
      var that = this;

      axios.get( this.apiURL+'/getKalender')
          .then(function(response){
            if ( response.data ) {
              if (!response.data.error) {
                that.list = response.data;
              } else {
                that.error = ''+response.data.msg;
              }
            } else {
              that.error = 'Fehler beim Laden. 01';
            }
          })
          .catch(function(){
            that.error = 'Fehler beim Laden. 02';
          })
          .finally(function () {
            // always executed
            that.loading = false;
          });

    }

  }

};
</script>

<style>

</style>