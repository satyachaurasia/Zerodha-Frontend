<template>
  <div class="table-container">
    <table class="table-style">
      <thead>
        <tr class="firstRow">
          <th>Code</th>
          <th>Name</th>
          <th>Open</th>
          <th>High</th>
          <th>Low</th>
          <th>Close</th>
        </tr>
      </thead>
      <tbody v-if="result !== null && result.length > 0">
        <tr v-for="(obj, index) in result" :key="index">
          <td data-th="Code">
            {{ obj.CODE }}
          </td>
          <td data-th="Name">
            {{ obj.NAME }}
          </td>
          <td data-th="Open">
            {{ obj.OPEN }}
          </td>
          <td data-th="High">{{ obj.HIGH }}</td>
          <td data-th="Low">{{ obj.LOW }}</td>
          <td data-th="Close">{{ obj.CLOSE }}</td>
        </tr>
      </tbody>
      <tbody v-else-if="result !== null && result.length === 0">
        <tr>
          <td data-th="Code">
            NOT FOUND
          </td>
          <td data-th="Name">
            NOT FOUND
          </td>
          <td data-th="Open">
            NOT FOUND
          </td>
          <td data-th="High">NOT FOUND</td>
          <td data-th="Low">NOT FOUND</td>
          <td data-th="Close">NOT FOUND</td>
        </tr>
      </tbody>

      <tbody v-else>
        <tr>
          <td data-th="Code">
            Loading...
          </td>
          <td data-th="Name">
            Loading...
          </td>
          <td data-th="Open">
            Loading...
          </td>
          <td data-th="High">
            Loading...
          </td>
          <td data-th="Low">Loading...</td>
          <td data-th="Close">Loading...</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "StockTableContainer",
  computed: {
    result() {
      return this.$store.state.result;
    }
  }
};
</script>

<style scoped>
.table-container {
  padding: 24px;
  background-color: #fff;
  min-height: calc(100vh - 400px);
  margin-top: 2rem;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 10px;
}

.table-style {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
}

.table-style > thead > tr > th {
  color: #005b53;
  font-weight: 600;
  background-color: #00968840;
  text-align: center;
  padding: 16px;
}

.table-style > tbody > tr > td {
  text-align: center;
  padding: 16px;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
}

@media (max-width: 800px) {
  .firstRow {
    display: none;
  }
  tr {
    border: 1px solid black;
  }

  tbody tr:nth-child(odd) {
    background-color: #00968840;
  }

  td {
    display: block;
    border: none;
  }
  td:first-child {
    padding-top: 0.5em;
  }
  td:last-child {
    padding-bottom: 0.5em;
  }

  td:before {
    content: attr(data-th) ": ";
    font-weight: bold;
    display: inline-block;
    @media (min-width: 800px) {
      display: none;
    }
  }
}
</style>
