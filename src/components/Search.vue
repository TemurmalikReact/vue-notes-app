<template>
  <div class="search">
    <input v-model="searchValue" type="text" placeholder="Search" />
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    searchLetter: String,
  },
  data() {
    return {
      searchValue: this.searchLetter,
    };
  },
  watch: {
    searchValue(val) {
      this.$emit("search-note", val);
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  flex: 1;
  padding: 0 50px;

  input {
    border: 2px solid rgb(245, 245, 245);
    border-radius: 25px;
    background: rgb(245, 245, 245);
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    font-family: "Montserrat";
    font-weight: 600;
    outline: none;

    &::placeholder {
      color: rgb(150, 150, 150);
    }

    &:focus {
      border-color: rgb(225, 225, 225);
    }
  }
}
</style>
