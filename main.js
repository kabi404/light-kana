var app = new Vue({
    el: '#app',

    data: {
      currentKana: {
        "character": "#",
        "romaji": "#",
      },
      syllabaries: {
          
      }
    },

    created: function() {
      this.getSyllabaries();
    },

    methods: {
      openSettings: function(){
        
      },
      check: function(){

      },

      getSyllabaries: function () {
        let $this = this;
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', './data/syllabaries.json', true);
        xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            $this.$data.syllabaries = xobj.responseText;
          }
        };
        xobj.send();
      }
    }
  })