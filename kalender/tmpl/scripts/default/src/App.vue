<template>
  <div>

    <Error v-bind:error="error"></Error>
    <Spinner v-bind:loading="loading"></Spinner>

    <CalendarForm
        v-bind:kalender="kalender"
        v-bind:calendarSelected="calendarSelected"
        v-bind:acl="acl"></CalendarForm>

    <CalendarEintrag v-bind:kalender="kalender"
                     v-bind:acl="acl"></CalendarEintrag>

{{kalender}}
    <div id="" class="">
      <CalendarList v-bind:kalender="kalender"></CalendarList>
      <Calendar v-bind:eintraege="eintraege"
                v-bind:kalender="kalender"
                v-bind:acl="acl"></Calendar>
    </div>



  </div>
</template>

<script>

const axios = require('axios').default;

import Error from './mixins/Error.vue'
import Spinner from './mixins/Spinner.vue'

import Calendar from './components/Calendar.vue'
import CalendarList from './components/CalendarList.vue'
import CalendarForm from './components/CalendarForm.vue'
import CalendarEintrag from './components/CalendarEintrag.vue'


export default {
  components: {
    Error, Spinner,
    Calendar,
    CalendarList,
    CalendarForm,
    CalendarEintrag
  },
  data() {
    return {
      apiURL: globals.apiURL,
      error: false,
      loading: false,

      list: false, // from AJAX

      calendarSelected: [],

      kalender: [],
      eintraege: [],

      acl: false


    };
  },
  created: function () {

    //this.loadList();

    this.init();

  },
  computed: {



  },
  mounted() {

  },

  methods: {

    init: function () {

      this.acl = globals.acl;

      //console.log(globals);
      var that = this;


      this.loading = true;
      var that = this;
      axios.get( this.apiURL+'/GetKalender')
      .then(function(response){
        if ( response.data ) {
          if (response.data.error) {
            that.error = ''+response.data.msg;
          } else {

            that.kalender = response.data;
            that.kalender.forEach(function (o,i) {
              if (o.kalenderPreSelect == 1) {
                that.calendarSelected.push( parseInt(o.kalenderID) );
              }
            });


            EventBus.$emit('list--preselected', {
              selected: that.calendarSelected
            });

            EventBus.$emit('eintrag--load', {});


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




      EventBus.$on('list--selected', data => {

        that.calendarSelected = data.selected;
        EventBus.$emit('eintrag--load', {});
      });


      EventBus.$on('eintrag--load', data => {

        that.ajaxGet(
            'rest.php/GetKalenderEintrag/'+that.calendarSelected.join('-'),
            {},
            function (response, that) {

              //console.log(response.data);
              if (response.data.error == true && response.data.msg) {
                that.error = response.data.msg;
              } else {
                if (response.data && response.data.list && that.acl.rights.read) {
                  that.eintraege = response.data.list;
                } else {
                  that.eintraege = [];
                }
                that.error = '';
              }
            }
        );
      });


      EventBus.$on('eintrag--delete', data => {

        if ( that.acl.rights.delete != 1 ) {
          that.error = "Keine Löschrechte!";
          return false;
        }

        if (!data.id) {
          return false;
        }
        that.ajaxPost(
            'rest.php/DeleteKalenderEintrag',
            { data: data.id },
            {},
            function (response, that) {

              //console.log(response.data);

              if (response.data.error == true && response.data.msg) {
                that.error = response.data.msg;
              } else if (response.data.done == true) {

                EventBus.$emit('eintrag--load', {});

              }

            }
        );
      });



      EventBus.$on('eintrag--submit', data => {


        if ( that.acl.rights.write != 1 ) {
          that.error = "Keine Schreibrechte!";
          return false;
        }

        if (data.form.start == ''
            && data.form.title == ''
            && data.form.calenderID == '' ) {
          return false;
        }

        that.ajaxPost(
            'rest.php/SetKalenderEintrag',
            { data: data.form },
            {},
            function (response) {

              if (response.data.error == true && response.data.msg) {
                that.error = response.data.msg;
              } else if (response.data.done == true) {
                EventBus.$emit('eintrag--form-reset', {});
                EventBus.$emit('eintrag--load', {});
              }

            }
        );

      });


    },

    loadList: function () {

      this.loading = true;
      var that = this;
      axios.get( this.apiURL+'/getList')
      .then(function(response){
        if ( response.data ) {
          if (response.data.error) {
            that.error = ''+response.data.msg;
          } else {
            that.list = response.data;
            that.indexList = 0;
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