<template>
  <div>
    <h1>Master Table</h1>
    <router-link :to="{ name: 'entry'}">Click to open Details empty page for testing that router link works outside ag-grid</router-link>
    <div>&nbsp;</div>
    <div>
      <ag-grid-vue style="width: 100%; height: 800px" class="ag-theme-balham"
                   :gridOptions="gridOptions"
                   :columnDefs="columnDefs"
                   :rowData="rowData"
                   :showToolPanel="false"
                   :enableColResize="true"
                   :enableSorting="true"
                   :enableFilter="false"
                   :groupHeaders="true"
                   :suppressRowClickSelection="true"
                   :toolPanelSuppressGroups="true"
                   :toolPanelSuppressValues="true"
                   headerHeight="36"
                   rowSelection="multiple"
      ></ag-grid-vue>
    </div>
  </div>
</template>

<script>
  import {AgGridVue} from 'ag-grid-vue'
  import VueRouter from 'vue-router'

  const router = new VueRouter();

    export default {
      name: "Master",
      data () {
        return {
          gridOptions: [],
          columnDefs: [],
          rowData: null
        }
      },
      components: {
        'ag-grid-vue': AgGridVue,
        'link-renderer': {
          router,
          // This is non-working version
          template: '<router-link to="/details">{{params.value}}</router-link>'
          // And this works.
          // template: '<a href="#/details">{{params.value}}</a>'
        }
      },
      methods: {
        createHeader () {
          this.columnDefs = [
            { field: 'id', headerName: 'Row', width: 110 },
            { field: 'link', headerName: 'Link', width: 200, cellRendererFramework: 'link-renderer' }
          ]
        },
        createRowData () {
          const rowData = [];
          for (let i = 0; i < 100; i++) {
            rowData.push({
              id: i+1,
              link: 'Row' + i
            })
          }
          this.rowData = rowData;
        }
      },
      beforeMount () {
        this.createHeader()
        this.gridOptions = {}
        this.createRowData()
      }
    }
</script>

<style scoped>

</style>
