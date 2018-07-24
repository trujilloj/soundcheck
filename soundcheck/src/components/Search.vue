<template>
    <div class="search">
        <h3>Search for Requests by City or ZIP</h3>
        <form>
            <input v-model="searchProperties.searchQuery.city" class="form-control mb-2 mr-sm-2" type="text" name="city" placeholder="City">            
            <input v-model="searchProperties.searchQuery.zip" class="form-control mb-2 mr-sm-2" type="text" name="zip" placeholder="ZIP" pattern="[0-9]+" maxlength="5" minlength="5">
            <button class="btn btn-success" @click.prevent="searchArea()">Search</button>
        </form>
        <div>
          {{searchProperties.searchMessage}}
        </div>
    </div>
</template>

<script>
export default {
  props: ["requestList", "filterRequests", "searchProperties"],
  data() {
    return {
    
    };
  },
  methods: {
    searchArea () {
      this.filterRequests()
    }
  }
};
</script>

<style scoped>
.search {
  background-color: RGBA(255, 255, 255, 0.25);
  padding: 2%;
}
</style>