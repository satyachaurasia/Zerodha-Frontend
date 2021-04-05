<template>
  <div class="form-container">
    <div class="input-container">
      <label class="input-label" for="date">Date</label>
      <input class="form-input" type="date" name="date" :max="maxDate" v-model="date" />
    </div>
    <div class="input-container">
      <label class="input-label" for="date">Search</label>
      <input
        class="form-input"
        type="text"
        name="search"
        placeholder="Eg. Microsoft"
        v-model="search"
      />
    </div>

    <button class="downloadBtn" @click="onDownloadBtnClick()">Download CSV</button>
  </div>
</template>

<script>
var moment = require("moment");
import axios from "axios";

export default {
  name: "FormContainer",
  created() {
    this.$store.dispatch("getSearchQuery", {
      date: this.date,
      search: this.search
    });
  },
  computed: {
    maxDate() {
      return moment(new Date()).format("YYYY-MM-DD");
    },
    result() {
      return this.$store.state.result;
    }
  },
  data() {
    return {
      date: moment(new Date()).format("YYYY-MM-DD"),
      search: ""
    };
  },

  methods: {
    onDownloadBtnClick() {
      axios
        .get(`http://15.206.70.97/api/core/download-csv/`, {
          params: {
            date: this.date,
            q: this.search
          },
          config: {
            responseType: "blob"
          }
        })
        .then(response => {
          var element = document.createElement("a");
          element.setAttribute(
            "href",
            "data:text/csv;charset=utf-8," + encodeURIComponent(response.data)
          );
          element.setAttribute("download", "result.csv");

          element.style.display = "none";
          document.body.appendChild(element);

          element.click();

          document.body.removeChild(element);
        })
        .catch(console.error);
    }
  },

  watch: {
    search: function(val, oldVal) {
      this.$store.dispatch("getSearchQuery", {
        date: this.date,
        search: this.search
      });
    },
    date: function(val, oldVal) {
      this.$store.dispatch("getSearchQuery", {
        date: val,
        search: this.search
      });
    }
  }
};
</script>

<style scoped>
.downloadBtn {
  padding: 12px 22px;
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  background-color: #009688;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%),
    0px 1px 5px 0px rgb(0 0 0 / 12%);
  min-width: 64px;
  border-radius: 4px;
  cursor: pointer;
  border: 0;
  outline: 0;
  text-transform: uppercase;
  height: 3rem;
  align-self: flex-end;
  margin-bottom: 0.4rem;
}

.form-container {
  display: flex;
  flex-direction: row;
  gap: 1.5em;
  width: auto;
  flex-wrap: wrap;
  margin-top: 2rem;
  background-color: #fff;
  padding: 24px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 10px;
}

.input-label {
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: 700;
  color: #2e897f;
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-input {
  width: 300px;
  font-size: 1rem;
  font-weight: 500;
  border-bottom-width: 2px;
  padding: 15.5px 12px;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 4px;
}

.form-input:focus {
  outline-color: #2e897f;
  color: #2e897f;
}

@media (max-width: 400px) {
  .form-input {
    width: 100%;
  }
  .input-container {
    width: 100%;
  }
}
</style>
